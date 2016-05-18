(function(window)
 {
    function LightBox()
    {
        var self = this;
        var timeInit;
        var timeEnded;
        var elapsedTime, dif;
        var videoActual;	

        self.div = document.createElement('div');
        $(self.div).css({'width' : 1024, 'height' : 768, 'position' : 'absolute', 'top' : 0, 'left' : 0, 'z-index' : 30, display:'none'});

        var video = document.createElement('video');
        video.height = 768;
        video.width = 1024;
        $(self.div).append(video);
        $(video).attr('controls', 'controls');
        $(video).attr('autoplay', 'autoplay');
        $(video).attr('poster', 'imgs/poster.jpg');		
        $(video).bind('play', onPlay);  	

        var btnCerrar = document.createElement('div');
        btnCerrar.id ="btn-cerrar";
        $(self.div).append(btnCerrar);
        $(btnCerrar).click(calculateTime);

        self.mostrar = function(str)
        {
            videoActual = str;
            $(video).empty();
            var source = document.createElement('source');
            source.type = "video/mp4";
            source.src  = 'videos/'+str+'.mp4';
            $(video).append(source);

            setTimeout(function(){
                v =  document.getElementsByTagName('video')[0];				
                $(self.div).stop().transition({opacity : 1}).fadeIn(500);
                v.load();
                v.play();
            }, 100);
        }

        self.ocultar = function()
        {
            $(self.div).fadeOut();
        }

        function onPlay()
        {
            timeInit = new Date().getTime();
            $(video).removeAttr("controls");
        }

        function calculateTime()
        {
            timeEnded = new Date().getTime();
            dif = timeEnded - timeInit; 	 
            var seconds = Math.floor(dif / 1000);

            elapsedTime = seconds + " seconds"	
            data.stats.push({'Seccion' : 'Mujer de 50', 'video' : videoActual, 'tiempo' : elapsedTime});
            $(video).attr('controls', 'controls');

            self.ocultar();
        }

        self.ocultar();
    }

    window.LightBox = LightBox;

})(window);