<?php
namespace app\api\controller;

class Article extends \think\Controller
{
    public function index()
    {

    	$list=db("articles")
    			->field('id,posttime,title')
    			->order('posttime DESC')
    			->paginate(15);
    	return json($list);
    }
    public function update()
    {
    	$list=db("articles")
    			->field('id,posttime,title')
    			->order('posttime DESC')
    			->limit(5)
    			->select();

    	return json($list);
    }
   
   
}
