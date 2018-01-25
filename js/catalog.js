
$(document).ready(function () {
    $('.list-item_line').hide('slow');
    
    $('.catalog-block__item-switch').click(function () {

        //$('#a').hide();
        $('.list-item_line').animate({
            height: 'show'

        });
        $('.list-item_tile').hide('slow');

    });
    $('.catalog-block__item-switch.active').click(function () {

        //$('#a').hide();
        $('.list-item_tile').animate({
            height: 'show'

        });
        $('.list-item_line').hide('slow');

    });

});
