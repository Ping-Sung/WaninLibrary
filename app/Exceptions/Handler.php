<?php

namespace App\Exceptions;

use Illuminate\Foundation\Exceptions\Handler as ExceptionHandler;
use Throwable;

use Illuminate\Auth\AuthenticationException;
use Tymon\JWTAuth\Exceptions\TokenInvalidException;
use Tymon\JWTAuth\Exceptions\TokenBlacklistedException;
use Tymon\JWTAuth\Exceptions\TokenExpiredException;
use Illuminate\Validation\ValidationException as ValidationException;

class Handler extends ExceptionHandler
{
    /**
     * A list of the exception types that are not reported.
     *
     * @var array
     */
    protected $dontReport = [
        //
    ];

    /**
     * A list of the inputs that are never flashed for validation exceptions.
     *
     * @var array
     */
    protected $dontFlash = [
        'password',
        'password_confirmation',
    ];

    /**
     * Report or log an exception.
     *
     * @param  \Throwable  $exception
     * @return void
     *
     * @throws \Exception
     */
    public function report(Throwable $exception)
    {
        parent::report($exception);
    }

    /**
     * Render an exception into an HTTP response.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Throwable  $exception
     * @return \Symfony\Component\HttpFoundation\Response
     *
     * @throws \Throwable
     */
    public function render($request, Throwable $exception)
    {
        if ($exception instanceof TokenInvalidException) {
            if($request->wantsJson()){
                return response()->json([
                    'msg' => 'Token無效'
                ], 401);
            }else{
                throw new AuthenticationException(
                    'Unauthenticated.', ['api'], route('login')
                );
            }
        }
        
        if ($exception instanceof TokenBlacklistedException) {
            if($request->wantsJson()){
                return response()->json([
                    'msg' => 'Token被黑名單'
                ], 401);
            }else{
                throw new AuthenticationException(
                    'Unauthenticated.', ['api'], route('login')
                );
            }
        }
        
        if ($exception instanceof TokenExpiredException) {
            if($request->wantsJson()){
                return response()->json([
                    'msg' => 'Token逾期'
                ], 401);
            }else{
                throw new AuthenticationException(
                    'Unauthenticated.', ['api'], route('login')
                );
            }
        }

        if ($exception instanceof ValidationException) {
            return response()->json([
                'message' => __('The given data was invalid.'), 
                'errors' => $exception->validator->getMessageBag()
            ], 422);
        }
        return parent::render($request, $exception);
    }
}
