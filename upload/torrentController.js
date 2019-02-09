function torrentsControler() {
    torrents = torrentsStorage._allTorrents;

    $.get('torrentTemplate.htm').then(text => {
        const template = Handlebars.compile(text);

        torrents.forEach(t => {
            const html = template(t);
            $('ul').append($(html));
        });
    });

    $("#filterType").change(function () {
        console.log("ti uspq ^^");
        // switch ($(this).val()) {
        //     // case 'genre': torrents.sortByGenre(); break;
        //     // case 'type': torrents.sortByType(); break;
        //     case 'likes': {
        //         $.get('torrentTemplate.htm').then(text => {
        //             const template = Handlebars.compile(text);
        //             torrents.sortByLikes().forEach(t => {
        //                 const html = template(t);
        //                 $('ul').append($(html));
        //             });
        //         });
        //         break;
        //     }
        //     // case 'downloads': torrents.sortByDownloads(); break;
        // }
    });
}

torrentsControler();