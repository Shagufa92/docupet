<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Pet extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'age',
        'dob',
        'gender',
        'pet_type_id',
        'breed_id',
    ];

    protected $hidden = ['created_at', 'updated_at'];

    public function petType()
    {
        return $this->belongsTo(PetType::class);
    }

    public function petBreed()
    {
        return $this->belongsTo(PetBreed::class, 'breed_id');
    }
}
