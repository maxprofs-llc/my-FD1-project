jQuery(function($) {
    var hideMobilProjectOnClick = $('.mobil_project_image');
    var showOnlyWebProjectsButton = $('.web_projects_button');
    var showAllProjects = $('.web_project_image, .mobil_project_image');
    var hideWebProjectOnClick = $('.web_project_image');
    var showOnlyMobilProjectsButton = $('.mobil_projects_button');
    var showAllButton = $('.all_button');

    showOnlyWebProjectsButton.click(function(){
        showAllProjects.show(500);
        hideMobilProjectOnClick.hide(500);
    });

    showOnlyMobilProjectsButton.click(function(){
        showAllProjects.show(500);
        hideWebProjectOnClick.hide(500);
    });
    showAllButton.click(function(){
        showAllProjects.show(500);
    });
});
