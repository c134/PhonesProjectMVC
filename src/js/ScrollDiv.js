
$(window).scroll(function () {
    $("#ordersCartDiv").css({
        "margin-top": ($(window).scrollTop()) + "px",
        "margin-left": ($(window).scrollLeft()) + "px"
    });
});

