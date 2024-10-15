<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Button extends Model
{
    use HasFactory;

    /**
     * @var array|mixed|string|null
     */
    public int $id;
    public string $title;
    public string $link;
    public string $color;
}
