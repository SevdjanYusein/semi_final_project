$(function() {
    $('#home').on('click', function(event) {
        console.log('clickna home');
        event.preventDefault();
    
        location.replace('#page=home');
    });
    
    $('#torrents').on('click', function(event) {
        // console.log('clickna drugo');
        event.preventDefault();
    
        location.replace('#page=torrents');
    });
    
    $('#catalogs').on('click', function(event) {
        // console.log('clickna drugo');
        event.preventDefault();
    
        location.replace('#page=catalogs');
    });
    
    $('#upload').on('click', function(event) {
        // console.log('clickna drugo');
        event.preventDefault();
    
        location.replace('#page=upload');
    });
    
    $('#forum').on('click', function(event) {
        // console.log('clickna drugo');
        event.preventDefault();
    
        location.replace('#page=forum');
    });
    
    $('#subs').on('click', function(event) {
        // console.log('clickna drugo');
        event.preventDefault();
    
        location.replace('#page=subs');
    });
    
    $('#blog').on('click', function(event) {
        // console.log('clickna drugo');
        event.preventDefault();
    
        location.replace('#page=blog');
    });
    
    $('#profile-nav').on('click', function(event) {
        // console.log('clickna drugo');
        event.preventDefault();
    
        location.replace('#page=profile-nav');
    });
    
    $('#exit').on('click', function(event) {
        // console.log('clickna drugo');
        event.preventDefault();

        currentUser = JSON.parse(localStorage.getItem('loggedUser'));
        localStorage.removeItem('loggedUser');
        $('#name').text('');
        $('#ups').text('');
        $('#downs').text('');
        $('#exit').hide();
        $('#enter').show();
    
        location.replace('#page=home');
    });
    
    $('#enter').on('click', function(event) {
        // console.log('clickna drugo');
        event.preventDefault();
    
        location.replace('#page=profile-nav');
    });
})