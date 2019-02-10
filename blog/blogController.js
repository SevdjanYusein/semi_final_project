function blogController() {
    $.get('blog/blog.htm').then(data =>{
        $('main').html(data);
    });
}