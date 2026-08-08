<?php

namespace App\Providers;

use Illuminate\Http\Request;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    public function register(): void
    {
        //
    }

    public function boot(): void
    {
        $this->app->make(\Illuminate\Foundation\Configuration\Exceptions::class)
            ->shouldRenderJsonWhen(function (Request $request) {
                return $request->is('api/*');
            });
    }
}