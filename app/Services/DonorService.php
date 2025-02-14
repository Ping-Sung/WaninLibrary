<?php

namespace App\Services;

use App\Donor as DonorEloquent;
use App\Book as BookEloquent;
use Log;
use Carbon\Carbon;

class DonorService extends BaseService
{
    public function add($request)
    {
        $donor = DonorEloquent::create([
            'name' => $request->name,
            'birthday' => $request->birthday,
            'email' => $request->email,
            'tel' => str_replace('-','',$request->tel),
            'cellphone' => str_replace('-','',$request->cellphone),

            'address_zipcode' => $request->address_zipcode,
            'address_county' => $request->address_county,
            'address_district' => $request->address_district,
            'address_others' => $request->address_others,
            'content' => $request->content,
            'exposure' => $request->exposure,
        ]);

        $act_user = auth('api')->user();
        Log::channel('trace')->info('編號：' . $act_user->id . '，姓名：' . $act_user->name . ' 新增了一筆捐贈人，編號為：' . $donor->id . '。');

        return $donor->id;
    }

    public function nameIsInique($request)
    {
        $count = DonorEloquent::where('name', $request->name)->count();
        if($count == 0){
            return ['status' => 200, 'isUnique' => true, 'message'=>'無重複名稱之捐贈人'];
        }else{
            return ['status' => 200, 'isUnique' => false, 'message'=>'已有重複名稱之捐贈人'];
        }
    }

    public function count(){
        return DonorEloquent::count();
    }

    public function getList($request)
    {
        if($request->first_page){
            $skip = 0;
        }else{
            $skip = $request->skip ?? 0 ;
        }
        $take = $request->take ?? 10;
        $type = $request->type ?? 0;
        $orderby = $request->orderby ?? 2;
        $exposure = $request->exposure ?? 0;
        $keywords = ($request->keywords != "") ? explode(" ", $request->keywords) : [];

        $type_arr = ['','name', 'tel', 'cellphone', 'email'];

        // 搜尋
        if($keywords == [] && $exposure== 0 && $type== 0 && $orderby == 2){
            // all default
            $donorsModel = new DonorEloquent();
            $count = $donorsModel->count();
            $donors = $donorsModel->orderBy('created_at','desc')->skip($skip)->take($take)->get();

        }else{
            $donorsModel = DonorEloquent::query()->where(function ($query) use ($keywords, $type, $exposure, $type_arr) {

                if($type != 0 && $keywords != []){
                    foreach ($keywords as $keyword) {
                        $keyword = '%'.$keyword.'%';
                        $query->orWhere($type_arr[$type], 'like',$keyword);
                    }
                }elseif($keywords != []){
                    foreach ($keywords as $keyword) {
                        $keyword = '%'.$keyword.'%';
                        for($i = 1; $i<=4; $i++){
                            $query->orWhere($type_arr[$i], 'like',$keyword);
                        }
                    }
                }

            });
            if($exposure != 0){
                $donorsModel->where('exposure', $exposure);
            }
            $count = $donorsModel->count();
            if($orderby == 2){ //DESC
                $donors = $donorsModel->orderBy('created_at','desc')->skip($skip)->take($take)->get();
            }else { //ASC
                $donors = $donorsModel->orderBy('created_at','asc')->skip($skip)->take($take)->get();
            }

        }
        $c = 1;
        foreach($donors as $donor){
            $donor['index'] = $skip + $c;
            $donor['showContact'] = $donor->showContact();
            $donor['showExposure'] = $donor->showExposure();
            $donor['donateAmount'] = $donor->books()->count();
            if($donor->id == 1){
                $donor['action'] =
                '<a href="' . route('donors.show', [$donor->id]) . '" class="btn btn-md btn-info"><i class="fas fa-info-circle"></i></a>
                <a href="' . route('donors.edit', [$donor->id]) . '" class="btn btn-md btn-success"><i class="fas fa-pencil-alt"></i></a>';
            }else{
                $donor['action'] =
                '<a href="' . route('donors.show', [$donor->id]) . '" class="btn btn-md btn-info"><i class="fas fa-info-circle"></i></a>
                <a href="' . route('donors.edit', [$donor->id]) . '" class="btn btn-md btn-success"><i class="fas fa-pencil-alt"></i></a>
                <button type="button" class="btn btn-md btn-danger delete-btn"><i class="far fa-trash-alt"></i></button type="button">
                <span class="d-none">' . route('donors.destroy', [$donor->id]) . '</span>';
            }
            $c ++;
        }
        return [
            'donors' => $donors,
            'count' => $count
        ];
    }

    public function getOne($id)
    {
        $donor = DonorEloquent::findOrFail($id);
        return $donor;
    }

    public function update($request, $id)
    {
        $donor = $this->getOne($id);
        $donor->update([
            'name' => $request->name,
            'birthday' => $request->birthday,
            'email' => $request->email,
            'tel' => str_replace('-','',$request->tel),
            'cellphone' => str_replace('-','',$request->cellphone),

            'address_zipcode' => $request->address_zipcode,
            'address_county' => $request->address_county,
            'address_district' => $request->address_district,
            'address_others' => $request->address_others,
            'content' => $request->content,
            'exposure' => $request->exposure,
        ]);

        $act_user = auth('api')->user();
        Log::channel('trace')->info('編號：' . $act_user->id . '，姓名：' . $act_user->name . ' 修改了一筆捐贈人，編號為：' . $donor->id . '。');

        return $donor->id;
    }

