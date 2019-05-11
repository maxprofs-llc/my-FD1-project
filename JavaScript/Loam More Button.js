jQuery(function($) {
    var showOnClick = $('.show_on_click');
    var loadMoreProjectsButton = $('.load_more_projects_button');

    loadMoreProjectsButton.click(function(){
        showOnClick.show();
        loadMoreProjectsButton.hide();
    })
});
