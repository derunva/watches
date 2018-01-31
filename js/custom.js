function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email.toLowerCase());
}
function nicePrice(str){
    str = str.toString();
    if(str.length > 3){
        return str.substring(0, str.length - 3)+ ' ' +str.slice(-3)
    }else{
        return sum;
    }
}

function cartPrice(){
    $('[data-cart]').each(function(){
        var sum = 0;
        $('[data-price]',this).each(function(){
            sum += $(this).val()*$(this).data('price');
        });
        var text = nicePrice(sum);
        
        $('[data-sum]',this).text(text);
    })
}
function itemPrice(){
    $('[data-price][data-single]').each(function(){
        var sum = $(this).data('price')*$(this).val();
        $('[data-single-price="'+$(this).data('single')+'"]').text(nicePrice(sum));
        $('[data-single-count="'+$(this).data('single')+'"]').text($(this).val());
    })
}
$(window).resize(function(){
    var windowWidth = $(window).outerWidth();
    console.log(windowWidth,'window')
    if(windowWidth > 1023 && windowWidth < 1920){
        var k =  windowWidth/1920;
        var fs = k*16;
        $('html').css('font-size',fs);
        console.log(fs)
    }else{
        $('html').removeAttr('style')
    }
})
$(window).load(function () {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
        $('body').addClass('ios');
    } else {
        $('body').addClass('web');
    }

    $('body').removeClass('loaded');
});
function modalOpen(item){
    $('.d-modal').removeClass('is-active');
    item.addClass('is-active');
    $('[data-open]').removeClass('is-active');
    $('.header-dropdown').removeClass('is-active');
    $('[data-show]').addClass('is-hidden');
    $('.mobile-menu').removeClass('opened');
    $('.overlay').fadeIn();
    $('body').addClass('noscroll');
}
function modalClose(){
    $('.d-modal').removeClass('is-active');
    $('.overlay').fadeOut();
    $('body').removeClass('noscroll');
}
/* viewport width */
function viewport() {
    var e = window,
        a = 'inner';
    if (!( 'innerWidth' in window )) {
        a = 'client';
        e = document.documentElement || document.body;
    }
    return {width: e[a + 'Width'], height: e[a + 'Height']}
}
/* viewport width */

$(function () {
    /* placeholder*/
    /*$('input, textarea').each(function () {
     var placeholder = $(this).attr('placeholder');
     $(this).focus(function () {
     $(this).attr('placeholder', '');
     });
     $(this).focusout(function () {
     $(this).attr('placeholder', placeholder);
     });
     });*/
    /* placeholder*/

    $('.button-nav').click(function () {
        $(this).toggleClass('active'),
            $('.main-nav-list').slideToggle();
        return false;
    });

    /* components */

    /*
     if ($('.fancybox').length) {
     $('.fancybox').fancybox({
     margon: 10,
     padding: 10
     });
     };

     if ($('.scroll').length) {
     $(".scroll").mCustomScrollbar({
     axis: "x",
     theme: "dark-thin",
     autoExpandScrollbar: true,
     advanced: {autoExpandHorizontalScroll: true}
     });
     };
     */

    /* components */

    if ($('.main-slider').length) {
        // $('.main-slider').slick({
        //     arrow: true,
        //     dots: false,
        //     infinite: true,
        //     speed: 300,
        //     slidesToShow: 1,
        //     slidesToScroll: 1,
        //     fade: true,
        //     speed: 1000,
        //     responsive: [
        //         {
        //             breakpoint: 1024,
        //             settings: {
        //                 slidesToShow: 3,
        //                 slidesToScroll: 3,
        //                 infinite: true,
        //                 dots: true
        //             }
        //         },
        //         {
        //             breakpoint: 600,
        //             settings: "unslick"
        //         }
        //     ]
        // });
        $('.main-slider__slider').owlCarousel({
            loop:true,
            margin:0,
            nav:true,
            items: 1
        });
    }

    if ($('.categories-tab').length) {
        $('.categories-tab').tabs();
    }

    if ($('.promotion-slider').length) {
        $('.promotion-slider').slick({
            autoplay: true,
            dots: true,
            arrows: false,
            slidesToShow: 2,
            responsive: [{
                breakpoint: 980,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }]
                    
        });
    }
});



