AOS.init();

$(document).ready(function() {
    var w = $(window).width();
    var baseSpacing =  5;
    var baseSpacing_col = baseSpacing * 3 / 2;  //7.5px
    var baseSpacing_xxs = baseSpacing * 2;  //10px
    var baseSpacing_xs = baseSpacing * 3;  //15px
    var baseSpacing_ms = baseSpacing * 4;  //20px
    var baseSpacing_xms = baseSpacing * 5;  //25px
    var baseSpacing_sm = baseSpacing * 6;  //30px
    var baseSpacing_xsm = baseSpacing * 7;  //35px
    var baseSpacing_md = baseSpacing * 8;  //40px
    var baseSpacing_xmd = baseSpacing * 9;  //45px
    var baseSpacing_lg = baseSpacing * 10; //50px
    var baseSpacing_xlg = baseSpacing * 11; //55px
    var baseSpacing_xl = baseSpacing * 12; //60px

    var headerHeight = $('header').outerHeight();
    var mobileMenuHeaderHeight = $('#mobile-menu-bar__header').outerHeight();
    var cartBarHeaderHeight = $('#cart-bar__header').outerHeight();


    /* Slider */
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        loop: true,
        speed: 1000,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        /*pagination: {
            el: '.swiper-pagination',
            dynamicBullets: true,
            clickable: true
        }*/
    });

    /* Mobile Nav */
    $('#mobile-menu-bar').css('top', headerHeight);
    $('#mobile-menu-bar__content').css({
        'top': mobileMenuHeaderHeight,
        'height': 'calc(100% - ' + (headerHeight + mobileMenuHeaderHeight) + 'px)',
    });

    $('#mobile-menu-bar__toggle').on('click',function(){
        $('#mobile-menu-bar').toggleClass('active');
        $('body').toggleClass('noscroll');
    });
    $('#mobile-menu-bar__header .icon__times').on('click',function(){
        $('#mobile-menu-bar').removeClass('active');
        $('body').removeClass('noscroll');
    });

    /* Cart Bar */
    $('#cart-bar').css('top', headerHeight);

    $('#cart-bar__content').css({
        'top': cartBarHeaderHeight,
        'height': 'calc(100% - ' + (headerHeight + cartBarHeaderHeight) + 'px)',
    });

    $('#cart-bar__toggle').on('click',function(){
        $('#cart-bar').toggleClass('active');
        $('body').toggleClass('noscroll');
    });
    $('#cart-bar__header .icon__times').on('click',function(){
        $('#cart-bar').removeClass('active');
        $('body').removeClass('noscroll');
    });

    /* Filter */
    $('.filter-primary__item__header').each(function () {
        $(this).click(function(){

            if ($(this).hasClass("is--active")) {
                $(this).removeClass("is--active");
                if (w < 568) {
                    $('span:first-child', this).hide();
                }
            } else {
                $(this).addClass("is--active");
                if (w < 568) {
                    $('span:first-child', this).show();
                }
            }
            $(".filter-primary__item__content").fadeToggle();
        });
    });

    /* Cart*/
    $('[data-quantity="plus"]').click(function(e){
        e.preventDefault();
        fieldName = $(this).attr('data-field');
        var currentVal = parseInt($('input[name='+fieldName+']').val());
        var currentMaxVal = parseInt($('input[name='+fieldName+']').attr('max'));
        if (!isNaN(currentVal) && currentVal < currentMaxVal) {
            $('input[name='+fieldName+']').val(currentVal + 1);
        }
    });
    $('[data-quantity="minus"]').click(function(e) {
        e.preventDefault();
        fieldName = $(this).attr('data-field');
        var currentVal = parseInt($('input[name='+fieldName+']').val());
        var currentMinVal = parseInt($('input[name='+fieldName+']').attr('min'));
        if (!isNaN(currentVal) && currentVal > currentMinVal) {
            $('input[name='+fieldName+']').val(currentVal - 1);
        }
    });
});
