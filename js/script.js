(function($) {
    "use strict";

    $('.nav li a').click(function(e) {
        
                $('.nav li.active').removeClass('active');
        
                var $parent = $(this).parent();
                $parent.addClass('active');
                e.preventDefault();
            });


    $(function(){
        $('.fadein div:gt(0)').hide();
        setInterval(function(){$('.fadein > :first-child').fadeOut().next('div').fadeIn().end().appendTo('.fadein');}, 7000);
    });



})(jQuery);