/*  main menu */
function menu_opened() {
    var menu_item = $('.categories-nav__item');
    var submenu_wrap = $('.categories-nav__submenu-wrap');

    submenu_wrap.parent().find('.categories-nav__link').prepend('<i class="fa fa-chevron-down hidden-max1200" aria-hidden="true"></i>');

    menu_item.hover(function () {
        $(this).find('.categories-nav__submenu-wrap').addClass('submenu-opened');
        $(this).find('.fa-chevron-down').addClass('menu-opened');
    }, function () {
        $(this).find('.categories-nav__submenu-wrap').removeClass('submenu-opened');
        $(this).find('.fa-chevron-down').removeClass('menu-opened');
    });
}

function menu_opened_mobile() {
    var menu_item = $('.categories-nav__item');
    var submenu_wrap = $('.categories-nav__submenu-wrap');

    submenu_wrap.parent().find('.categories-nav__link').prepend('<i class="fa fa-chevron-down hidden-1200" aria-hidden="true"></i>');

    menu_item.on('click', function (e) {
        e.preventDefault();
        $(this).find('.categories-nav__submenu-wrap').toggleClass('submenu-opened');
        $(this).find('.fa-chevron-down').toggleClass('menu-opened');
    });
}

if ($(window).width() >= 1024) {
    menu_opened();
} else {
    menu_opened_mobile();
}

$(document).resize(function () {
    if ($(window).width() >= 1024) {
        menu_opened();
    } else {
        menu_opened_mobile();
    }
});

$(document).scroll(function () {
    var header = $('.header'),
        menu_top = $('.header-top'),
        menu_bottom = $('.header-bottom');
        // console.log($(document).scrollTop(), header.height(), menu_bottom.height());
        console.log(menu_top.outerHeight())
    if ($(document).scrollTop()-menu_top.outerHeight() >= 0) {
        menu_bottom.addClass('menu-fixed');
        // menu_top.css('padding-bottom', menu_bottom.height());
        // console.log($(window).width());
        // if($(window).width() < 992){
        //     $('.content').css('padding-top', 90);
        //
        // }

    } else {
        menu_bottom.removeClass('menu-fixed');
        // menu_top.css('padding-bottom', 18);
        // if($(window).width > 992){
        //     $('.content').css('padding-top', 0);
        // }
    }
});

/* to-top */
$(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 250) {
            $('#to-top').addClass('visible');
        } else {
            $('#to-top').removeClass('visible');
        }
    });

    $('#to-top').on('click', function (e) {
        e.preventDefault();
        $('body,html').animate({
            scrollTop: 0
        }, 800);
    });
});

/* styled form */
if ($('.styled').length) {
    $('.styled').styler();
}

/* search */
$('.header-button.button-search .fa-2').on('click', function (e) {
    e.preventDefault();
    $('.header-search').toggleClass('search-visible');
    $(this).addClass('fa-notactive');
    $('.header-button-wrap').addClass('search-opened');
});

// $('#header_search').on('blur', function () {
//     $('.header-search').removeClass('search-visible');
//     $('.header-button.button-search .fa-2').removeClass('fa-notactive');
// });
$(document).mouseup(function(e){
    var container = $("#header_search");
    if (!container.is(e.target) && container.has(e.target).length === 0) 
    {
        $('.header-search').removeClass('search-visible');
        $('.header-button.button-search .fa-2').removeClass('fa-notactive');
        $('.header-button-wrap').removeClass('search-opened');
    }
});
$(document).mouseup(function(e){
    var container = $(".d-modal");
    if (!container.is(e.target) && container.has(e.target).length === 0) 
    {
        modalClose();
    }
})
$('.header-button.button-search .fa-2').mouseenter(function () {
    $(this).addClass('fa-hover');
});
$('.header-button.button-search .fa-2').mouseleave(function () {
    $(this).removeClass('fa-hover');
});
/* switch display product list */
var switch_item = $('.catalog-block__item-switch');

switch_item.on('click', function () {
    switch_item.removeClass('active');
    $(this).addClass('active');
});

/* price slider */
var pricesSlider = $("#prices-slider"),
    minCost = $("#min-cost"),
    maxCost = $("#max-cost");

