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

        document.querySelector("#name-of-torrent").addEventListener('blur', event => {
            event.preventDefault();
            if (event.target.value.trim().length > 4) {
                event.target.style.boxShadow = '1px 1px 1px 1px green';
            } else {
                event.target.style.boxShadow = '1px 1px 1px 1px red';
            }
        }, false);
    
        document.querySelector("#desc").addEventListener('blur', event => {
            event.preventDefault();
            if (event.target.value.trim().length > 20) {
                event.target.style.boxShadow = '1px 1px 1px 1px green';
            } else {
                event.target.style.boxShadow = '1px 1px 1px 1px red';
            }
        }, false);
    
        document.querySelector("#year").addEventListener('blur', event => {
            event.preventDefault();
            if (+event.target.value > 1900 && +event.target.value < 2020) {
                event.target.style.boxShadow = '1px 1px 1px 1px green';
            } else {
                event.target.style.boxShadow = '1px 1px 1px 1px red';
            }
        }, false);
    
        document.querySelector("#youtube-video").addEventListener('blur', event => {
            event.preventDefault();
            var re = /[a-z0-9-\.]+\.[a-z]{2,4}\/?([^\s<>\#%"\,\{\}\\|\\\^\[\]`]+)?$/; //reg expression to validate url
            if (re.test(event.target.value)) {
                event.target.style.boxShadow = '1px 1px 1px 1px green';
            } else {
                event.target.style.boxShadow = '1px 1px 1px 1px red';
            }
        }, false);
    
        document.querySelector("#singer").addEventListener('blur', event => {
            event.preventDefault();
            if (event.target.value.trim().length > 4) {
                event.target.style.boxShadow = '1px 1px 1px 1px green';
            } else {
                event.target.style.boxShadow = '1px 1px 1px 1px red';
            }
        }, false);
    
        document.querySelector("#maker").addEventListener('blur', event => {
            event.preventDefault();
            if (event.target.value.trim().length > 4) {
                event.target.style.boxShadow = '1px 1px 1px 1px green';
            } else {
                event.target.style.boxShadow = '1px 1px 1px 1px red';
            }
        }, false);
    
        document.querySelector("#name-of-director").addEventListener('blur', event => {
            event.preventDefault();
            if (event.target.value.trim().length > 4) {
                event.target.style.boxShadow = '1px 1px 1px 1px green';
            } else {
                event.target.style.boxShadow = '1px 1px 1px 1px red';
            }
        }, false);
    
        document.querySelector("#duration").addEventListener('blur', event => {
            event.preventDefault();
            if (+event.target.value > 0) {
                event.target.style.boxShadow = '1px 1px 1px 1px green';
            } else {
                event.target.style.boxShadow = '1px 1px 1px 1px red';
            }
        }, false);
 
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