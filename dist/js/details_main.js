//配置模块路径
require.config({
	paths:{
		"jquery-1.10.1.min":"jquery-1.10.1.min.js",
		magnifier:"magnifier.js",
		details:"details.js"
	}
	/*shim:{
		"magnifier":["jquery"],
		"details":["jquery"]
	}*/

})

//运行模块
require(["magnifier","jquery-1.10.1.min"],function(details,$){
	magnifier.magnifier($(".div1"),$(".div3"),$(".div2"))

})