function forumController() {
    $.get('forum/forum.htm').then(data => {
        $('main').html(data);
    });
}