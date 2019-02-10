var ID = 1;

class Torrent {
    constructor(type, cover, name, year, video, desc, needed18) {
        this.id = ID++;
        this.type = type;
        this.cover = cover;
        this.name = name;
        this.year = year;
        this.video = video || " ";
        this.desc = desc || " ";
        this.needed18 = needed18;

        this.likes = Math.floor(Math.random() * 20);
        this.downloads = Math.floor(Math.random() * 20);
    }

    showTorrent() {
        console.log(this.name + " " + this.type);
    }
}

class Movie extends Torrent {
    constructor(type, cover, name, year, video, desc, needed18, genre, director, duration) {
        super(type, cover, name, year, video, desc, needed18);
        this.genre = genre;
        this.director = director || " ";
        this.duration = duration || " ";
    }
}

class Game extends Torrent {
    constructor(type, cover, name, year, video, desc, needed18, genre, maker) {
        super(type, cover, name, year, video, desc, needed18);
        this.genre = genre;
        this.maker = maker || " ";
    }
}

class Music extends Torrent {
    constructor(type, cover, name, year, video, desc, needed18, genre, singer) {
        super(type, cover, name, year, video, desc, needed18);
        this.genre = genre;
        this.singer = singer || " ";
    }
}

class X extends Torrent {
    constructor(type, cover, name, year, video, desc, needed18, genre) {
        super(type, cover, name, year, video, desc, needed18);
        this.genre = genre;
    }
}


class TorrentStorage {
    constructor() {
        this._allTorrents = [];
    }

    addTorrent(t) {
        this._allTorrents.push(t);
    }

    createTorrent(type, cover, name, year, video, desc, needed18, genre, director, duration, maker, singer) {

        switch (type) {
            case 'movies': case 'animes': case 'series': {
                let torrent = new Movie(type, cover, name, year, video, desc, needed18, genre, director, duration);
                this._allTorrents.push(torrent);
                break;
            }
            case 'games': {
                let torrent = new Game(type, cover, name, year, video, desc, needed18, genre, maker);
                this._allTorrents.push(torrent);
                break;
            }
            case 'music': {
                let torrent = new Music(type, cover, name, year, video, desc, needed18, genre, singer);
                this._allTorrents.push(torrent);
                break;
            }
            case 'xxx': {
                let torrent = new X(type, cover, name, year, video, desc, needed18, genre);
                this._allTorrents.push(torrent);
                break;
            }

            default: throw new Error('Invalid torrent input!');
        }
    }

    showAllTorrents() {
        return this._allTorrents;
    }
    // showAllTorrents() {
    //     this._allTorrents.forEach(torrent => torrent.showTorrent());
    // }

    showSpecificCatalog(type) {
        var currentCatalog = [];
        this._allTorrents.forEach(torrent => {
            if (torrent.type == type) {
                currentCatalog.push(torrent);
            }
        });
        return currentCatalog;
    }

    sortByLikes() {
        // const currentCatalog = this._allTorrents.filter(torrent => torrent.type === type);
        this._allTorrents.sort((item1, item2) => {
            return item2.likes - item1.likes;
        });
        return this._allTorrents;
    }

    sortByDownloads() {
        // const currentCatalog = this._allTorrents.filter(torrent => torrent.type === type);
        this._allTorrents.sort((item1, item2) => {
            return item2.downloads - item1.downloads;
        });
        return this._allTorrents;
    }

    sortByGenre(genre) {
        const matched = this._allTorrents.filter(item => item.genre === genre);
    }
}

var torrentsStorage = new TorrentStorage();

var type = ['movies', "animes", "series", "music", "games"];
var filmsCover = ['../imgs/covers/greysanatomy.jpg', '../imgs/covers/holdthedark.jpg', '../imgs/covers/mickey.jpg', '../imgs/covers/replicas.jpg', '../imgs/covers/smallfoot.jpg', '../imgs/covers/thebigbangtheory.jpg'];
var musicCover = ['../imgs/covers/50cent.jpg', '../imgs/covers/beatles.jpg', '../imgs/covers/beethoven.jpg', '../imgs/covers/btr.jpg', '../imgs/covers/vangelis.jpg'];
var gamesCover = ['../imgs/covers/lol.jpg', '../imgs/covers/wow.jpg', '../imgs/covers/needforspeed.jpg', '../imgs/covers/metro.jpg', '../imgs/covers/thewitcher3.jpg'];
var video = ["https://www.youtube.com/watch?v=34cHO5_LX9g"];
var filmsGenres = ["animation", "anime", "drama", "action", "comedy", "mistery", "romantic", "sport", "triller", "horror", "si-fi", "fantasy"];
var gamesGenres = ["3d", "rpg", "fight", "logic", "sport", "strategy"];
var misicsGenres = ["bg", "chillout", "classical", "dance", "disco", "electronic", "folk"];


var torrents = [
    new Movie(type[0], filmsCover[1], "HoldTheDark", 2018, video[0], "desc", false, filmsGenres[2], "Джеръми Солние", 125),
    new Movie(type[0], filmsCover[3], "Replicas", 2018, video[0], "desc", false, filmsGenres[11], "Джефри Начманоф", 103),
    new Movie(type[1], filmsCover[2], "Mickey", 2018, video[0], "desc", false, filmsGenres[0], "Тони Крейг", 57),
    new Movie(type[1], filmsCover[4], "Smallfoot", 2018, video[0], "desc", false, filmsGenres[0], "Кери Къркпатрик", 96),
    new Movie(type[2], filmsCover[0], "GreysAnatomy", 2018, video[0], "desc", false, filmsGenres[6], "Шонда Раймс ", 42),
    new Movie(type[2], filmsCover[5], "TheBigBangTheory", 2018, video[0], "desc", false, filmsGenres[4], "Чък Лори ", 22),

    new Game(type[4], gamesCover[0], "LeagueOfLegends", 2018, video[0], "desc", false, gamesGenres[5], "RIOT"),
    new Game(type[4], gamesCover[1], "WorldOfWarcraft", 2018, video[0], "desc", false, gamesGenres[1], "Blizzard Entertainment"),
    new Game(type[4], gamesCover[2], "NeedForSpeed", 2018, video[0], "desc", false, gamesGenres[4], "Ghost Games "),
    new Game(type[4], gamesCover[3], "Metro", 2018, video[0], "desc", false, gamesGenres[5], "4A Games "),
    new Game(type[4], gamesCover[4], "TheWitcher3", 2018, video[0], "desc", false, gamesGenres[1], "CD PROJEKT RED "),

    new Music(type[3], musicCover[0], "50cent", 2016, video[0], "desc", false, misicsGenres[0], "50cent"),
    new Music(type[3], musicCover[1], "Beatles", 2016, video[0], "desc", false, misicsGenres[0], "Beatles"),
    new Music(type[3], musicCover[2], "Beethoven", 2016, video[0], "desc", false, misicsGenres[2], "Beethoven"),
    new Music(type[3], musicCover[3], "BTR", 2016, video[0], "desc", false, misicsGenres[0], "BTR"),
    new Music(type[3], musicCover[4], "Vangelis", 2016, video[0], "desc", false, misicsGenres[0], "Vangelis")

];

torrents.forEach(t => torrentsStorage.addTorrent(t));

// console.log(torrentsStorage);

// torrentsStorage.sortByLikes();

// console.log(torrentsStorage);