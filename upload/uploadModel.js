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
var gamesCover = ['../imgs/covers/lol1.jpg', '../imgs/covers/wow.jpg', '../imgs/covers/needforspeed.jpg', '../imgs/covers/metro.jpg', '../imgs/covers/thewitcher3.jpg'];
var video = ["https://www.youtube.com/watch?v=34cHO5_LX9g"];
var filmsGenres = ["animation", "anime", "drama", "action", "comedy", "mistery", "romantic", "sport", "triller", "horror", "si-fi", "fantasy"];
var gamesGenres = ["3d", "rpg", "fight", "logic", "sport", "strategy"];
var misicsGenres = ["bg", "chillout", "classical", "dance", "disco", "electronic", "folk"];

var desc = [
    '„Hold the Dark“ е напрегнат разказ за съдбата, семейството и отмъщение, чието действие се развива в пустошта на Аляска. Когато малко дете в отдалечено градче в Аляска е убито от глутница вълци, майка му (Райли Кио) умолява ловец експерт (Джефри Райт) да ги проследи и унищожи. Мисията му го отвежда по мрачен и шокиращ път и той е принуден да се изправи срещу жестокостта на природата и собствения си провал като човек. След като бащата на убитото момче (Александър Скарсгард) се завръща у дома и открива случилото се, полудял от мъка започва маниакално преследване, което оставя кървава диря през замръзналия пейзаж…',
    '„Replicas” разказва за неврохирурга Уилям Фостър (Рийвс), който е на път успешно да пренесе човешкото съзнание в компютър, когато семейството му загива в автомобилна катастрофа. Отчаян, той се обръща за помощ към своя колега Ед (Томас Мидълдич), за да клонира телата им и да създаде реплики. Освен че нарушава всякакви морални и етични граници, Фостър се изправя пред сериозна дилема – те могат да върнат към живот само три от четирите члена на семейството му.',
    'Любимият на цял свят свят герой Мики Маус се завръща с колекция от филмчета, специално избрани от архива на най - добрите анимации на Дисни ,които ще искате да гледате отново.',
    'Анимационно приключение за всички възрасти, със звезден актьорски състав и оригинална музика, „Малката стъпка“ преобръща легендите с краката нагоре, след като весел млад йети открива нещо, което е смятал, че не съществува – един човек. Новината за тази „малка стъпка“ предизвиква шум до небесата в обикновеното йети общество, озадачено от това какво друго може да има в света извън тяхното снежно селце, в тази нова история за приятелството, смелостта и удоволствието да си откривател.',
    '„Анатомията на Грей“ (на английски: Grey\'s Anatomy) е американски сериал, носител на наградите Еми и Златен глобус. За първи път се излъчва по телевизия ABC на 27 март 2005 г. Главен персонаж в сериала е Д-р Мередит Грей, отначало стажант по хирургия в болницата Сиатъл Грейс в Сиатъл. Основният персонаж е стажантката по хирургия Мередит Грей (Елън Помпео). Тя се опитва да се пребори с несправедливостта на живота с помощта на своята най-добра приятелка Кристина Янг, както и другите стажанти – Джордж О\'Мали, Изабел (Изи) Стивънс и Алекс Карев. Техен наставник е наричаната „нациста“ Миранда Бейли. В основата на сериала стои любовната история между Мередит и един от лекарите в болницата Сиатъл Грейс – Дерек Шепърд. В превод Грей означава „сив“, което се покрива с основната идея на филма – че в живота няма „черно“ и „бяло“, а само сиво, защото всяка постъпка може да се разглежда от две страни. ',
    'Ленърд и Шелдън са гениални физици, те са сред богоизбраните, които разбират порядъка във Вселената. Но гениалността не им помага в общуването с хората, най-вече с жените. Всичко това се променя, когато свободомислещата красавица Пени се нанася в съседния апартамент. Дотогава учените са прекарвали вечерите си във видеоигри със социално недъгавите си приятели Воловиц и Кутрапали. ',
    'Играта е от типа на популярния жанр от WarCraft III наречен Dota. Има 2 карти 3vs3 и 5vs5. Включен е и начален \'Tutorial\' на карта 1vs1 за да ви запознае с играта. Играе се само онлайн. В играта има избор от над 80 уникални героя с страхотна графика и невероятно различни и уникални. Може да закупувате платени скинове за героите си , вдигате нива на самият акаунт след всяка игра, качвате "таланти" по подобие на World of Warcraft. Също така може да купувате с точките които получавате след всяка игра (IP Points) много и разнообразни "руни" добавящи бонуси към героя ви при всяка игра. Играта дава възможност да се противопоставите на останалите 3 милиона играчи, като при избор на игра системата автоматично избира най-подходящия за вас противник. Може да играете Custom мачове срещу ваши приятели , както и да участвате в лигата за електронни спортове ESL.',
    'Докато вниманието на Ордата и Алианса е насочено срещу Краля Лич в Нортренд, древно зло се е спотайвало в Дийпхолм - царството на Земята в Равнината на елементалите. Скрит от враговете си в забравено убежище, поквареният дракон-аспект Детуинг, познат още като Нелтарион - Повелителя на Земята, чакал, възстановявайки се от раните, получени при последната му битка с Азерот и броейки времето до момента, в който ще може да потопи света в изпепеляващ огън. Скоро Детуинг Унищожителят ще се завърне в Азерот и неговото триумфално въздигане от Дийпхолм ще разкъса света, нанасяйки ужасна рана насред континентите.',
    'The Need for Speed е състезателен симулатор, разработен в триизмерна графика.В допълнение към състезанията, които са за време или срещу съперници, играта предлага разнообразна информация за автомобилите, включително видеокоментари и автомобили на реални тест-драйвъри. ',
    'Годината е 2033.Под земята е израснало цяло поколение.Обсадените градове-станции се борят помежду си за оцеляване, а извън градовете бродят ужасяващи мутанти.Ти си Артем.Роден си в последните дни преди Земята да изгори, но сте израснали под земята.До сега не си могъл да излезеш извън границите на града, но съдбовно събитие те кара да се отправиш в отчаяно пътешествие до самият център на подземния лабиринт за да предупредиш останалите живи за надвисналата над тях чудовищна заплаха.',
    'The Witcher is a story-driven, next-generation open world role-playing game, set in a visually stunning fantasy universe, full of meaningful choices and impactful consequences. In The Witcher, you play as Geralt of Rivia, a monster hunter tasked with finding a child from an ancient prophecy. '
];