    public function delete($id)
    {
        $donor = $this->getOne($id);
        $books = BookEloquent::where('donor_id', $donor->id)->get();
        foreach($books as $book){
            $book->donor_id = 1;
            $book->save();
        }
        $donor->delete();

        $act_user = auth('api')->user();
        Log::channel('trace')->info('編號：' . $act_user->id . '，姓名：' . $act_user->name . ' 刪除了一筆捐贈人，編號為：' . $donor->id . '，名稱為：' . $donor->name .  '。');
    }

    public function getDonorsByName($request){
        if(is_null($request->selectID)){
            $keyword = '%'.$request->keyword."%";
            $donors = DonorEloquent::where('name', 'like', $keyword)->take(30)->get();
        }else{
            if(is_null($request->keyword)){
                $donors = DonorEloquent::where('id', $request->selectID)->take(30)->get();
            }else{
                $keyword = '%'.$request->keyword."%";
                $donors = DonorEloquent::where('name', 'like', $keyword)->take(30)->get();
            }
        }

        return $donors;
    }

    public function searchDonatedBooks($request){
        $donor_name = $request->donor_name;
        $donor_tel = $request->donor_tel ?? null;

        if($donor_tel == null){
            // 第一步 輸入姓名
            $donor_tmp = DonorEloquent::where('name', $donor_name);
            $count = $donor_tmp->count();
            $br = "<br>";
            if($count == 1){
                $donor = $donor_tmp->first();
                $result = ['status' => 200, 'donor_id' => $donor->id, 'isSearched' => 1];
            }elseif($count > 1){
                $result = ['status' => 422, 'message' => "有多位擁有相同條件之捐贈人，<br>請協助輸入您的聯絡電話繼續查詢。"];
            }else{
                $result = ['status' => 404, 'message' => "您好，查無此資料，可能是我們疏忽了，<br>請來電或mail與我們聯繫，我們將提供您協助。"];
            }
        }else{
            $donor_tel = str_replace('-','',$donor_tel);
            // 第二步 輸入姓名、電話號碼
            $donor_tmp = DonorEloquent::where('name', $donor_name)->where('tel', $donor_tel)->orWhere('name', $donor_name)->where('cellphone', $donor_tel);
            $count = $donor_tmp->count();
            if($count == 1){
                $donor = $donor_tmp->first();
                $result = ['status' => 200, 'donor_id' => $donor->id, 'isSearched' => 1];
            }else{
                $result = ['status' => 404, 'message' => '您好，查無此資料，可能是我們疏忽了，<br>請來電或mail與我們聯繫，我們將提供您協助。'];
            }
        }

        return $result;

    }

    // getListFrontend
    public function getListFrontend($request)
    {
        if($request->firstPage == 1){
            // 強制從第一頁開始。
            $skip = 0;
        }else{
            // 看從第幾頁開始。
            $skip = $request->skip ?? 0 ;
        }

        $take = 8;
        $year = ($request->year == 0) ? null : $request->year ;
        $orderBy = ($request->orderBy == 0 || $request->orderBy == 1) ? 1 : 2 ;
        $keywords = ($request->keywords != "") ? explode(" ", $request->keywords) : [];

        $donors = new DonorEloquent();

        // 年份
        if(!is_null($year)){
            $donors = $donors->whereBetween('updated_at', [$year.'-01-01', $year.'-12-31']);
        }

        if(!is_null($keywords) && $keywords != []){
            $donors = $this->keywordSearch($donors, $keywords);
        }

        if($orderBy == 1){
            $donors = $donors->orderBy('created_at', 'desc');
        }else{
            $donors = $donors->orderBy('created_at', 'asc');
        }

        $count = $donors->count();
        $donors = $donors->skip($skip)->take($take)->get();

        $c = 1;
        foreach($donors as $donor){
            $donor->index = $skip + $c;
            $donor->showName = $donor->showName();
            $donor->donateAmount = $donor->books()->count();
            $donor->donatedBookURL = route('front.donatedBooks.show', [$donor->id]);
            $c ++;
        }

        return [
            'donors' => $donors,
            'count' => $count
        ];
    }

    private function keywordSearch($model, $keywords){
        $result = $model->where(function ($query) use ($keywords){
            $c = 0;
            foreach ($keywords as $keyword) {
                $keyword = '%'.$keyword.'%';
                if($c == 0){
                    $query->where('name', 'like', $keyword);
                    $c++;
                }else{
                    $query->orWhere('name', 'like', $keyword);
                }
            }
        });
        return $result;
    }

    public function getDonorBooksListFrontend($request){
        if($request->first_page){
            $skip = 0;
        }else{
            $skip = $request->skip ?? 0 ;
        }
        $take = 8;
        $books_tmp = BookEloquent::where('donor_id', $request->id);
        $count = $books_tmp->count();
        $books = $books_tmp->orderBy('created_at','desc')->skip($skip)->take($take)->get();
        $c = 1;

        foreach($books as $book){
            $book->index = $skip + $c;
            $book->showTitle =  $book->showTitle();
            $book->showStatus =  $book->showStatusFrontEnd();
            $book->bookURL = route('front.books.show', [$book->id]);
            $c ++;
        }
        return [
            'books' => $books,
            'count' => $count
        ];
    }
}
