<?php

namespace App\Http\Middleware;

use Closure;
use JWTAuth;
use Tymon\JWTAuth\Token;

class AdminOnly
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        if (isset($_COOKIE['authorization'])) {
            // 有登入 cookie

            // 從cookie取得token
            $bearer_token = $_COOKIE['authorization'];
            $rawtoken = trim(strstr($bearer_token, ' '));
            $token = new Token($rawtoken);

            // 解析token
            $payload = JWTAuth::decode($token);
            if(!is_null($payload)){
                // 驗證成功
                $request->headers->set('authorization', 'Bearer ' . $token);


                $user = auth('api')->user();

                if($user->status == 0){
                    $response = $next($request);
                    $response->headers->set('Content-Type', 'application/json; charset=UTF-8');
                    $response->headers->set('charset', 'utf-8');
                    return $response;
                }else{
                    return response()->json('你不是系統管理者，沒有此權限', 400);
                }
            }
        }
    }
}
