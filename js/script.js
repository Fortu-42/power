(function($) {
    "use strict";

    $('.nav-item').click(function(e) {
        
                $('.nav-item.active').removeClass('active');
        
                var $parent = $this.item();
                $parent.addClass('active');
                e.preventDefault();
            });


    $(function(){
        $('.fadein div:gt(0)').hide();
        setInterval(function(){$('.fadein > :first-child').fadeOut().next('div').fadeIn().end().appendTo('.fadein');}, 7000);
    });



})(jQuery);