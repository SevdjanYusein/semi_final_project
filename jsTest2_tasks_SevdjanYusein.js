class User {
    constructor(name, profilePic, age, workPoss, education, phone) {
        if (typeof name === 'string' && name.trim().length > 0 &&
            typeof profilePic === 'string' && profilePic.trim().length > 0 &&
            typeof age === 'number' && age >= 18 &&
            typeof education === 'string' && education.trim().length > 0) {
            this.name = name;
            this.profilePic = profilePic;
            this.age = age;
            this.education = education;
        } else {
            throw new Error("Invalid data for User!");
        }
        if (/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im.test(phone)) {
            this.phone = phone;
        } else {
            throw new Error("Invalid phone number!");
        }
        if (workPoss.every(poss => poss instanceof WorkPossition)) {
            this.workPoss = workPoss;
        } else {
            throw new Error("Invalid work possitions!");
        }
        this.adCount = 0;
    }

    viewAd(ad) {
        if (ad instanceof Ad) {
            ad.viewsCount++;
            this.adCount++;
        }
    }
    applyToAd(ad) {
        if (ad instanceof Ad) {
            const index = ad.appliedUsers.findIndex(user => user.name === this.name);
            if (index === -1) {
                ad.appliedUsers.push(this);
            } else {
                throw new Error("You are already applied to this ad!");
            }
        }
    }
}

class WorkPossition {
    constructor(organization, possition, duration) {
        if (typeof possition === 'string' && possition.trim().length > 0 &&
            typeof duration === 'number' && duration >= 0 &&
            organization instanceof Company) {
            this.organization = organization;
            this.possition = possition;
            this.duration = duration;
        } else {
            throw new Error("Invalid data for work possition!");
        }
    }
}

let nextID = 0;

class Ad {
    constructor(title, validMSec) {
        if (typeof title === 'string' && title.trim().length > 0) {
            this.title = title;
        } else {
            throw new Error("Invalid data for ad title!");
        }
        this.id = nextID++;
        this.viewsCount = 0;
        this.appliedUsers = new Array();
        this.validMSec = validMSec;
        this.whenIsPost = new Date().getMilliseconds();
    }
    printAd() {
        console.log(this.title);
        this.appliedUsers.forEach(user => {
            console.log(user.name + " " + user.phone);
        });
    }
    printAdToHTML() {

        document.write(
            `<tr>
            <td rowspan = "${this.appliedUsers.length}">${this.title}</td>  
            `);
        if (this.appliedUsers.length === 0) {
            document.write(`<td></td>
            <td></td>
            </tr>`);
        } else {
            this.appliedUsers.forEach(user => {
                document.write(`
                <td> ${user.name} </td>
                <td> ${user.phone} </td>
                </tr>
              `);
            });
        }
    }
    isValid() {
        const date = new Date();
        return (date - this.whenIsPost <= this.validMSec);
    }
}

class Company {
    constructor(name, address, pictures) {
        if (typeof name === 'string' && name.trim().length > 0 &&
            typeof address === 'string' && address.trim().length > 0) {
            this.name = name;
            this.address = address;
        } else {
            throw new Error("Invalid data for company!");
        }
        this.adList = new Array();
        if (pictures.every(pic => typeof pic === "string" && pic.trim().length > 0)) {
            this.pictures = pictures;
        }
    }

    addNewAd(ad) {
        if (ad instanceof Ad) {
            this.adList.push(ad);
        }
    }
    removeAd(id) {
        const index = this.adList.findIndex(ad => ad.id === id);
        this.adList.splice(index, 1);
    }
    editAd(id, ad) {
        const index = this.adList.findIndex(ad => ad.id === id);
        if (index !== -1 && ad instanceof Ad) {
            this.adList[index] = ad;
        }
    }
    printAllValidAds() {
        this.adList.forEach(ad => {
            if (ad.isValid()) {
                ad.printAd();
            }
        });
    }
    removeAllInvalidAds() {
        for (let i = 0; i < this.adList.length; i++) {
            let index = this.adList.findIndex(ad => !ad.isValid());
            this.adList.splice(index, 1);
        }
    }
    printTop10ViewedAds() {
        this.adList.sort((ad1, ad2) => {
            return ad1.viewsCount - ad2.viewsCount;
        });
        for (let i = 0; i < 10; i++) {
            this.adList[i].printAd();
        }
    }
    printTop5AppliedAds() {

    }
    printAllAds() {
        this.adList.forEach(ad => { ad.printAd() });
    }
    printAdsToHTML() {
        this.adList.forEach(ad => { ad.printAdToHTML() });
    }
}

//DEMO

let company1 = new Company("ITT", "tuk", ["fghjkl", "dfghjkl", "yhnkl"]);
let company2 = new Company("Telerik", "nqkide", ["uhgfc", "ertyui", "nbvcx"]);

let adList = [
    new Ad("Season1", 5),
    new Ad("Season2", 11),
    new Ad("Season3", 7),
    new Ad("Season4", 12),
    new Ad("Season5", 3),

    new Ad("Kurs1", 5),
    new Ad("Kurs2", 2),
    new Ad("Kurs3", 9),
    new Ad("Kurs4", 12),
    new Ad("Kurs5", 10),

    new Ad("Menager", 3),
    new Ad("Menager", 5)
];

let workPossitions1 = [
    new WorkPossition(company1, "kadet", 1),
    new WorkPossition(company1, "daskal", 2)
];
let workPossitions2 = [
    new WorkPossition(company1, "kadet", 2)
];
let workPossitions3 = [
    new WorkPossition(company1, "daskal", 5)
];
let workPossitions4 = [
    new WorkPossition(company2, "daskal", 2)
];
let workPossitions5 = [
    new WorkPossition(company1, "kadet", 1),
    new WorkPossition(company1, "daskal", 3)
];

let users = [
    new User("Aser", "qwer", 19, workPossitions1, "sredno", "0879690697"),
    new User("Asus", "yuip", 25, workPossitions2, "bakalavir", "0898527537"),
    new User("Lenovo", "cvbn", 28, workPossitions3, "bakalavir", "0899518524"),
    new User("Dell", "poiu", 30, workPossitions4, "bakalavir", "0892365322"),
    new User("Toshiba", "lkjh", 22, workPossitions5, "sredno", "0892525623"),
];

company1.addNewAd(adList[0]);
company1.addNewAd(adList[1]);
company1.addNewAd(adList[2]);
company1.addNewAd(adList[3]);
company1.addNewAd(adList[4]);

company2.addNewAd(adList[5]);
company2.addNewAd(adList[6]);
company2.addNewAd(adList[7]);
company2.addNewAd(adList[8]);
company2.addNewAd(adList[9]);

users.forEach(user => {
    const count = Math.floor(Math.random() * 10);
    for (let i = 0; i <= count; i++) {
        user.viewAd(adList[Math.floor(Math.random() * 5)]);
    }
    user.applyToAd(adList[Math.floor(Math.random() * 5)]);
});

company1.printAllValidAds();

company2.printAllValidAds();

company1.editAd(2, adList[10]);
company2.editAd(7, adList[11]);

// company1.removeAd(2);
// company2.removeAd(7);

// company1.removeAllInvalidAds();
// company2.removeAllInvalidAds();

//console.log(company1);

company2.printAllAds();

company1.printAdsToHTML();
//company2.printAdsToHTML();