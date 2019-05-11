$('.work_with_us_button').click(function() {

    $('.js-overlay-campaign').fadeIn();
    $('.js-overlay-campaign').addClass('disabled');
});


$('.js-close-campaign').click(function() {
    $('.js-overlay-campaign').fadeOut();

});