pricesSlider.slider({
    min: 0,
    max: 99999,
    values: [967, 27164],
    range: true,
    stop: function (event, ui) {
        minCost.val(pricesSlider.slider("values", 0));
        maxCost.val(pricesSlider.slider("values", 1));
    },
    slide: function (event, ui) {
        minCost.val(pricesSlider.slider("values", 0));
        maxCost.val(pricesSlider.slider("values", 1));
    }
});

minCost.change(function () {
    var value1 = minCost.val();
    var value2 = maxCost.val();

    if (parseInt(value1) > parseInt(value2)) {
        value1 = value2;
        minCost.val(value1);
    }
    pricesSlider.slider("values", 0, value1);
});

maxCost.change(function () {
    var value1 = minCost.val();
    var value2 = maxCost.val();

    if (value2 > 1000) {
        value2 = 1000;
        maxCost.val(1000)
    }

    if (parseInt(value1) > parseInt(value2)) {
        value2 = value1;
        maxCost.val(value2);
    }
    pricesSlider.slider("values", 1, value2);
});

/* filter section switch */
$('.filter-block__title').on('click', function () {
    $(this).children().toggleClass('arrow-rotate');
    $(this).next().slideToggle(250);
});
$('.filter-block__feed').on('click', function () {
    $(this).children().toggleClass('arrow-rotate');
    $(this).next().slideToggle(250);
});

/* product line rating */
if ($('.product-block__rating').length > 0) {
    $('.product-block__rating').raty({
        half: true,
        score: 4.5
    });
}

var handler = function () {

    var height_footer = $('footer').height();
    var height_header = $('header').height();
    //$('.content').css({'padding-bottom':height_footer+40, 'padding-top':height_header+40});


    var viewport_wid = viewport().width;
    var viewport_height = viewport().height;

    if (viewport_wid <= 991) {

    }
}

$(window).bind('load', handler);
$(window).bind('resize', handler);



