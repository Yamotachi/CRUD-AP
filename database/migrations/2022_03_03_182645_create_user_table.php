<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('user', function (Blueprint $table) {
            $table->id();
            $table->string("nome");
            $table->string("email");
            $table->string("senha");
            $table->string("cpf");
            $table->timestamp("data_criacao")->default(DB::raw('CURRENT_TIMESTAMP'));
            $table->timestamp("data_atualizacao")->default(DB::raw('CURRENT_TIMESTAMP on update CURRENT_TIMESTAMP'));
            $table->bigInteger("telefone");
            $table->unsignedBigInteger("role")->nullable();
            $table->foreign("role")->references("role_id")->on("role");
            $table->string("cidade");
            $table->string("endereco");
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('user');
    }
};