<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Services\AnnouncementService;
use App\Services\ActivityService;
use App\Services\InformationService;
use App\Services\BookService;
use App\Services\DonorService;

class HomeController extends Controller
{
    public $AnnouncementService;
    public $ActivityService;
    public $InformationService;
    public $BookService;
    public $DonorService;

    public function __construct(){
        $this->middleware('auth.web')->only('backend');
        $this->AnnouncementService = new AnnouncementService();
        $this->ActivityService = new ActivityService();
        $this->InformationService = new InformationService();
        $this->BookService = new BookService();
        $this->DonorService = new DonorService();
    }

    public function index(){
        $active_num = 0;
        $newsList = $this->AnnouncementService->getListForIndex();
        $activities = $this->ActivityService->getListForIndex();
        $activities_top = $this->ActivityService->getListForIndex_top();
        $information = $this->InformationService->getListForIndex();
        $recommendation = $this->InformationService->recommendation_getFirst();
        $recommendation_books = $recommendation['books'];
        $recommendation_title = $recommendation['recommendation_title'];

        return view('frontend.index', compact('active_num', 'newsList', 'activities', 'activities_top', 'information', 'recommendation_books', 'recommendation_title'));
    }

    // 關於拾本書堂
    public function about(){
        $active_num = 0;
        return view('frontend.about', compact('active_num'));
    }

    // 即時公告/重要消息頁面
    public function announcements(){
        $active_num = 1;
        return view('frontend.announcements', compact('active_num'));
    }

    // 即時公告/重要消息 api
    public function getAnnouncementsList(Request $request){
        $this->validate($request, [
            'skip' => 'nullable|integer',
        ]);
        // take = 8 一頁8筆資料
        $announcements = $this->AnnouncementService->getListFrontend($request);
        $totalcount = $this->AnnouncementService->count();
        return response()->json([
            'status' => 'OK',
            'announcements' => $announcements,
            'totalcount' => $totalcount
        ]);
    }

    // 即時公告/重要訊息 detail
    public function announcements_show($id){
        $active_num = 1;
        $announcement = $this->AnnouncementService->getOne($id);
        return view('frontend.announcements_show', compact('active_num', 'announcement'));
    }

    // 近期活動 頁面
    public function activities(){
        $active_num = 2;
        return view('frontend.activities', compact('active_num'));
    }

    // 近期活動/主題書單  api
    public function getActivitiesList(Request $request){
        $this->validate($request, [
            'skip' => 'nullable|integer',
            'type' => 'nullable|integer',  // 1:近期活動 2:主題書單

        ]);
        // take = 4 一頁4筆資料
        $type = $request->type ?? 1; // 1:近期活動 2:主題書單
        $activities = $this->ActivityService->getListFrontend($request, $type);
        $totalcount = $this->ActivityService->count($type);
        return response()->json([
            'status' => 'OK',
            'activities' => $activities,
            'totalcount' => $totalcount
        ]);
    }

    // 主題書單  頁面
    public function recommandations(){
        $active_num = 2;
        return view('frontend.recommandations', compact('active_num'));
    }

    // 近期活動/主題書單 detail
    public function activities_show($id){
        $active_num = 1;
        $activity = $this->ActivityService->getOne($id);
        return view('frontend.activities_show', compact('active_num', 'activity'));
    }

    public function books(){
        $active_num = 3;
        return view('frontend.books', compact('active_num'));
    }

    // 館藏查詢/索取書單 detail
    public function books_show($id){
        $active_num = 1;
        $book = $this->BookService->getOne($id);
        return view('frontend.activities_show', compact('active_num', 'book'));
    }

    public function donors(){
        $active_num = 4;
        return view('frontend.donors', compact('active_num'));
    }

    // 捐書人捐贈書籍查詢 detail
    public function donatedBooks_show($id){
        $active_num = 1;
        $donor = $this->DonorService->getOne($id);
        $bookList = $donor->books;
        $isSearched = 0; //判斷是否從捐贈書籍查詢來的結果
        return view('frontend.donatedBooks_show', compact('active_num', 'donor', 'bookList', 'isSearched'));
    }

    public function donatedBooks(){
        $active_num = 4;
        return view('frontend.donatedBooks', compact('active_num'));
    }

    public function searchDonatedBooks(Request $request){
        $this->validate($request, [
            'donor_name' => 'required',
            'donor_tel' => 'nullable',

        ]);
        $active_num = 4;
        $result = $this->DonorService->searchDonatedBooks($request);
        if($result['status'] == 200){
            $id = $result['donor_id'];
            $isSearched = $result['isSearched'];
            // return redirect()->action('homecontroller@', [$id]);
            return view('frontend.donatedBooks_show', compact('id', 'isSearched'));
        }else{
            return response()->json([
                'status' => $result['status'],
                'message' => $result['message']
            ]);
        }

    }

    public function donations(){
        $active_num = 0;
        $information = $this->InformationService->getListForIndex();
        $donation_img = $information->donate_image;
        return view('frontend.donations', compact('active_num', 'donation_img'));
    }

    public function freeBooks(){
        $active_num = 0;
        return view('frontend.freeBooks', compact('active_num'));
    }

    public function backend(){
        return view('backend');
    }


}
