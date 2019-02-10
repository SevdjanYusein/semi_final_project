function homeController() {
    $.get('home/home.htm').then(text => {
        $('main').html(text);
    });
}