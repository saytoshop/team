$(function(f) {
    var element = f('#up');
    f(window).scroll(function() {
        element['fade' + (f(this).scrollTop() > 900 ? 'In' : 'Out')](500);
    });
});

$(document).ready(function() {
    $(".send_btn").click(function(e) {
        e.preventDefault;
        $(".layer").show();
    });
    $(".close_layer").click(function(e) {
        e.preventDefault;
        $(".layer").hide();
    });

    $('.slider').fotorama();

    var menu_selector = ".topmenu_elements"; // Переменная должна содержать название класса или идентификатора, обертки нашего меню.

    function onScroll() {
        var scroll_top = $(document).scrollTop() + 100;
        $(menu_selector + " a").each(function() {
            var hash = $(this).attr("href");
            if (hash.substring(0, 3) == "tel") return;
            var target = $(hash);
            if (target.position().top <= scroll_top && target.position().top + target.outerHeight() > scroll_top) {
                $(menu_selector + " a.active").removeClass("active");
                $(this).addClass("active");
            } else {
                $(this).removeClass("active");
            }
        });

    }


    $(document).on("scroll", onScroll);

    $(menu_selector + " a").click(function(e) {
        e.preventDefault();

        $(document).off("scroll");
        $(menu_selector + " a.active").removeClass("active");

        var hash = $(this).attr("href");
        var target = $(hash);

        $("html, body").animate({
            scrollTop: target.offset().top
        }, 500, function() {
            window.location.hash = hash;
            $(document).on("scroll", onScroll);
        });
        $(this).addClass("active");


    });

    $(".variant_toggler").click(function(e) {
      if($(this).hasClass("active")) return;
        $(".variant").toggleClass('active');
        $(".variant_toggler").toggleClass('active');
    });
});
