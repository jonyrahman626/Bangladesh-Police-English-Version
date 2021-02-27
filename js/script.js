$(function () {

    // Sticky Menu
//
//    $jony = $("#menu_part").offset().top;
//    $(window).scroll(function () {
//        $scrolling = $(this).scrollTop();
//        if ($scrolling > $jony) {
//            $("#menu_part").addClass("menu_fix");
//        } else {
//            $("#menu_part").removeClass("menu_fix");
//        }
//    });

    //animation scroll js
    $('a[href*="#"]')
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function (event) {
            if (
                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
                location.hostname == this.hostname
            ) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1500, function () {
                        var $target = $(target);
                        $target.focus();
                        if ($target.is(":focus")) {
                            return false;
                        } else {
                            $target.attr('tabindex', '-1');
                            $target.focus();
                        };
                    });
                }
            }
        });



    // Banner Silder start
    $('#banner_part').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        dots: false,
        arrows: false,
    });

    // Venu box start
    $('.venobox').venobox();



    // Accordion Part
    $('.card-header').click(function () {
        $(this).toggleClass('rotates');
    });

    // Counter up start
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });

    // Client part start

    // Top to bottom start
    $(window).on('scroll', function () {
        var baktop = $(window).scrollTop();
        if (baktop > 200) {
            $(".top_to_bottom").fadeIn(1000);
        } else {
            $(".top_to_bottom").fadeOut(500);
        }
    });

    $(".top_to_bottom").on('click', function () {
        $('html, body').animate({
            scrollTop: 0,
        }, 1500);
    });

});