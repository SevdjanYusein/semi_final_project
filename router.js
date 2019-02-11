function router() {
    const page = location.hash.split("=")[1];

    switch (page) {
        case 'home' : homeController(); break;
        case 'torrents' : torrentControler(); break;
        case 'catalogs' : catalogController(); break;
        case 'upload' : checkIfIsLogged(); break;
        case 'forum' : forumController(); break;
        case 'subs' : subsController(); break;
        case 'blog' : blogController(); break;
        case 'profile-nav' : loginController(); break;

        default:
            // homeController();
            break;
    }
}

$(window).on('hashchange', router);
router();

function checkIfIsLogged () {
    var loggedUser = JSON.parse(localStorage.getItem('loggedUser'));
    if (loggedUser) {
        uploadController();
    } else {
        alert('Необходимо е да влезете в профила си!');
        location.replace('#page=profile-nav');
    }
}