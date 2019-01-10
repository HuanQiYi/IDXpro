define(["jquery"],function($){
	function all(){
		//页面滚动跟随固定定位
		scrollFixed($(".navBox"),60);

		navShow()
		navChange()
		navData()
		//改变字体颜色
		mouseenterChange($(".header div a").eq(0),"#fff");	
		mouseenterChange($(".header div a").eq(1),"#fff");
		mouseenterChange($(".header div a span"),"#fff");
		for(var i = 0; i < $(".nav a").length; i++){
			mouseenterChange($(".nav a").eq(i),"#000")
		};
		for(var i = 0; i < $(".serve ul a").length; i++){
			mouseenterChange($(".serve ul a").eq(i),"#666")
		};
		for(var i = 0; i < $(".footer a").length; i++){
			mouseenterChange($(".footer a").eq(i),"#666")
		};
		goodsShift()
	}

	//页面滚动跟随固定定位函数
	function scrollFixed(node,top){
		var t = node.offset().top;
		$(window).scroll(function(){
			if($("html").scrollTop() >= t - top){
				node.css({
					position:"fixed",
					top:top
				});
				node.prev().css("margin-bottom",node.height())
			}else{
				console.log(1)
				node.css({
					position:"relative",
					top:0
				})
				node.prev().css("margin-bottom",0)
			}
		})
	}
	//mouseenter事件改变字体颜色
	function mouseenterChange(node,iColor){
		node.mouseenter(function(){
			node.css("color","#FE6161")
		});
		node.mouseleave(function(){
			node.css("color",iColor)
		})
	}
	//商品店铺切换
	function goodsShift(){
		
		$(".top>div>a").mouseenter(function(){
			var goods = $(".top>div>a>span").html();
		var shop = $(".top>div>a").find("div").find("span").html();
			$(".top>div>a").find("div").show()
			$(".top>div>a").find("div").on({
				mouseenter:function(){
					$(".top>div>a").find("div").find("span").css("color","#FE6161")
				},
				mouseleave:function(){
					$(".top>div>a").find("div").find("span").css("color","#999")
				},
				click:function(){
					[goods,shop] = [shop,goods]
					$(".top>div>a>span").html(goods)
					$(".top>div>a").find("div").find("span").html(shop)
				}
			})
		})
		$(".top>div>a").mouseleave(function(){
			$(".top>div>a").find("div").hide()
		})
	}
	//左侧菜单栏
	function navShow(){
		$(".nav li:first-child").mouseover(function(){
			$(".navSH").show();
			$(this).find("a").css("color","#FE6161")
		})
		$(".nav li:first-child").mouseleave(function(){
			$(".navSH").hide();
			$(this).find("a").css("color","#000")
		})
		$(".navSH").mouseover(function(){
			$(".navS").show();
		})
		$(".navSH").mouseleave(function(){
			$(".navS").hide();
		})
		//事件委托
		$(".navSH").on("mouseover", "li", function(){
			$(".nav li:first-child").find("a").css("color","#FE6161")
			$(".navSH li").css({
				color:"#000",
				background:"#eee"
			});
			$(this).css({
				color:"#FE6161",
				background:"#fff"
			});
			$(".navS div").css("display", 'none').eq($(this).index()).css("display", 'block');
		})
		$(".navSH").mouseleave(function(){
			$(".navSH li").css({
				color:"#000",
				background:"#eee"
			});
		})
	}
	//导航栏下拉
	function navChange(){
		//事件委托
		$(".nav>ul").on({
			mouseenter:function(){
				$(this).find("a").css("color","#FE6161");
				$(".navChange").stop().animate({height: 150}, 180)
				$(".navChange div").css("display", 'none').eq($(this).index() - 2).css("display", 'block');
			},
			mouseleave:function(){
				$(this).find("a").css("color","#000");
				$(".navChange").stop().animate({height: 0}, 180)
				// $(".navChange div").css("display", 'none').eq($(this).index()).css("display", 'block');
			}
		},".navC");
		$(".navChange").on({
			mouseenter:function(){
				$(".navChange").stop().animate({height: 150}, 180)
			},
			mouseleave:function(){
				$(".navChange").stop().animate({height: 0}, 180)
			}
		});
	}

	//左侧菜单栏 导航下拉栏 商品数据加载
	function navData(){
		$.ajax({
			type:"GET",
			url:"data/data.json",
			success:function(arr){
				for(var i = 0; i < $(".navS div").length; i++){
					for(var j = 0; j < arr[0].navSH[i].length; j++){
						$(`<a href=""><dl>
									<dt><img src="${arr[0].navSH[i][j].images}" alt=""></dt>
									<dd>${arr[0].navSH[i][j].title}</dd>
								</dl></a>`).appendTo($(".navS div")[i])
					}
					
				}
				arr[0].navSH.i
			},
			error:function(msg){
				console.log(msg);
			}
		})
	}
	return {
		all:all
	}
})