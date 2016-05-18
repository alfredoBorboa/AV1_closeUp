var slide;

(function(window)
 {
    function Slide()
    {		
        var self = this;
        var site = $('#site');
        var logoRevitaliza = $('#logo-revitaliza-big');
        var logoRimsa = $('#logo-rimsa-big');
        var texto = $('#texto');
        var texto2 = $('#texto-2');
        var man =  $('#man');
        var ruedaNumero = $('#rueda-numero');
        var header = $('#header');
        var controles = $('#controles-div');
        var timeInit, timeEnd, showingMenu;
        var rueda = document.createElement('div');
        rueda.id = 'rueda';
        site.append(rueda);
        $(rueda).css({opacity : 0})
        $(rueda).click(mostrarGrande);

        var slider = new Slider(self);	
        var ligthBox = new LightBox(); 	
        $('body').append(ligthBox.div);	

        self.init = function()
        {
            logoRevitaliza.delay(300).css({top : -300}).
            transition({top : 42, perspective: '100px', rotateY: '360deg',  duration : 600, opacity : 1});

            man.delay(500).css({opacity : 0, x : -1000, 'width' : 530}).
            transition({duration : 800 , opacity : 1, x : -150});	

            texto.delay(800).css({opacity : 0, scale : 0.5}).transition({opacity : 1, duration : 600, scale : 1});
            $(rueda).delay(1000).css({opacity : 0, scale : 0.5, left : 1500}).
            transition({opacity : 1, scale : 1, left: 767, duration : 600});
        }


        function mostrarGrande()
        {

            site.css({'background-position' : 'right center'});
            site.css({'background-size': '2048px 768px'});
            logoRimsa.css({opacity : 0});
            logoRevitaliza.transition({top : -300, perspective: '100px', rotateY: '360deg',  duration : 600, opacity : 0});

            texto.transition({opacity : 0, duration : 600, scale : 0});
            $(rueda).transition
            ({
                left: 1100,
                duration:800
            });

            man.transition({duration : 600 , x : 115}).transition({'width' : 470});
            $("#holder-rueda").delay(0).transition({left : 561 , duration: 600, delay : 500});	
            ruedaNumero.transition({opacity : 1,  duration: 600, delay : 500, left : 874});
            header.transition({opacity : 1, 'margin-top' : 0, duration : 500});
            texto2.css({scale : 0.5}).delay(600).transition({opacity : 1, scale : 1});
            controles.transition({left : 30, duration : 500});
            $('.btn-menu').bind('click', showMenu);	
            $('.btn-video').bind('click', showVideo);	
            $('.btn-back').bind('click',  closeMenu);	
        }

        function showVideo()
        {
            ligthBox.mostrar($(this).attr('data-video'));	
        }

        function showMenu(){
            var seccion = $(this).attr('data-action');	
            $("#holder-"+seccion).fadeIn();
            showingMenu = $(this).attr('data-action');
            timeInit = new Date().getTime();
        }

        function closeMenu(){
            $(this).parent().fadeOut();
            timeEnd = new Date().getTime();
            var dif = timeEnd - timeInit; 	 
            var seconds = Math.floor(dif / 1000);

            elapsedTime = seconds + " seconds"	
            data.stats.push({'Seccion' : 'Mujer de 50', 'subMenu' : showingMenu, 'tiempo' : elapsedTime});
            showingMenu="";
        }
    } 

    window.Slide = Slide;

})(window);

$(document).ready(function()
                  {
    slide = new Slide();
});

$(window).load(function()
               {
    slide.init();
});

