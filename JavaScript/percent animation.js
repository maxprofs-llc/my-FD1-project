jQuery (function($) {
    var addWebAnimation = $('.web_design_animation');
    var addHtmlCssAnimation = $('.html_css_animation');
    var addGraphicDesignAnimation = $('.graphic_design_animation');
    var addUiUxAnimation = $('.ui_ux_animation');
    var breakPoint = $('.latest_work_examples').offset().top;

    $(window).scroll(function () {

        if ($(window).scrollTop() > breakPoint) {
            addWebAnimation.addClass('web_design__loader');
        } else if ($(window).scrollTop() < breakPoint) {
            addWebAnimation.removeClass('web_design__loader');
        }

        if ($(window).scrollTop() > breakPoint) {
            addHtmlCssAnimation.addClass('html_css__loader');
        } else if ($(window).scrollTop() < breakPoint) {
            addHtmlCssAnimation.removeClass('html_css__loader');
        }

        if ($(window).scrollTop() > breakPoint) {
            addGraphicDesignAnimation.addClass('graphic_design__loader');
        } else if ($(window).scrollTop() < breakPoint) {
            addGraphicDesignAnimation.removeClass('graphic_design__loader');
        }

        if ($(window).scrollTop() > breakPoint) {
            addUiUxAnimation.addClass('ui_ux__loader');
        } else if ($(window).scrollTop() < breakPoint) {
            addUiUxAnimation.removeClass('ui_ux__loader');
        }

    });
})
