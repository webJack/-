<?php
namespace app\api\controller;

class Adetail extends \think\Controller
{
    public function index()
    {
    	$article_id=input('article_id');
    	$prev_id=$article_id-1;
    	$next_id=$article_id+1;

    	$list=db("articles")
    			->field('id,posttime,title,content')
    			->where("id=$article_id or id=$next_id or id=$prev_id")
    			->select();

    	return json($list);
    }
   
   
}
