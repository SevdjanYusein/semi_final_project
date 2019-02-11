window.addEventListener('DOMContentLoaded', function () {
    document.querySelector('#torrent-type').addEventListener('change', function () {
        var movies = document.querySelectorAll('.genre-movies-series-cartoons');
        var games = document.querySelectorAll('.genre-games');
        var music = document.querySelectorAll('.genre-music');
        var xxx = document.querySelectorAll('.genre-xxx');
        console.log(music);
        if (this.value === "movies"
            || this.value === "series"
            || this.value === "animation") {
            movies.forEach(movie => movie.style.display = 'table-row');
            games.forEach(game => game.style.display = 'none');
            music.forEach(m => m.style.display = 'none');
            xxx.forEach(x => x.style.display = 'none');
        }
 
        if (this.value === "games") {
            movies.forEach(movie => movie.style.display = 'none');
            games.forEach(game => game.style.display = 'table-row');
            music.forEach(m => m.style.display = 'none');
            xxx.forEach(x => x.style.display = 'none');
        }

        if (this.value === "music") {
            movies.forEach(movie => movie.style.display = 'none');
            games.forEach(game => game.style.display = 'none');
            music.forEach(m => m.style.display = 'table-row');
            xxx.forEach(x => x.style.display = 'none');
        }

        if (this.value === "xxx") {
            movies.forEach(movie => movie.style.display = 'none');
            games.forEach(game => game.style.display = 'none');
            music.forEach(m => m.style.display = 'none');
            xxx.forEach(x => x.style.display = 'table-row');
        }
    }, false);


    // input validations
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


}, false);
