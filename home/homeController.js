function homeController() {
    $.get('home/home.htm').then(text => {
        $('main').html(text);

        $.get('home/homeMovies.htm').then(data => {
            const template = Handlebars.compile(data);

            let torrents = [];
            torrents = torrentsStorage.showSpecificCatalog('movies');

            torrents.forEach(t => {
                const html = template(t);
                $('#ul-movies').append($(html));
            });
        });
        
        $.get('home/homeMovies.htm').then(data => {
            const template = Handlebars.compile(data);

            let torrents = [];
            torrents = torrentsStorage.showSpecificCatalog('series');

            torrents.forEach(t => {
                const html = template(t);
                $('#ul-series').append($(html));
            });
        });
        
        $.get('home/homeMovies.htm').then(data => {
            const template = Handlebars.compile(data);

            let torrents = [];
            torrents = torrentsStorage.showSpecificCatalog('games');

            torrents.forEach(t => {
                const html = template(t);
                $('#ul-games').append($(html));
            });
        });
        
        $.get('home/homeMovies.htm').then(data => {
            const template = Handlebars.compile(data);

            let torrents = [];
            torrents = torrentsStorage.showSpecificCatalog('music');

            torrents.forEach(t => {
                const html = template(t);
                $('#ul-music').append($(html));
            });

            $('a').on('click', showDetails);
        });
    });
}





function showDetails() {
    $.get('catalogs/torrentDetails.htm').then(data => {
        const template = Handlebars.compile(data);

        let id = +location.hash.split('#')[1];

        for (let t of torrents) {
            if (t.id === id) {
                var currentTorrent = t;
                const html = template(t);
                $('main').html(html);
            } 
        }

        var loggedUser = JSON.parse(localStorage.getItem('loggedUser'));
        $('#just-like-it').on('click', function () {
            if (loggedUser) {
                currentTorrent.likes++;
                $('#haresvaniq').text('Харесвания: ' + currentTorrent.likes);
            } else {
                alert('Необходимо е да влезете в профила си!');
                location.replace('#page=profile-nav');
            }
        });
        $('#just-download-it').on('click', function () {
            if (loggedUser) {
                currentTorrent.downloads++;
                alert('Вие изтеглихе торента: ' + currentTorrent.name);
                $('#svalqniq').text('Сваляния: ' + currentTorrent.downloads);
                loggedUser.downloads++;
                localStorage.setItem('loggedUser', JSON.stringify(loggedUser));
                $('#downs').text('Свалени: ' + loggedUser.downloads);
            } else {
                alert('Необходимо е да влезете в профила си!');
                location.replace('#page=profile-nav');
            }
        });
    });
}