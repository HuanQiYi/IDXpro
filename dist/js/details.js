define(["magnifier","jquery"],function(magnifier,$){
	function details(){
		magnifier.magnifier($(".div1"),$(".div3"),$(".div2"))
	}
	return {
		details:details
	}
})

