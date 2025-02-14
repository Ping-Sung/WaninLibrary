<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateInformationTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('information', function (Blueprint $table) {
            $table->id();
            $table->string('email')->comment('信箱');
            $table->string('tel')->comment('電話');
            $table->string('fax')->comment('傳真');
            $table->string('recommendation_title')->comment('十本好書標題');
            $table->string('cover_image')->comment('首頁圖片');
            $table->string('donate_image')->comment('好書捐贈方法圖片');
            $table->string('address')->comment('地址');
            $table->time('open_at')->comment('開館時間');
            $table->time('close_at')->comment('閉館時間');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('information');
    }
}
