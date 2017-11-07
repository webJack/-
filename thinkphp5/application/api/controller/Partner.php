<?php
namespace app\api\controller;

//合作伙伴
class Partner extends \think\Controller
{
    public function index()
    {

    	$partner_list=Array(
    			Array(
    				Array("http://www.yxsdz.com/template/crystal_green/yxsdz_files/hzb_1%20(6).jpg"),
    				Array("http://www.yxsdz.com/template/crystal_green/yxsdz_files/hzb_1%20(7).jpg")
    			),
    			Array(
    				Array("http://www.yxsdz.com/template/crystal_green/yxsdz_files/hzb_1%20(1).jpg"),
    				Array("http://www.yxsdz.com/template/crystal_green/yxsdz_files/hzb_1%20(2).jpg")
    			),
    			Array(
    				Array("http://www.yxsdz.com/template/crystal_green/yxsdz_files/hzb_1%20(3).jpg"),
    				Array("http://www.yxsdz.com/template/crystal_green/yxsdz_files/hzb_1%20(4).jpg")
    			),
    			Array(
    				Array("http://www.yxsdz.com/template/crystal_green/yxsdz_files/hzb_1%20(5).jpg"),
    				Array("http://www.yxsdz.com/template/crystal_green/yxsdz_files/hzb_1%20(6).jpg")
    			),
    			Array(
    				Array("http://www.yxsdz.com/template/crystal_green/yxsdz_files/hzb_1%20(7).jpg"),
    				Array("http://www.yxsdz.com/template/crystal_green/yxsdz_files/hzb_1%20(1).jpg")
    			)

    		);
    	
    	return json($partner_list);
    }
   
   
}
