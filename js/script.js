(function($) {
    "use strict";

    window.sr = ScrollReveal({ reset: true });
    

    $('body').scrollspy({
        target: '#my-navbar',
        offset:300
    });

    $('.nav-item').click(function() {
                $('.nav-item.active').removeClass('active');
                $(this).addClass('active');
            });


    $(function(){
        $('.fadein div:gt(0)').hide();
        setInterval(function(){$('.fadein > :first-child').fadeOut().next('div').fadeIn().end().appendTo('.fadein');}, 7000);
    });

    sr.reveal('#about', { 
        origin: 'bottom', 
        duration: 2500 
      });

      sr.reveal('.card', { 
        origin: 'bottom', 
        duration: 2500 
      });


      

    



})(jQuery);