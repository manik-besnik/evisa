<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

/**
 * @property int $id
 * @property string $name
 *
 * @mixin Model
 * @property JobDemand<Collection,int> $job
 */
class Location extends Model
{
    protected $table = 'locations';

    protected $fillable = ['name'];

    public function jobs(): HasMany
    {
        return $this->hasMany(JobDemand::class);
    }
}
