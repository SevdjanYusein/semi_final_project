var userStorage = (function() {

    class User {
        constructor(username, password, email) {
            this.username = username;
            this.password = password;
            this.email = email;
            this.uploads = 0;
            this.downloads = 0;
            this.isLoged = false;
        }
    }

    let userList = [];
    if (localStorage.getItem('userList') !== null) {
        userList = JSON.parse(localStorage.getItem('userList'));
    } else {
        userList = [
            new User('Sevdjan', '123456', 'sevdjan@torrents.com'),
            new User('Alex', '123456', 'alex@torrents.com')
        ];
    }
    
    return {
        login: function(username, password) {
            return userList.find(user => user.username === username && 
                user.password === password);
        },

        register: function(username, password, email) {
            userList.push(new User(username, password, email));
            localStorage.setItem('userList', JSON.stringify(userList));
        }
    }
})();