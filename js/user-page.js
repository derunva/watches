$(document).ready(function () {

    $('.user-personal-data').show('slow');

    $(".personal-data").css({
        "color": "black"
    });
    $(".personal-orders").css({
        "color": "#a3a6a7"
    });
    $(".personal-feedback").css({
        "color": "#a3a6a7"
    });


    $('.personal-data').click(function () {

        //$('#a').hide();
        $('.user-personal-data').animate({
            height: 'show'

        });
        $(".personal-data").css({
            "color": "black"
        });
        $(".personal-orders").css({
            "color": "#a3a6a7"
        });
        $(".personal-feedback").css({
            "color": "#a3a6a7"
        });


        $(".info-list-menu .personal-data").css({
            "border-bottom": "1px solid #f68b23"
        });
        $(".info-list-menu .personal-order").css({
            "border-bottom": "0px solid #f68b23"
        });
        $(".info-list-menu .personal-feedback").css({
            "border-bottom": "0px solid #f68b23"
        });

        $('.user-personal-orders').hide('slow');
        $('.user-personal-feedback').hide('slow');

    });
    $('.personal-orders').click(function () {

        //$('#a').hide();
        $('.user-personal-orders').animate({
            height: 'show'

        });
        $(".personal-data").css({
            "color": "#a3a6a7"
        });
        $(".personal-orders").css({
            "color": "black"
        });
        $(".personal-feedback").css({
            "color": "#a3a6a7"
        });
        
        $(".info-list-menu .personal-data").css({
            "border-bottom": "0px solid #f68b23"
        });
        $(".info-list-menu .personal-orders").css({
            "border-bottom": "1px solid #f68b23"
        });
        $(".info-list-menu .personal-feedback").css({
            "border-bottom": "0px solid #f68b23"
        });

        $('.user-personal-data').hide('slow');
        $('.user-personal-feedback').hide('slow');
        
    });
    $('.personal-feedback').click(function () {

        //$('#a').hide();
        $('.user-personal-feedback').animate({
            height: 'show'
        });
        $(".personal-data").css({
            "color": "#a3a6a7"
        });
        $(".personal-feedback").css({
            "color": "black"
        });
        $(".personal-orders").css({
            "color": "#a3a6a7"
        });

        $(".info-list-menu .personal-data").css({
            "border-bottom": "0px solid #f68b23"
        });
        $(".info-list-menu .personal-orders").css({
            "border-bottom": "0px solid #f68b23"
        });
        $(".info-list-menu .personal-feedback").css({
            "border-bottom": "1px solid #f68b23"
        });

        $('.user-personal-data').hide('slow');
        $('.user-personal-orders').hide('slow');
        
    });
  
});
