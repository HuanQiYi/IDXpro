console.log(11)
require.config({
	paths:{
		jquery:"jquery-1.10.1.min",
		all:"all",
		index:"index"
	}
})

require(["all","index"],function(all,index){
	all.all();
	index.index();
})