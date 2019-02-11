function catalogController() {
    $.get('catalogs/catalogs.htm').then(data => {
        $('main').html(data);

        $('#first').on('click', function () {

            var torrents = [];
            torrents = torrentsStorage.showSpecificCatalog('movies');

            $('main').html('<ul>').attr('id', 'list');
            location.replace('#page=catalogs/movies');


            $.get('catalogs/oneCatalog.htm').then(text => {
                const template = Handlebars.compile(text);

                torrents.forEach(t => {
                    const html = template(t);
                    $('#list').append($(html));
                });

                $('button').on('click', function () {

                    $.get('catalogs/torrentDetails.htm').then(data => {
                        const template = Handlebars.compile(data);

                        let id = +location.hash.split('#')[1];

                        for (let t of torrents) {
                            if (t.id === id) {
                                const html = template(t);
                                $('main').html(html);
                            }
                        }
                        $('#just-like-it').on('click', function () {
                            console.log(currentTorrent);
                            currentTorrent.likes++;
                            $('#haresvaniq').text('Харесвания: ' + currentTorrent.likes);
                        });
                        $('#just-download-it').on('click', function () {
                            console.log(currentTorrent);
                            currentTorrent.downloads++;
                            alert('Вие изтеглихе торента: ' + currentTorrent.name);
                            $('#svalqniq').text('Сваляния: ' + currentTorrent.downloads);
                            let loggedUser = JSON.parse(localStorage.getItem('loggedUser'));
                            loggedUser.uploads++;
                            localStorage.setItem('loggedUser', JSON.stringify(loggedUser));
                            $('#ups').text('Качени: ' + loggedUser.downloads);
                        });
                    });
                });
            });

            $('#second').on('click', function () {

                var torrents = [];
                torrents = torrentsStorage.showSpecificCatalog('games');

                $('main').html('<ul>').attr('id', 'list');
                location.replace('#page=catalogs/games');

                $.get('catalogs/oneCatalog.htm').then(text => {
                    const template = Handlebars.compile(text);

                    torrents.forEach(t => {
                        const html = template(t);
                        $('#list').append($(html));
                    });

                    $('button').on('click', function () {

                        $.get('catalogs/torrentDetails.htm').then(data => {
                            const template = Handlebars.compile(data);

                            let id = +location.hash.split('#')[1];

                            for (let t of torrents) {
                                if (t.id === id) {
                                    const html = template(t);
                                    $('main').html(html);
                                }
                            }
                        });
                    });
                });
            });

            $('#third').on('click', function () {

                var torrents = [];
                torrents = torrentsStorage.showSpecificCatalog('series');

                $('main').html('<ul>').attr('id', 'list');
                location.replace('#page=catalogs/series');

                $.get('catalogs/oneCatalog.htm').then(text => {
                    const template = Handlebars.compile(text);

                    torrents.forEach(t => {
                        const html = template(t);
                        $('#list').append($(html));
                    });

                    $('button').on('click', function () {

                        $.get('catalogs/torrentDetails.htm').then(data => {
                            const template = Handlebars.compile(data);

                            let id = +location.hash.split('#')[1];

                            for (let t of torrents) {
                                if (t.id === id) {
                                    const html = template(t);
                                    $('main').html(html);
                                }
                            }
                        });
                    });
                });
            });

            $('#fourth').on('click', function () {

                var torrents = [];
                torrents = torrentsStorage.showSpecificCatalog('music');

                $('main').html('<ul>').attr('id', 'list');
                location.replace('#page=catalogs/music');

                $.get('catalogs/oneCatalog.htm').then(text => {
                    const template = Handlebars.compile(text);

                    torrents.forEach(t => {
                        const html = template(t);
                        $('#list').append($(html));
                    });

                    $('button').on('click', function () {

                        $.get('catalogs/torrentDetails.htm').then(data => {
                            const template = Handlebars.compile(data);

                            let id = +location.hash.split('#')[1];

                            for (let t of torrents) {
                                if (t.id === id) {
                                    const html = template(t);
                                    $('main').html(html);
                                }
                            }
                        });
                    });
                });
            });

            $('#fifth').on('click', function () {

                var torrents = [];
                torrents = torrentsStorage.showSpecificCatalog('animes');

                $('main').html('<ul>').attr('id', 'list');
                location.replace('#page=catalogs/animes');

                $.get('catalogs/oneCatalog.htm').then(text => {
                    const template = Handlebars.compile(text);

                    torrents.forEach(t => {
                        const html = template(t);
                        $('#list').append($(html));
                    });

                    $('button').on('click', function () {

                        $.get('catalogs/torrentDetails.htm').then(data => {
                            const template = Handlebars.compile(data);

                            let id = +location.hash.split('#')[1];

                            for (let t of torrents) {
                                if (t.id === id) {
                                    const html = template(t);
                                    $('main').html(html);
                                }
                            }
                        });
                    });
                });
            });

            $('#sixth').on('click', function () {
                var res = confirm('Имате ли 18 години!');
                if (res == true) {
                    $('main').html('<h1>').text('Ахх тии... !');
                    location.replace('#page=catalogs/xxx');
                } else {
                    location.replace('#page=catalogs');
                }
                // var torrents = [];
                // torrents = torrentsStorage.showSpecificCatalog('xxx');

                // $('main').html('<ul>').attr('id', 'list');
                // location.replace('#page=catalogs/xxx');

                // $.get('catalogs/oneCatalog.htm').then(text => {
                //     const template = Handlebars.compile(text);

                // torrents.forEach(t => {
                //     const html = template(t);
                //     $('#list').append($(html));
                // });
                // });
            });


        });
    });
}
