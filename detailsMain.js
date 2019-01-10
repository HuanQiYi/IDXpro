//配置模块路径
require.config({
	paths:{
		jquery:"jquery-1.10.1.min",
		all:"all"
	}
})

require(["all"],function(all){
	all.all();
})