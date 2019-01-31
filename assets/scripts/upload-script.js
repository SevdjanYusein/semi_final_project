window.addEventListener('DOMContentLoaded', function() {
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
}, false);


// /**
//  * @param type - 0-movies;1-games;2-series;3-music;4-animation;5-xxx
//  * @param file - need to be img
//  * @param name - string
//  * @param linkToVideo - link to youtube trailer
//  * @param description - string
//  * @param need18 - boolean
//  */

// class Torrent {
//     constructor(type, file, name, linkToVideo, description, need18) {
//         this.type = type;
//         this.file = file;
//         this.name = name;
//         this.linkToVideo = linkToVideo;
//         this.description = description;
//         this.need18 = need18;
//     }
// }

// const movies = [];  //масив с филмите(част от map със всчки торенти)


// function CreateTorrent() {
//     var type = document.querySelector('#select-type').value;
//     var name = document.querySelector('#name-of-torrent').value;
//     movies.push(new Torrent(type, name));
//     console.log(movies);
//     alert('bravo ti dobavi torent s type: ' 
//     + type + ' i name: ' + name);
// }

// // var type = document.querySelector('#select-type').value;
// // var name = document.querySelector('#name-of-torrent').value;

// document.querySelector('#buton').addEventListener('click', CreateTorrent, false);   //никъде не предавам параметрите от imput-та



// // var torrent1 = new Torrent(1, 'img1', 'deset qrda', "https://www.youtube.com/watch?v=kjC1zmZo30U", "mn interesen film", false);
// // var torrent2 = new Torrent(0, 'img2', 'deset qrda', "https://www.youtube.com/watch?v=kjC1zmZo30U", "mn interesen film", false);
// // var torrent3 = new Torrent(5, 'img3', 'deset qrda', "https://www.youtube.com/watch?v=kjC1zmZo30U", "mn interesen film", false);

// // console.log(torrent1);

// // const movies = [];

// // movies.push(torrent1);
// // movies.push(torrent2);
// // movies.push(torrent3);

// // console.log(movies);