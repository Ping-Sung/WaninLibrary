<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::post('test_getBookDataByURL','BookController@getBookDataByURL');

// JWTAuth
Route::post('register', 'JWTAuthController@register');
Route::post('login', 'JWTAuthController@login')->name('api.login');
Route::get('me', 'JWTAuthController@me');
Route::post('logout', 'JWTAuthController@logout')->name('api.logout');
Route::post('forgetPassword', 'JWTAuthController@forgetPassword');
Route::post('refreshToken', 'JWTAuthController@refreshToken');
Route::post('resetPassword', 'JWTAuthController@resetPassword');

Route::prefix('/backend')->group(function(){

    // 機構管理路由
    Route::get('/agencies/json', 'AgencyController@getList')->name('agencies.getList');
    Route::get('/agencies/{id}/json', 'AgencyController@getOne')->name('agencies.getOne');
    Route::resource('/agencies', 'AgencyController', ['only' => [
        'store', 'update', 'destroy'
    ]]);

    //借閱者管理相關
    Route::post('/borrowers/activate','BorrowerController@activate');
    Route::get('/borrowers/json', 'AgencyController@getList')->name('borrowers.getList');
    Route::get('/borrowers/{id}/json', 'AgencyController@getOne')->name('borrowers.getOne');
    Route::resource('/borrowers', 'BorrowerController', ['only' => [
        'store', 'update', 'destroy'
    ]]);

    // 捐書人管理路由
    Route::get('/donors/json', 'DonorController@getList')->name('donors.getList');
    Route::get('/donors/{id}/json', 'DonorController@getOne')->name('donors.getOne');
    Route::resource('/donors', 'DonorController', ['only' => [
        'store', 'update', 'destroy'
    ]]);

    //書籍管理相關
    Route::post('/books/getBookDataByURL','BookController@getBookDataByURL')->name('books.bugurl');
    Route::get('/books/isbn/{isbn}/google', 'BookController@getDataByISBNFromGoogle')->name('books.isbn.google');
    Route::get('/books/json', 'BookController@getList')->name('books.getList');
    Route::get('/books/{id}/json', 'BookController@getOne')->name('books.getOne');
    Route::resource('/books', 'BookController', ['only' => [
        'store', 'update', 'destroy'
    ]]);
});

Route::group(['middleware' => 'auth.jwt'], function () {
    // 使用者管理 only for admin  except getUserByToken
    Route::get('getUsersByName', 'UserController@getUsersByName');
    Route::get('getUserByToken', 'UserController@getUserByToken');
    Route::get('/users/{id}/json', 'UserController@getOne')->name('users.getOne');
        // POST api/users   PATCH api/users/{user}  DELETE api/users/{user}
        // postman 測試的話用post 然後 多一個 _method = PATCH
    Route::resource('users', 'UserController')->only(['store', 'update', 'destroy']);

    // 登入紀錄
    Route::get('getLoginLogs', 'LoginLogController@getLoginLogs')->name('loginLogs.getList');
    Route::get('getLoginLogsOrderByASC', 'LoginLogController@getListOrderByASC');
    Route::get('getLoginLogsOrderByUserId', 'LoginLogController@getListOrderByUserId');
    Route::get('getLoginLogsOrderByUserIdASC', 'LoginLogController@getListOrderByUserIdASC');
    Route::get('getLoginLogsById', 'LoginLogController@getLoginLogsById');
    Route::get('getLoginLogsByUserId', 'LoginLogController@getLoginLogsByUserId');
    Route::get('getLoginLogsByUserName', 'LoginLogController@getLoginLogsByUserName');
    Route::get('getLoginLogsByDate', 'LoginLogController@getLoginLogsByDate')->name('loginLogs.getLoginLogsByDate');
    Route::get('getLoginLogsByMonth', 'LoginLogController@getLoginLogsByMonth')->name('loginLogs.getLoginLogsByMonth');
    Route::get('getLoginLogsByYear', 'LoginLogController@getLoginLogsByYear')->name('loginLogs.getLoginLogsByYear');

    // 借閱管理相關
    Route::get('getBookListByStatus','BorrowController@getBookListByStatus');
    Route::get('getBookListByNoticed','BorrowController@getBookListByNoticed');
        // 還書
    Route::post('returnBookByBarcode','BorrowController@returnBookByBarcode');
        // 借書
    Route::post('borrowBookByBarcode','BorrowController@borrowBookByBarcode');
    Route::post('bookExpired','BorrowController@bookExpired');
    Route::post('Notified','BorrowController@Notified');

    // 借閱日誌(logs)相關
    Route::get('getBorrowLogs','BorrowLogController@getList')->name('borrowLogs.getList');
    Route::get('getBorrowLogsByBorrowerId','BorrowLogController@getBorrowLogsByBorrowerId');
    Route::get('getBorrowLogsByBookId','BorrowLogController@getBorrowLogsByBookId');
    Route::get('getBorrowLogsByStatus','BorrowLogController@getBorrowLogsByStatus');
    Route::get('getBorrowLogsByTime','BorrowLogController@getBorrowLogsByTime');
    Route::get('getBorrowLogsByTimeRange','BorrowLogController@getBorrowLogsByTimeRange');

});

// 爬蟲
Route::post('getBookDataByURL','BookController@getBookDataByURL')->name('books.bugurl');
