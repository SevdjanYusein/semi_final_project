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
        });
    });
    
    $('#second').on('click', function() {

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
        });
    });
    
    $('#third').on('click', function() {

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
        });
    });
    
    $('#fourth').on('click', function() {

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
        });
    });
    
    $('#fifth').on('click', function() {

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
        });
    });
    
    $('#sixth').on('click', function() {

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
    

    });
}