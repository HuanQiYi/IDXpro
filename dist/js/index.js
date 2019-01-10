define(["jquery"],function($){
	function index(){
		banner()
	}
	//轮播图
	function banner(){
		var con = 0;
		var timer = setInterval(function(){
			$(".banner li").css({
				display:"none",
				opacity:0.5
			})
			con++
			if(con == 6){
				con = 0
			}
			$(".banner li").eq(con).css("display","block")
			$(".banner li").eq(con).stop().animate({opacity:1}, 300)
		},3000)
	}


	return {
		index:index
	}
})