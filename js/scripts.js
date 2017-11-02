$('a').click(function(evt) {
   event.stopPropagation();
});

$('a[href="#"]').click(function(evt) {
   event.preventDefault();
});;

$("#home").click(function() {
    $('html, body').animate({
        scrollTop: $(".banner").offset().top
    }, 2000);
});

$("#menu").click(function() {
    $('html, body').animate({
        scrollTop: $(".main").offset().top
    }, 2000);
});

$("#gallery").click(function() {
    $('html, body').animate({
        scrollTop: $(".photos").offset().top
    }, 2000);
});

$("#info").click(function() {
    $('html, body').animate({
        scrollTop: $(".contact").offset().top
    }, 2000);
});

$(".menuButton").click(function() {
    $("#mobileNav").toggleClass("view");
});

$("body").click(function() {
    $("#mobileNav").removeClass("view");
});
