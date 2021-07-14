AOS.init();

$(document).ready(function() {

    var w = $(window).width();
    var headerHeight = $('header').outerHeight();

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

    /* Mobile Nav*/
    $('#mobile-menu-bar').css('top', headerHeight);

    $('#mobile-menu-icon').on('click',function(){
        $('#mobile-menu-bar').toggleClass('active');
        $('body').toggleClass('noscroll');
    });
    $('#mobile-menu-header .icon__times').on('click',function(){
        $('#mobile-menu-bar').removeClass('active');
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
