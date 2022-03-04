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
        Schema::create('adress', function (Blueprint $table) {
            $table->id("endereco_id");
            $table->string("CEP");
            $table->string("enderco");
            $table->string("numero");
            $table->string("complemento");
            $table->string("bairro");
            $table->string("cidade");
            $table->string("estado");
            $table->string("pais");
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('adress');
    }
};
