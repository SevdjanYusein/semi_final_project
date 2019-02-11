function catalogController() {
    $.get('catalogs/catalogs.htm').then(data => {
        $('main').html(data);

    $('#first').on('click', function() {

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
                });
            });
        });

            $('#second').on('click', function () {
                console.log('klikam na igri')
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

                        $.get('catalogs/gameDetails.htm').then(data => {
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

                        $.get('catalogs/musicDetails.htm').then(data => {
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
    // });
}
