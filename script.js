$(window).scroll(function() {

    var s = $(window).scrollTop(),

    opacityVal = ( s / 10.0);

    $('.sunrise-bg').css('opacity', opacityVal);
});

$(window).scroll(function() {

    var s = $(window).scrollTop(),

    opacityVal = ( s / 20.0);

    $('.people-bg').css('opacity', opacityVal);
    $('.main-title').css('opacity', opacityVal);
    $('.main-subtitle').css('opacity', opacityVal);
});



$(window).scroll(function() {

    var s = $(window).scrollTop(),

    opacityVal = ( -s + 1 );

    $('.main-new').css('opacity', opacityVal);
});