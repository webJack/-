<?php
namespace app\api\controller;

class Contact extends \think\Controller
{
    public function index()
    {
    	$list=db("contact")
    			->field('contact,department,email,phone,fax,qq,aliww,msn,address,zipcode,company')
    			->where("contact='杨英杰'")
    			->find();

    	return json($list);
    }
   
   
}
