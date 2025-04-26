<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class PetBreed extends Model
{
    use HasFactory;

    protected $fillable = ['name', 'pet_type_id', 'is_dangerous'];

    protected $hidden = ['created_at', 'updated_at'];

    public function petType()
    {
        return $this->belongsTo(PetType::class);
    }

    public function pets()
    {
        return $this->hasMany(Pet::class);
    }
}
