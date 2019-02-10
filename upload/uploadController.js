function uploadController() {
    $.get('upload/upload.htm').then(data => {
        $('main').html(data);
        
        $('#torrent-type').on('change', function() {
            switch ($(this).val()) {
                case 'series':
                case 'animation':
                case 'movies':
                    $('.genre-movies-series-cartoons').show();
                    $('.genre-games').hide();
                    $('.genre-music').hide();
                    $('.genre-xxx').hide();
                    break;
                case 'games':
                    $('.genre-movies-series-cartoons').hide();
                    $('.genre-games').show();
                    $('.genre-music').hide();
                    $('.genre-xxx').hide();
                    break;
                case 'music':
                    $('.genre-movies-series-cartoons').hide();
                    $('.genre-games').hide();
                    $('.genre-music').show();
                    $('.genre-xxx').hide();
                    break;
                case 'xxx':
                    $('.genre-movies-series-cartoons').hide();
                    $('.genre-games').hide();
                    $('.genre-music').hide();
                    $('.genre-xxx').show();
                    break;
            
                default:
                    break;
            }
        });

        $('#add-torrent').on('click', function() {
            var type = $('#torrent-type').val();
            console.log(type);
            var cover = $('#cover-of-torrent').val();
            var name = $('#name-of-torrent').val();
            var year = $('#year').val();
            var video = $('#youtube-video').val();
            var desc = $('#desc').val();
            var needed18 = $('#check-for-18').val();
            var genre = $('#genre-of-torrent').val();
            var director = $('#name-of-director').val();
            var duration = $('#duration').val();
            var maker = $('#maker').val();
            var singer = $('#singer').val();

            torrentsStorage.createTorrent(type, cover, name, year, video, desc, needed18, genre, director, duration, maker, singer);
            alert('Вие добавихте torrent!');
            let loggedUser = JSON.parse(localStorage.getItem('loggedUser'));
            console.log(loggedUser);
            loggedUser.uploads++;
            localStorage.setItem('loggedUser', JSON.stringify(loggedUser));
            $('#ups').text('Качени: ' + loggedUser.uploads);
        });
    });

}