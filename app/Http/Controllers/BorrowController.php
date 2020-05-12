<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Services\BorrowService;
use App\Http\Requests\BorrowRequest;

class BorrowController extends Controller
{
    public $BorrowService;

    public function __construct()
    {
        $this->middleware('auth.web')->only([
            'index', 'create', 'show', 'edit', 'circulation', 'borrow'
        ]);
        $this->middleware('auth.jwt')->only([
            'store', 'update', 'destroy',
        ]);
        $this->BorrowService = new BorrowService();
    }

    // 顯示借還書頁面
    public function circulation()
    {
        return view('circulation.index');
    }

    // 顯示書籍借出頁面
    public function borrow()
    {
        return view('circulation.borrow');
    }

    public function index()
    {
        $borrows = $this->BorrowService->getList();
        return view('borrows.index', compact('borrows'));
    }

    public function create()
    {
        return view('borrows.create');
    }

    public function show($id)
    {
        $borrow = $this->BorrowService->getOne($id);
        return view('borrows.show', compact('borrow'));
    }

    //APIs
    public function borrowBookByBarcode(BorrowRequest $request)
    {
        $msg = $this->BorrowService->add($request);
        return response()->json([
            'status' => 'OK',
            'msg' => $msg,
            'url' => route('borrows.index')
        ], 200);
    }

    public function getBorrowListByBorrowerID(Request $request)
    {
        $msg = $this->BorrowService->getBorrowListByBorrowerID($request->id);
        return response()->json($msg, 200);
    }


    public function getBorrowListByStatus(Request $request)
    {
        $msg = $this->BorrowService->getBorrowListByStatus($request->status);
        return response()->json($msg, 200);
    }

    public function getBorrowListByNoticed(Request $request)
    {
        $msg = $this->BorrowService->getBorrowListByNoticed($request->noticed);
        return response()->json($msg, 200);
    }

    public function returnBookByBarcode(Request $request)
    {
        $msg = $this->BorrowService->returnBookByBarcode($request->barcode);
        return response()->json(['msg' => $msg], 200);
    }

    public function bookExpired(Request $request)
    {
        $msg = $this->BorrowService->bookExpired($request->id);
        return response()->json(['msg' => $msg], 200);
    }

    public function Notified(Request $request)
    {
        $msg = $this->BorrowService->bookExpired($request->id);
        return response()->json(['msg' => $msg], 200);
    }
}
