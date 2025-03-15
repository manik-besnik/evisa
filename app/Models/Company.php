<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

/**
 *
 * @property int $id
 * @property string $name
 * @property string $contact_person
 * @property string $email
 * @property string $phone_no
 * @property string $whatsapp_no
 * @property string $city
 * @property string $area
 * @property string $address
 *
 * @mixin Model
 * @property JobDemand<int,Collection> $jobDemands
 */
class Company extends Model
{
    protected $table = 'companies';

    protected $fillable = ['name', 'contact_name', 'email', 'phone_no', 'whatsapp_no', 'city', 'area', 'address'];

    public function jobDemands(): HasMany
    {
        return $this->hasMany(JobDemand::class, 'company_id', 'id');
    }
}
