<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Reservation extends Model
{
    protected $fillable = [
        'name',
        'email',
        'phone',
        'guests',
        'date',
        'time',
        'requests',
        'status',
    ];
    protected $casts = [ // for automatic encryption itech
        'phone' => 'encrypted',
        'email' => 'encrypted',
    ];
}