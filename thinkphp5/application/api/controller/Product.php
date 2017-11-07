<?php
namespace app\api\controller;

class Product extends \think\Controller
{
    public function index()
    {
       $list=db("products")
    			->field('id,posttime,name,picpaths')
    			->paginate(10);

    	return json($list);
    }

    public function update()
    {
    	$list=db("products")
    			->field('id,posttime,name,picpaths')
    			->order('posttime DESC')
    			->limit(5)
    			->select();

    	return json($list);
    }

    public function cate()
    {	
    	$cate_id=input('cate_id');
    	$list=db("products")
    			->field('id,posttime,name,picpaths')
    			->where("cid=$cate_id")
    			->paginate(10);

    	return json($list);
    }
    //产品展示
    public function exhibition()
    {
    	$list=db("products")
    			->field('id,posttime,name,picpaths')
    			->order('posttime DESC')
    			->limit(4)
    			->select();

    	return json($list);
    }
    //查询一条产品数据
    public function oneproduct()
    {
    	$product_id=input('product_id');
    	$list=db("products")
    			->field('id,posttime,name,picpaths,content')
    			->where("id=$product_id")
    			->find();
    	return json($list);
    }
   
   
}
