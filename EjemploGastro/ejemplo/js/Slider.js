
function Slider(parent){
	var self = this;
	this.main = document.getElementById('holder-rueda');

	var yO=0;
	var y1=0;
	
	var gradActual = 0
	
	setTimeout(function(){
		self.main.addEventListener("touchstart", onTouchStart,false);
		self.main.addEventListener("touchmove", onTouchMove,false);

	}, 100)

	function onTouchStart(e){
		yO=e.touches[0].pageY;
	}


	function onTouchMove(e){
		e.preventDefault();

		y1= e.touches[0].pageY;

		var disY = y1-yO;

		gradActual = gradActual + (disY/3.7);
		$(self.main).transition({rotate: -gradActual+'deg'},0, 'easeOutBounce');
		yO = y1;
	}


}
