<?php
namespace app\admin\model;



class Goods extends \think\Model{
 
 	



	// 保存信息
	public function saveInfo()
	{
		db('class')->insert([
				'class_name'=>input('class_name'),
				'class_price'=>input('class_price'),
				'class_content'=>input('class_content'),
				'create_time'=>time(),
				'cate_id'=>input('cate_id'),
			]);
	}
			  
}

?>