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
    });

}