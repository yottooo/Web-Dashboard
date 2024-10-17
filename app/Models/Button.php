<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * 
 *
 * @property int $id
 * @property string|null $title
 * @property string|null $link
 * @property string|null $color
 * @method static \Illuminate\Database\Eloquent\Builder|Button newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Button newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Button query()
 * @method static \Illuminate\Database\Eloquent\Builder|Button whereColor($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Button whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Button whereLink($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Button whereTitle($value)
 * @mixin \Eloquent
 */
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

    protected $fillable = ['title', 'link', 'color'];

    public $timestamps = false;

}
