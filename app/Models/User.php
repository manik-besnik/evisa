<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Database\Factories\UserFactory;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;


/**
 * @property int $id
 * @property int $nationality_id
 * @property int $living_country_id
 * @property int $language_id
 * @property int $role
 * @property int|null $role_id
 * @property string|null $provider_id
 * @property string $name
 * @property string $email
 * @property string|null $phone
 * @property string|null $username
 * @property string|null $avatar
 * @property string|null $profession
 * @property string|null $city
 * @property string $password
 * @property bool|int $is_signup_complete
 *
 * @mixin Model
 *
 * @property Agency $agency
 */
class User extends Authenticatable
{
    /** @use HasFactory<UserFactory> */
    use HasFactory, Notifiable, HasApiTokens;

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'nationality_id',
        'living_country_id',
        'language_id',
        'role_id',
        'role',
        'name',
        'email',
        'phone',
        'username',
        'avatar',
        'profession',
        'city',
        'password',
        'is_signup_complete',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var list<string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];


    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'password' => 'hashed',
            'is_signup_complete' => 'boolean',
        ];
    }

    public function adminRole(): BelongsTo
    {
        return $this->belongsTo(Role::class, 'role_id', 'id');
    }

    public function nationality(): BelongsTo
    {
        return $this->belongsTo(Country::class, 'nationality_id', 'id')->select(['id', 'nationality']);
    }

    public function livingCountry(): BelongsTo
    {
        return $this->belongsTo(Country::class, 'living_country_id', 'id')->select(['id', 'name']);
    }

    public function preferredLanguage(): BelongsTo
    {
        return $this->belongsTo(Language::class, 'language_id', 'id')->select(['id', 'name']);
    }

    public function agency(): HasOne
    {
        return $this->hasOne(Agency::class);
    }


}
