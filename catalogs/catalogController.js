function catalogController() {
    $.get('catalogs/catalogs.htm').then(data => {
        $('main').html(data);

    $('#first').on('click', function() {

        var torrents = [];
        torrents = itTorrents.showSpecificCatalog('movies');

        $('main').html('<ul>').attr('id', 'list');
        location.replace('#page=catalogs/movies');

        $.get('catalogs/oneCatalog.htm').then(text => {
            const template = Handlebars.compile(text);

        torrents.forEach(t => {
            const html = template(t);
            $('#list').append($(html));
        });
        });
    });
    
    $('#second').on('click', function() {

        var torrents = [];
        torrents = itTorrents.showSpecificCatalog('games');

        $('main').html('<ul>').attr('id', 'list');
        location.replace('#page=catalogs/games');

        $.get('catalogs/oneCatalog.htm').then(text => {
            const template = Handlebars.compile(text);

        torrents.forEach(t => {
            const html = template(t);
            $('#list').append($(html));
        });
        });
    });
    

    });
}