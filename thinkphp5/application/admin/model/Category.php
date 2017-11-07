<?php
namespace app\admin\model;



class Category extends \think\Model{
 

	// 获取一二级分类 
	function getParentCate()
	{
		return db("category")
				->field("cate_name,id,level,parent_id")
				->where("level<3")
				->select();
 
	}



	
}

?>