define(function(){
	function magnifier(smallBox,floatLayer,bigBox){

		smallBox.mouseenter(function(){
			bigBox.show();
			floatLayer.show();
		})
		smallBox.mouseleave(function(){
			bigBox.hide();
			floatLayer.hide();
		})

		smallBox.mousemove(function(ev){
			var l = ev.clientX - floatLayer.width() / 2 - smallBox.offset().left;
			var t = ev.clientY - floatLayer.height() / 2 - smallBox.offset().top;
			if(l < 0){
				l = 0
			}
			if(l > smallBox.width() - floatLayer.width()){
				l = smallBox.width() - floatLayer.width()
			}
			if(t < 0){
				t = 0;
			}
			if(t > smallBox.height() - floatLayer.height()){
				t = smallBox.height() - floatLayer.height()
			}
			floatLayer.css("left",l+'px');
			floatLayer.css("top",t+'px');

			bigBox.find('img').css("left",- l / smallBox.width() * bigBox.find('img').width() )
			bigBox.find('img').css("top",- t / smallBox.height() * bigBox.find('img').height())
		})
	}
	return {
		magnifier:magnifier
	}
})