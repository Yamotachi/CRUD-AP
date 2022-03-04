<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class User extends Model
{
    use HasFactory;

    protected $table = "user";

    protected $fillable = [
        'nome',
        'email',
        'senha',
        'cpf',
        'data_criacao',
        'data_atualizacao',
        'telefone',
        'role',
        'cidade',
        'endereco'
    ];
    public $timestamps = false;

    public function role(){
        return $this->belongsTo("App\Models\Role", "role");
    }
}
