<?php
namespace app\api\controller;

class Channels extends \think\Controller
{
    public function index()
    {
    	$list=db("channels")
    			->field('id,title,content')
    			->select();

    	return json($list);
    }
   
   
}
