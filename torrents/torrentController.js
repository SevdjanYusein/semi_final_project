function torrentControler() {
    torrents = torrentsStorage._allTorrents;

    $.get('torrents/torrents.htm').then(data => {
        $('main').html(data); 
    });
 
    $.get('torrents/torrentTemplate.htm').then(text => {
        const template = Handlebars.compile(text);

        torrents.forEach(t => {
            const html = template(t);
            $('#torrentsList').append($(html));
        });

        $('#det').on('click', function(event) {
            event.preventDefault();
            console.log('clikam linka')
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
            });
        });

        $("#filterType").on("change", function (event) {
            event.preventDefault();

            var filter = $(this).val();

            switch (filter) {

                case 'all':
                    $('#torrentsList').html('');
                    torrentsStorage.showAllTorrents();
                    showFilteredTorrents();
                    break;
                
                case 'genre':
                    $('#torrentsList').html('');
                    torrentsStorage.sortByGenre();
                    showFilteredTorrents();
                    break;

                case 'type':
                    $('#torrentsList').html('');
                    torrentsStorage.sortByType();
                    showFilteredTorrents();
                    break;

                case 'likes': 
                    $('#torrentsList').html('');
                    torrentsStorage.sortByLikes();
                    showFilteredTorrents();
                    break;
                
                case 'downloads': 
                    $('#torrentsList').html('');
                    torrentsStorage.sortByDownloads();
                    showFilteredTorrents();
                    break;

                default:
                    $('#torrentsList').html('');
                    torrentsStorage.showAllTorrents();
                    showFilteredTorrents();
                    break;
            }
        });

        $()
        
    });
}

function showFilteredTorrents() {
    $.get('torrents/torrentTemplate.htm').then(text => {
        const template = Handlebars.compile(text);

        torrents.forEach(t => {
            const html = template(t);
            $('#torrentsList').append($(html));
        });

        // $('#det').on('click', function(event) {
        //     event.preventDefault();
        //     console.log('clikam linka')
        //     $.get('catalogs/torrentDetails.htm').then(data => {
        //         const template = Handlebars.compile(data);

        //         let id = +location.hash.split('#')[1];

        //         for (let t of torrents) {
        //             if (t.id === id) {
        //                 var currentTorrent = t;
        //                 const html = template(t);
        //                 $('main').html(html);
        //             }
        //         }
        //     });
        // });

    });
}