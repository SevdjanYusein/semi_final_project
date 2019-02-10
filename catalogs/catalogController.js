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

<<<<<<< HEAD
                $('button').on('click', function () {
                    $.get('torrents/torrentTemplate.htm').then(data => {
                        $('main').html(data);
                    });
                });
=======
>>>>>>> 977e6c7374b6a13693b51a74739f8d7652c5408a
            });

        });

        $('#second').on('click', function () {

            var torrents = [];
            torrents = torrentsStorage.showSpecificCatalog('games');

            $('main').html('<ul>').attr('id', 'list');
            location.replace('#page=catalogs/games');

<<<<<<< HEAD
            $.get('catalogs/oneCatalog.htm').then(text => {
                const template = Handlebars.compile(text);

                torrents.forEach(t => {
                    const html = template(t);
                    $('#list').append($(html));
                });
            });
=======
>>>>>>> 977e6c7374b6a13693b51a74739f8d7652c5408a
        });

        $('#third').on('click', function () {

            var torrents = [];
            torrents = torrentsStorage.showSpecificCatalog('series');

            $('main').html('<ul>').attr('id', 'list');
            location.replace('#page=catalogs/series');

<<<<<<< HEAD
            $.get('catalogs/oneCatalog.htm').then(text => {
                const template = Handlebars.compile(text);

                torrents.forEach(t => {
                    const html = template(t);
                    $('#list').append($(html));
                });
            });
=======
>>>>>>> 977e6c7374b6a13693b51a74739f8d7652c5408a
        });

        $('#fourth').on('click', function () {

            var torrents = [];
            torrents = torrentsStorage.showSpecificCatalog('music');

            $('main').html('<ul>').attr('id', 'list');
            location.replace('#page=catalogs/music');

<<<<<<< HEAD
            $.get('catalogs/oneCatalog.htm').then(text => {
                const template = Handlebars.compile(text);

                torrents.forEach(t => {
                    const html = template(t);
                    $('#list').append($(html));
                });
            });
=======
>>>>>>> 977e6c7374b6a13693b51a74739f8d7652c5408a
        });

        $('#fifth').on('click', function () {

            var torrents = [];
            torrents = torrentsStorage.showSpecificCatalog('animes');

            $('main').html('<ul>').attr('id', 'list');
            location.replace('#page=catalogs/animes');

<<<<<<< HEAD
            $.get('catalogs/oneCatalog.htm').then(text => {
                const template = Handlebars.compile(text);

                torrents.forEach(t => {
                    const html = template(t);
                    $('#list').append($(html));
                });
            });
        });

        $('#sixth').on('click', function () {

            var torrents = [];
            torrents = torrentsStorage.showSpecificCatalog('xxx');

            $('main').html('<ul>').attr('id', 'list');
            location.replace('#page=catalogs/xxx');

            $.get('catalogs/oneCatalog.htm').then(text => {
                const template = Handlebars.compile(text);

                torrents.forEach(t => {
                    const html = template(t);
                    $('#list').append($(html));
                });
            });
        });

=======
>>>>>>> 977e6c7374b6a13693b51a74739f8d7652c5408a

    });
}