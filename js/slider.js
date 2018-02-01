$(document).on('ready', function () {
    $('.slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        responsive: [{
                breakpoint: 1700, 
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,


                }
                    },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
                    },
            {
                breakpoint: 720,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
                    }
                    // You can unslick at a given breakpoint now by adding:
                    // settings: "unslick"
                    // instead of a settings object
                ]
    });
});
$(document).on('ready', function () {
    $('.slider-mobile-menu').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
    });
});
$(document).on('ready', function () {
    $('.slider-mobile-view').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
    });
});
