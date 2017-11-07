<?php
namespace app\api\controller;

class Category extends \think\Controller
{	
	//一级分类
    public function index()
    {
    	$list=db("procates")
    			->field('id,title')
    			->where("pid=0")
    			->select();

    	return json($list);
    }

    //二级分类
    public function secLevel()
    {	
    	$level_id=input('level_id');
    	$list=db("procates")
    			->field('id,title')
    			->where("pid=$level_id")
    			->select();

    	return json($list);
    }
   
   
}