$(document).ready(function () {
    $('[data-remove]').click(function(){
        $(this).parents('[data-remove-target]').remove();
    })
    setInterval(function(){
        cartPrice();
        itemPrice();
    },100)
    $('.mobile-burger').click(function () {
        $(this).toggleClass('open');
        ;
        $('.mobile-menu').toggleClass('opened');
        if($('.mobile-menu').is('.opened')){
           $('.overlay').fadeIn();
            $('body').addClass('noscroll')
        }else{      
            $('.overlay').fadeOut(); 
            $('body').removeClass('noscroll');
            $('.header-dropdown').removeClass('is-active');
            $('.mobile-menu .has-active').removeClass('is-active');
            $('.header-dropdown .has-hidden').addClass('is-hidden');
        }
    });

    $('.overlay').click(function () {
        $(this).fadeOut();
        $('.mobile-menu').removeClass('opened');
        $('body').removeClass('noscroll');
        $('.mobile-burger').removeClass('open');
        modalClose();
    });
    // mobile menu

    $('.navigtaion-list__item a').click(function (e) {
        if($(this).parents('.navigtaion-list__item').hasClass('submenu-link')){
            e.preventDefault();
            var target = $(this).parents('.navigtaion-list__item').data('target');
            $('.mobile-menu__second[data-target=' + target +']').toggleClass('opened');
            $('.navigtaion-list__item[data-target=' + target +']').toggleClass('active');
        }
    });

    // navigation btn click
    $('.navigation-btn').click(function () {
        var slider = $(this).data('slider-navigation');
        var direction = $(this).data('owl-navigaion');
        $('.' + slider + ' .owl-' + direction + '').trigger('click');
    });

    //show more
    $('.show-all').click(function () {
        $(this).prev().toggleClass('fullHeight');
    });
    var get_tab = 1;
    $('.mobile-tabs-pagination .pagination-right').click(function () {
        // var get_tab = parseInt($(this).data('tab'));
        var tab_length = $(this).parents('.categories-tab').children('.categories-tab__tabs-block').children('.categories-tab__item').length;
        $(this).parents('.categories-tab').children('.categories-tab__tabs-block').children('.categories-tab__item[data-tab=' + get_tab + ']').removeClass('visible-tab');
        if(get_tab < tab_length){
            get_tab++;
            $(this).parents('.categories-tab').children('.categories-tab__tabs-block').children('.categories-tab__item[data-tab=' + get_tab + ']').addClass('visible-tab');
            $('.visible-tab a').trigger('click');
        }
        else{
            get_tab = 1;
            $(this).parents('.categories-tab').children('.categories-tab__tabs-block').children('.categories-tab__item[data-tab=' + get_tab + ']').addClass('visible-tab');
            $('.visible-tab a').trigger('click');
        }
    });
    $('.mobile-tabs-pagination .pagination-left').click(function () {
        var tab_length = $(this).parents('.categories-tab').children('.categories-tab__tabs-block').children('.categories-tab__item').length;
        $(this).parents('.categories-tab').children('.categories-tab__tabs-block').children('.categories-tab__item[data-tab=' + get_tab + ']').removeClass('visible-tab');
        if (get_tab > 1){
            get_tab--;
            $(this).parents('.categories-tab').children('.categories-tab__tabs-block').children('.categories-tab__item[data-tab=' + get_tab + ']').addClass('visible-tab');
            $('.visible-tab a').trigger('click');
        }
        else{
            get_tab = tab_length;
            $(this).parents('.categories-tab').children('.categories-tab__tabs-block').children('.categories-tab__item[data-tab=' + get_tab + ']').addClass('visible-tab');
            $('.visible-tab a').trigger('click');
        }
    });
    setTimeout(function(){
        $(document).scroll();
    },100)
    $('.subscribe-form').submit(function(e){
        e.preventDefault();
        var email = $('#subscribe-field_footer').val();
        console.log('subscribe',validateEmail(email))
        if(!validateEmail(email)){
            console.log('subscribe error')
            $('#subscribe-field_footer').addClass('is-error');
        }else{
            alert('ok')
        }
    })
    $('#subscribe-field_footer').keyup(function(){
        var email = $('#subscribe-field_footer').val();
        if(validateEmail(email)){
            $('#subscribe-field_footer').removeClass('is-error')
        }
    });
    $('[data-toggle-trigger]').click(function(e){
        e.preventDefault();
        var $this = $(this);
        $this.toggleClass('is-active');
        $('[data-toggle="'+$this.data('toggle-trigger')+'"]').toggleClass('is-hidden');
    });
    $('.d-form__input_pass input').keyup(function(){
        var pass = $(this).val();
        $('.d-form__input_pass input[data-compare="'+$(this).data('compare')+'"]').val(pass);
    });
    $('[data-validate="phone"]').mask("(999) 99-99-999");
    $('[data-validate="phone"]').blur(function(){
        console.log($(this).val().length)
    })
    $('[data-validate="email"]').keyup(function(){
        var email = $(this).val();
        var $errBox = $('[data-err="'+$(this).data('input')+'"] > span');
        if(!validateEmail(email)){
            $errBox.removeClass('is-hidden');
            $errBox.parent().addClass('is-err');
            $errBox.parent().removeClass('is-success');
        }else{
            $errBox.addClass('is-hidden');
            $errBox.parent().removeClass('is-err');
            $errBox.parent().addClass('is-success');
        }
    });
    $('[data-validate="email"]').blur(function(){
        if($(this).val().length < 1){
            var $errBox = $('[data-err="'+$(this).data('input')+'"] > span');
            $errBox.addClass('is-hidden');
            $errBox.parent().removeClass('is-err');
        }
        
    });
    $('[data-validate="length"]').keyup(function(){
        var $errBox = $('[data-err="'+$(this).data('input')+'"] > span');
        if($(this).val().length < 3){
            $errBox.removeClass('is-hidden');
            $errBox.parent().addClass('is-err');
            $errBox.parent().removeClass('is-success');
        }else{
            $errBox.addClass('is-hidden');
            $errBox.parent().removeClass('is-err');
            $errBox.parent().addClass('is-success');
        }
    })
    var slider =  $("#lovelist").lightSlider({
        item: 1,
        pager: false
    });
    $('[data-open]').click(function(e){
        e.preventDefault();
        
        var $this = $(this);
        var target = $('[data-show="'+$(this).data('open')+'"]');
        if($this.is('[data-group]') && !$this.is('.is-active')){
            console.log(123)
            $('[data-group="'+$this.data('group')+'"].has-active').removeClass('is-active');
            $('[data-group="'+$this.data('group')+'"].has-hidden').addClass('is-hidden');
        }
        
        if(target.hasClass('is-hidden')){
            target.removeClass('is-hidden');
            $this.addClass('is-active');
            
            if($this.is('[data-slide-trigger]')){
                slider.refresh();
                setTimeout(function(){
                    $('[data-slide="'+$this.data('slide-trigger')+'"]').addClass('is-active');
                },500)
                
            }
        }else{
            setTimeout(function(){
                target.addClass('is-hidden');
                $this.removeClass('is-active');   
            },500)
            
            if($this.is('[data-slide-trigger]')){
                $('[data-slide="'+$this.data('slide-trigger')+'"]').removeClass('is-active');
                
            }
        }
    });
    $('.header-dropdown *').click(function(e){
        e.stopPropagation();
    })
    $('.header-dropdown').click(function(){
        var target = $('[data-show],[data-open]',$('.header-dropdown'));
        console.log(target)
        setTimeout(function(){
            target.addClass('is-hidden');
            $('.login-buttons a').removeClass('is-active');   
        },500)
        $('.header-dropdown,.header-top__right,[data-open]').removeClass('is-active');
    })
    $('[data-modal]').click(function(e){
        e.preventDefault();
        modalOpen($('.d-modal'));
    });
    $('.modal-close').click(function(e){
        e.preventDefault();
        modalClose();
    })
    $('[data-same-input]').keyup(function(){
        var $errBox = $('[data-err="'+$(this).data('input')+'"] > span');
        if($(this).val() != $('[data-same="'+$(this).data('same-input')+'"]').val()){
            $errBox.removeClass('is-hidden');
            $errBox.parent().addClass('is-err');
            $errBox.parent().removeClass('is-success');
        }else{
            $errBox.addClass('is-hidden');
            $errBox.parent().removeClass('is-err');
            $errBox.parent().addClass('is-success');
        }
    });

    $('[data-close-slide]').click(function(e){
        e.preventDefault();
        $('[data-slide="'+$(this).data('close-slide')+'"]').removeClass('is-active');
        $('[data-slide="'+$(this).data('close-slide')+'"] .has-hidden').addClass('is-hidden');
    })
    $('[data-same]').keyup(function(){
        var $errBox = $('[data-err="'+$(this).data('input')+'"] > span');
        console.log($(this).val(),$('[data-same-input="'+$(this).data('same')+'"]').val())
        if($(this).val() != $('[data-same-input="'+$(this).data('same')+'"]').val()){
            $errBox.removeClass('is-hidden');
            $errBox.parent().addClass('is-err');
            $errBox.parent().removeClass('is-success');
        }else{
            $errBox.addClass('is-hidden');
            $errBox.parent().removeClass('is-err');
            $errBox.parent().addClass('is-success');
        }
    });
    $('[data-counter]').click(function(){
        var $input = $(this).parent().find('input');
        if($(this).data('counter') == "plus"){
            $input.val($input.val()*1+1*1)
        }else{
            if($input.val()>1){
                $input.val($input.val()-1)
            }
        }
    });
    $('.product-block__remove').click(function(){
        $(this).parent().remove();
    })
    $('.d-alert').click(function(){
        $(this).removeClass('is-active');
    });
    $('.d-alert__inner').click(function(e){
        e.stopPropagation()
    })
    $('[data-alert]').click(function(e){
        e.preventDefault();
        var data = $(this).data('alert');
        console.log(data)
        if(typeof data == 'string'){
            data = data.replace(/(\r\n|\n|\r)/gm,"");
            data = JSON.parse(data);
        }
        $('[data-icon]').addClass('is-hidden');
        $('[data-icon="'+data.icon+'"]').removeClass('is-hidden');
        $('.d-alert__text').text(data.text);
        $('.d-alert').addClass('is-active');
        setTimeout(function(){
            $('.d-alert').removeClass('is-active');
        },2000)
    })
    $('.auto-select').selectize({});
    
});
$(window).load(function(){
    $(window).resize();
})