<?php

namespace App\Services;
use App\Announcement as AnnouncementEloquent;
use Carbon\Carbon;


class AnnouncementService extends BaseService
{
    public function add($request)
    {

        $user = auth('api')->user();
        $announcement = AnnouncementEloquent::create([
            'last_update_user_id' => $user->id,
            'title' => $request->title,
            'content' => $request->content,
        ]);

        if($request->is_top == true)
            $this->change_top($announcement->id);

        return $announcement->id;
    }

    public function getList()
    {
        $announcements = AnnouncementEloquent::get();
        foreach ($announcements as $announcement) {
            $announcement->change_top = '<a href="'.route('announcements.change_top', [$announcement->id]).'" class="btn btn-md btn-info"><i class="fas fa-info-circle"></i></a>';
            $announcement['action'] =
                '<a href="' . route('announcements.show', [$announcement->id]) . '" class="btn btn-md btn-info"><i class="fas fa-info-circle"></i></a>
                <a href="' . route('announcements.edit', [$announcement->id]) . '" class="btn btn-md btn-success"><i class="fas fa-pencil-alt"></i></a>
                <a href="#" class="btn btn-md btn-danger"><i class="far fa-trash-alt"></i></a>';
        }
        return $announcements;
    }

    public function getListFrontend($request)
    {
        $take = 8;
        $skip = $request->skip ?? 0;
        $today = Carbon::today();
        $announcements = AnnouncementEloquent::orderBy('is_top', 'desc')->orderBy('created_at', 'desc')->skip($skip)->take($take)->get();
        foreach ($announcements as $announcement) {
            $announcement->showTitle = $announcement->showTitle();
            $announcement->isNew = ($today->diffInHours($announcement->created_at) <= 24);
            $announcement->detailURL = route('front.announcements.show', [$announcement->id]);
        }
        return $announcements;
    }

    public function count()
    {
        $total = AnnouncementEloquent::count();
        return $total;
    }

    public function getOne($id)
    {
        $announcements = AnnouncementEloquent::findOrFail($id);
        return $announcements;
    }

    public function update($request, $id)
    {
        $announcement = $this->getOne($id);
        $user = auth('api')->user();
        $announcement->update([
            'last_update_user_id' => $user->id,
            'title' => $request->title,
            'content' => $request->content,
        ]);
        if($request->is_top == true)
            $this->change_top($id);

        return $announcement->id;
    }

    public function delete($id)
    {
        $announcement = $this->getOne($id);
        $announcement->delete();
    }

    public function change_top($id){
        $item = AnnouncementEloquent::where('is_top', true)->first();
        if(!is_null($item)){
            $item->update(['is_top' => false]);
        }
        AnnouncementEloquent::find($id)->update(['is_top' => true]);
    }

    public function getListForIndex(){
        $news = AnnouncementEloquent::orderBy('is_top', 'desc')->orderBy('created_at', 'desc')->take(3)->get();
        foreach ($news as $new) {
            $new->detailURL = route('front.announcements.show', [$new->id]);
        }
        return $news;
    }
}
