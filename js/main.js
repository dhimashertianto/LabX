(function ($) {
    "use strict";
    $(document).ready(function () {

        $(window).scroll(function () {
            if ($(this).scrollTop() > 40) {
                $(".wrap-logo-main-menu-top").addClass("wrap-logo-main-menu-top-scroll");
            } else {
                $(".wrap-logo-main-menu-top").removeClass("wrap-logo-main-menu-top-scroll");
            }
        });

        // smooth scroll
        var scroll = new SmoothScroll('a[href*="#"]', {
            speed: 500, // Integer. How fast to complete the scroll in milliseconds
            offset: 120, // Integer or Function returning an integer. How far to offset the scrolling anchor location in pixels
            easing: 'easeInOutCubic', // Easing pattern to use
        });

        //jump anchor on page
        var jump = function (e) {
            if (e) {
                e.preventDefault();
                var target = $(this).attr("href");
            } else {
                var target = location.hash;
            }

            $('html,body').animate(
                {
                    scrollTop: $(target).offset().top - 110
                }, 500, function () {
                    location.hash = target;
                });

        }

        $('a[href^="#"]').bind("click", jump);

        if (location.hash) {
            setTimeout(function () {
                $('html, body').scrollTop(0).show();
                jump();
            }, 0);
        } else {
            $('html, body').show();
        }

        // main slider
        $('.header-slider').owlCarousel({
            loop: true,
            autoplayTimeout: 9000,
            autoplay: true,
            touchDrag: true,
            mouseDrag: false,
            margin: 10,
            // animateIn: 'fadeIn',
            // animateOut: 'fadeOut',
            autoplayHoverPause: false,
            autoHeight: true,
            nav: false,
            dots: false,
            smartSpeed: 1000,
            center: true,
            items: 1
        });

        $(".i-nav-header-slider-prev").on("click", function () {
            $(".header-slider").trigger('prev.owl.carousel');
        });

        $(".i-nav-header-slider-next").on("click", function () {
            $(".header-slider").trigger('next.owl.carousel');
        });

        // slider 2
        $('.section-slider-2').owlCarousel({
            loop: false,
            autoplayTimeout: 9000,
            autoplay: true,
            touchDrag: true,
            mouseDrag: false,
            margin: 0,
            animateIn: 'fadeIn',
            animateOut: 'fadeOut',
            autoplayHoverPause: false,
            autoHeight: true,
            nav: false,
            dots: true,
            smartSpeed: 1000,
            center: true,
            items: 1
        });

        // gallery slider
        $('.slider-gallery-img').owlCarousel({
            loop: false,
            autoplayTimeout: 9000,
            autoplay: true,
            touchDrag: true,
            mouseDrag: false,
            margin: 10,
            // animateIn: 'fadeIn',
            // animateOut: 'fadeOut',
            autoplayHoverPause: false,
            autoHeight: true,
            nav: false,
            dots: false,
            smartSpeed: 1000,
            // center: true,
            items: 1
        });

        $(".i-nav-gallery-slider-prev").on("click", function () {
            $(".slider-gallery-img").trigger('prev.owl.carousel');
        });

        $(".i-nav-gallery-slider-next").on("click", function () {
            $(".slider-gallery-img").trigger('next.owl.carousel');
        });

        // menu active when scroll the section
        $(window).scroll(function () {
            $('.target-scroll').each(function () {
                if ($(window).scrollTop() + 160 >= $(this).offset().top) {
                    var id = $(this).attr('id');
                    var linkm = $('#' + id)
                    $('ul.main-menu-top li a').parent().removeClass('active');
                    $('ul.main-menu-top li a[href^="#' + id + '"]').parent().addClass('active');
                    $('ul.menu-nav-mobile li a').parent().removeClass('active');
                    $('ul.menu-nav-mobile li a[href^="#' + id + '"]').parent().addClass('active');
                }
            });
        });

        // Wow Js Animate
        new WOW().init();

        //contact togle
        $('.bt-show-contact-dropdown').on("click", function () {
            $(".contact-dropdown").toggleClass("contact-dropdown-active");
        });

        //menu mobile show
        $('.bt-burger-show-menu').on("click", function () {
            $('.wrap-menu-mobile-full').addClass('wrap-menu-mobile-full-active');
            $('body').addClass('body-mn-active');
        });

        //menu mobile hide
        $('.bt-close-menu-mobile').on("click", function () {
            $('.wrap-menu-mobile-full').removeClass('wrap-menu-mobile-full-active');
            $('body').removeClass('body-mn-active');
        });


    });
})(jQuery);
