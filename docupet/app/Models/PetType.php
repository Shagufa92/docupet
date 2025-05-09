<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class PetType extends Model
{
    use HasFactory;

    protected $fillable = ['name'];

    protected $hidden = ['created_at', 'updated_at'];

    public function breeds()
    {
        return $this->hasMany(PetBreed::class);
    }

    public function pets()
    {
        return $this->hasMany(Pet::class);
    }

}