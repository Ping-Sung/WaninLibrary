<?php

namespace App\Http\Middleware;

use Tymon\JWTAuth\Token;
use Illuminate\Auth\AuthenticationException;
use Closure;
use JWTAuth;

class RedirectIfNotAdmin
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
                    return $next($request);
                }else{
                    abort(403, '你不是系統管理者，無法瀏覽此頁面。');
                }
            }
        }
        throw new AuthenticationException(
            'Unauthenticated.', ['api'], $this->redirectTo($request)
        );
    }

    protected function redirectTo($request)
    {
        if (! $request->expectsJson()) {
            return route('login');
        }
    }
}
