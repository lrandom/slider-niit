$(document).ready(function () {
    var index = $('.slider ul li').length - 1;
    $('.btn-next').click(function () {
        if (index > 0) {
            $('.slider ul li').eq(index).fadeOut();
            index--;
        }
    });

    $('.btn-prev').click(function () {
        if (index < ($('.slider ul li').length - 1)) {
            index++;
            $('.slider ul li').eq(index).fadeIn();
        }
    })


    setInterval(function () {
        if (index > 0) {
            $('.slider ul li').eq(index).fadeOut();
            index--;
        } else {
            index = $('.slider ul li').length - 1;
            $('.slider ul li').fadeIn();
        }
    }, 2000);
})