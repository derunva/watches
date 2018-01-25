$(document).ready(function () {

    $('.item-info-descr').show('slow');

    $(".description").css({
        "color": "black"
    });
    $(".spec").css({
        "color": "#a3a6a7"
    });
    $(".feedback").css({
        "color": "#a3a6a7"
    });
    $(".choose").css({
        "color": "#a3a6a7"
    });

    $('.description').click(function () {

        //$('#a').hide();
        $('.item-info-descr').animate({
            height: 'show'

        });
        $(".description").css({
            "color": "black"
        });
        $(".spec").css({
            "color": "#a3a6a7"
        });
        $(".feedback").css({
            "color": "#a3a6a7"
        });
        $(".choose").css({
            "color": "#a3a6a7"
        });

        $(".info-list-menu .description").css({
            "border-bottom": "1px solid #f68b23"
        });
        $(".info-list-menu .spec").css({
            "border-bottom": "0px solid #f68b23"
        });
        $(".info-list-menu .feedback").css({
            "border-bottom": "0px solid #f68b23"
        });
        $(".info-list-menu .choose").css({
            "border-bottom": "0px solid #f68b23"
        });
        $('.title').hide('show');
        $('.slider').show('slow');
        $('.item-info-spec').hide('slow');
        $('.item-info-feedback').hide('slow');
        $('.item-info-choose').hide('slow');

    });
    $('.spec').click(function () {

        //$('#a').hide();
        $('.item-info-spec').animate({
            height: 'show'

        });
        $(".description").css({
            "color": "#a3a6a7"
        });
        $(".spec").css({
            "color": "black"
        });
        $(".feedback").css({
            "color": "#a3a6a7"
        });
        $(".choose").css({
            "color": "#a3a6a7"
        });
        $(".info-list-menu .description").css({
            "border-bottom": "0px solid #f68b23"
        });
        $(".info-list-menu .spec").css({
            "border-bottom": "1px solid #f68b23"
        });
        $(".info-list-menu .feedback").css({
            "border-bottom": "0px solid #f68b23"
        });
        $(".info-list-menu .choose").css({
            "border-bottom": "0px solid #f68b23"
        });
        $('.title').show('slow');
        $('.slider').show('slow');
        $('.item-info-descr').hide('slow');
        $('.item-info-feedback').hide('slow');
        $('.item-info-choose').hide('slow');
        
    });
    $('.feedback').click(function () {

        //$('#a').hide();
        $('.item-info-feedback').animate({
            height: 'show'
        });
        $(".description").css({
            "color": "#a3a6a7"
        });
        $(".feedback").css({
            "color": "black"
        });
        $(".spec").css({
            "color": "#a3a6a7"
        });
        $(".choose").css({
            "color": "#a3a6a7"
        });
        $(".info-list-menu .description").css({
            "border-bottom": "0px solid #f68b23"
        });
        $(".info-list-menu .spec").css({
            "border-bottom": "0px solid #f68b23"
        });
        $(".info-list-menu .feedback").css({
            "border-bottom": "1px solid #f68b23"
        });
        $(".info-list-menu .choose").css({
            "border-bottom": "0px solid #f68b23"
        });
        $('.title').hide('slow');
        $('.slider').hide('slow');
        $('.item-info-descr').hide('slow');
        $('.item-info-spec').hide('slow');
        $('.item-info-choose').hide('slow');
        
    });
    $('.choose').click(function () {

        //$('#a').hide();
        $('.item-info-choose').animate({
            height: 'show'

        });
        $(".description a").css({
            "color": "#a3a6a7"
        });
        $(".choose").css({
            "color": "black"
        });
        $(".spec").css({
            "color": "#a3a6a7"
        });
        $(".feedback").css({
            "color": "#a3a6a7"
        });
        $(".info-list-menu .description").css({
            "border-bottom": "0px solid #f68b23"
        });
        $(".info-list-menu .spec").css({
            "border-bottom": "0px solid #f68b23"
        });
        $(".info-list-menu .feedback").css({
            "border-bottom": "0px solid #f68b23"
        });
        $(".info-list-menu .choose").css({
            "border-bottom": "1px solid #f68b23"
        });
        $('.title').hide('slow');
        $('.slider').hide('slow');
        $('.item-info-descr').hide('slow');
        $('.item-info-spec').hide('slow');
        $('.item-info-feedback').hide('slow');
        
    });
});
