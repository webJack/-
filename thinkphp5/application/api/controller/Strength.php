<?php
namespace app\api\controller;

//实力见证
class Strength extends \think\Controller
{
    public function index()
    {
    	
    	/*$strength_list=Array(
    			Array("http://www.yxsdz.com/template/crystal_green/yxsdz_files/check/yidali.jpg","意大利考察"),
    			Array("http://www.yxsdz.com/template/crystal_green/yxsdz_files/check/hanguo.jpg","韩国考察"),
    			Array("http://www.yxsdz.com/template/crystal_green/yxsdz_files/check/aoda.jpg","澳大利亚考察"),
    			Array("http://www.yxsdz.com/template/crystal_green/yxsdz_files/check/helan.jpg","荷兰考察"),
    			Array("http://www.yxsdz.com/template/crystal_green/yxsdz_files/check/jcs.jpg","检测室"),
    			Array("http://www.yxsdz.com/template/crystal_green/yxsdz_files/check/pohuai.jpg","破坏性检测"),
    			Array("http://www.yxsdz.com/template/crystal_green/yxsdz_files/check/ydjc.jpg","硬度检测"),
    			Array("http://www.yxsdz.com/template/crystal_green/yxsdz_files/check/cf.jpg","磁粉检测"),
    			Array("http://www.yxsdz.com/template/crystal_green/yxsdz_files/check/csb.jpg","超声波检测"),
    			Array("http://www.yxsdz.com/template/crystal_green/yxsdz_files/check/jju.jpg","检具检测"),
    			Array("http://www.yxsdz.com/template/crystal_green/yxsdz_files/check/cpcc.jpg","测成品尺寸检测")

    		);*/

    	$strength_list=Array(
    			Array(
    				Array("http://www.yxsdz.com/template/crystal_green/yxsdz_files/check/yidali.jpg","意大利考察"),
    				Array("http://www.yxsdz.com/template/crystal_green/yxsdz_files/check/hanguo.jpg","韩国考察")
    			),
    			Array(
    				Array("http://www.yxsdz.com/template/crystal_green/yxsdz_files/check/aoda.jpg","澳大利亚考察"),
    				Array("http://www.yxsdz.com/template/crystal_green/yxsdz_files/check/helan.jpg","荷兰考察")
    			),
    			Array(
    				Array("http://www.yxsdz.com/template/crystal_green/yxsdz_files/check/jcs.jpg","检测室"),
    				Array("http://www.yxsdz.com/template/crystal_green/yxsdz_files/check/pohuai.jpg","破坏性检测")
    			),
    			Array(
    				Array("http://www.yxsdz.com/template/crystal_green/yxsdz_files/check/ydjc.jpg","硬度检测"),
    				Array("http://www.yxsdz.com/template/crystal_green/yxsdz_files/check/cf.jpg","磁粉检测")
    			),
    			Array(
    				Array("http://www.yxsdz.com/template/crystal_green/yxsdz_files/check/csb.jpg","超声波检测"),
    				Array("http://www.yxsdz.com/template/crystal_green/yxsdz_files/check/jju.jpg","检具检测")
    			)

    		);
    	
    	return json($strength_list);
    }
   
   
}
