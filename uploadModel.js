var id = 1;

class Torrent {
    constructor(type, cover, name, year, video, desc, needed18) {
        this.id = id++;
        this.type = type;
        this.cover = cover;
        this.name = name;
        this.year = year;
        this.video = video;
        this.desc = desc;
        this.needed18 = needed18;

        this.likes = 0;
        this.downloads = 0;
    }
}

class Movie extends Torrent {
    constructor(type, cover, name, year, video, desc, needed18, genre, director, duration) {
        super(type, cover, name, year, video, desc, needed18);
        this.genre = genre;
        this.director = director;
        this.duration = duration;
    }
}

class Game extends Torrent {
    constructor(type, cover, name, year, video, desc, needed18, genre, maker) {
        super(type, cover, name, year, video, desc, needed18);
        this.genre = genre;
        this.maker = maker;
    }
}

class Music extends Torrent {
    constructor(type, cover, name, year, video, desc, needed18, genre, singer) {
        super(type, cover, name, year, video, desc, needed18);
        this.genre = genre;
        this.singer = singer;
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

    createTorrent(type, cover, name, year, video, desc, needed18, genre, director, duration, maker, singer) {
       
        switch (type) {
            case 'movies':
                torrent = new Movie(type, cover, name, year, video, desc, needed18, genre, director, duration);
                this._allTorrents.push(torrent);
                break;
            case 'games':
                torrent = new Game(type, cover, name, year, video, desc, needed18, genre, maker);
                this._allTorrents.push(torrent);
                break;
            case 'music':
                torrent = new Music(type, cover, name, year, video, desc, needed18, genre, singer);
                this._allTorrents.push(torrent);
                break;
            case 'xxx':
                torrent = new X(type, cover, name, year, video, desc, needed18, genre);
                this._allTorrents.push(torrent);
                break;
        
            default:
                throw new Error('Invalid torrent input!');
                break;
        }
    }

    showAllTorrents() {
        this._allTorrents.forEach(torrent => console.log(torrent));
    }

    showSpecificCatalog(type) {
        const currentCatalog = this._allTorrents.filter(torrent => torrent.type === type);
    }

    sortByLikes(type) {
        const currentCatalog = this._allTorrents.filter(torrent => torrent.type === type);
        currentCatalog.sort((item1, item2) => {
            return item2.likes - item1.likes;
        });
    }

    sortByDownloads(type) {
        const currentCatalog = this._allTorrents.filter(torrent => torrent.type === type);
        currentCatalog.sort((item1, item2) => {
            return item2.downloads - item1.downloads;
        });
    }

    sortByGenre(genre) {
        const matched = this._allTorrents.filter(item => item.genre === genre);
    } 

}

// var type = 'movies';
// var name = 'bam';
// var year = 2019;


// var itTorrents = new TorrentStorage();
// console.log(itTorrents);
// itTorrents.createTorrent(type, name, year);
// itTorrents.showAllTorrents();