var torrents = [
    new Movie(type[0], filmsCover[1], "HoldTheDark", 2018, video[0], desc[0], false, filmsGenres[2], "Джеръми Солние", 125),
    new Movie(type[0], filmsCover[3], "Replicas", 2018, video[0], desc[1], false, filmsGenres[11], "Джефри Начманоф", 103),
    new Movie(type[1], filmsCover[2], "Mickey", 2018, video[0], desc[2], false, filmsGenres[0], "Тони Крейг", 57),
    new Movie(type[1], filmsCover[4], "Smallfoot", 2018, video[0], desc[3], false, filmsGenres[0], "Кери Къркпатрик", 96),
    new Movie(type[2], filmsCover[0], "GreysAnatomy", 2018, video[0], desc[4], false, filmsGenres[6], "Шонда Раймс ", 42),
    new Movie(type[2], filmsCover[5], "TheBigBangTheory", 2018, video[0], desc[5], false, filmsGenres[4], "Чък Лори ", 22),

    new Game(type[4], gamesCover[0], "LeagueOfLegends", 2018, video[0], desc[6], false, gamesGenres[5], "RIOT"),
    new Game(type[4], gamesCover[1], "WorldOfWarcraft", 2018, video[0], desc[7], false, gamesGenres[1], "Blizzard Entertainment"),
    new Game(type[4], gamesCover[2], "NeedForSpeed", 2018, video[0], desc[8], false, gamesGenres[4], "Ghost Games "),
    new Game(type[4], gamesCover[3], "Metro", 2018, video[0], desc[9], false, gamesGenres[5], "4A Games "),
    new Game(type[4], gamesCover[4], "TheWitcher3", 2018, video[0], desc[10], false, gamesGenres[1], "CD PROJEKT RED "),

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