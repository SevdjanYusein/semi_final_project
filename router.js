function router() {
    const page = location.hash.split("=")[1];

    switch (page) {
        case 'home' : homeController(); break;
        case 'torrents' : torrentControler(); break;
        case 'catalogs' : catalogController(); break;
        case 'upload' : uploadController(); break;
        case 'forum' : forumController(); break;
        case 'subs' : subsController(); break;
        case 'blog' : blogController(); break;
        case 'profile-nav' : loginController(); break;

        default:
            break;
    }
}

$(window).on('hashchange', router);
router();