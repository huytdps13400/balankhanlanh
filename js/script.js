$(function() {
    $(window).on("scroll", function() {
        if ($(window).scrollTop() > 50) {
            $(".head").addClass("active");
        } else {

            $(".head").removeClass("active");
        }
    });
});