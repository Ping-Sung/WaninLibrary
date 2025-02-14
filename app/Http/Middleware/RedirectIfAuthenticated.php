<?php

namespace App\Http\Middleware;

use App\Providers\RouteServiceProvider;
use Closure;
use Illuminate\Support\Facades\Auth;
use Tymon\JWTAuth\Token;

class RedirectIfAuthenticated
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @param  string|null  $guard
     * @return mixed
     */
    public function handle($request, Closure $next, $guard = null)
    {
        if (isset($_COOKIE['authorization'])) {
            // 有登入 cookie

            // 從cookie取得token
            $bearer_token = $_COOKIE['authorization'];
            $rawtoken = trim(strstr($bearer_token, ' '));
            $token = new Token($rawtoken);
            $request->headers->set('authorization', 'Bearer ' . $token);
        }
        
        if (Auth::guard($guard)->check()) {
            return redirect(RouteServiceProvider::HOME);
        }

        return $next($request);
    }
}
