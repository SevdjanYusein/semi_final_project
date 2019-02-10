function loginController() {

    //if not log in
    currentUser = JSON.parse(localStorage.getItem('loggedUser'));
    if (!currentUser) {
        $.get('profile/login.htm').then(data => {
            $('main').html(data);

            $('#login').on('click', function (event) {
                event.originalEvent.preventDefault();

                var user = userStorage.login($('#username').val(), $('#password').val());
                // console.log(user); 

                if (user) {
                    user.isLoged = true;
                    localStorage.setItem('loggedUser', JSON.stringify(user));

                    $('#nameOfUser').css('display', 'inline');
                    $('#nameOfUser').text(user.username);
                    $('#name').text(user.username);
                    $('#ups').text('Качени: ' + user.uploads);
                    $('#downs').text('Свалени: ' + user.downloads);
                    $('#exit').show();
                    $('#enter').hide();

                    $('#username').val('');
                    $('#password').val('');

                    $.get('profile/profile.htm').then(text => {
                        const template = Handlebars.compile(text);
                        $('main').html($(template(user)));
                    });

                } else {
                    $('#err').show();
                }
            });

            $('#showRegisterForm').on('click', function (event) {
                event.originalEvent.preventDefault();

                $.get('profile/register.htm').then(data => {
                    $('main').html(data);

                    location.replace('#page=profile-nav/register');

                    $('#register').on('click', function (event) {
                        console.log('cukna reg');
                        event.originalEvent.preventDefault();

                        let haserror = false;

                        if ($('#username2').val().trim().length <= 3) {
                            haserror = true;
                            $('#usernameContainer > .error').text('Invalid username!');
                        } else {
                            $('#usernameContainer > .error').text('');
                        }
                        if ($('#password2').val().trim().length <= 3) {
                            haserror = true;
                            $('#passwordContainer > .error').text('Invalid password!');
                        } else {
                            $('#passwordContainer > .error').text('');
                        }
                        if (!isEmailValid($('#email2').val())) {
                            haserror = true;
                            $('#emailContainer > .error').text('Invalid e-mail!');
                        } else {
                            $('#emailContainer > .error').text('');
                        }

                        if (!haserror) {
                            userStorage.register($('#username2').val(), $('#password2').val(), $('#email2').val());

                            location.replace('#page=profile-nav');

                            $('#username2').val('');
                            $('#password2').val('');
                            $('#email2').val('');
                        }
                    });
                });

            });

        });
    } else {
        $.get('profile/profile.htm').then(text => {
            const template = Handlebars.compile(text);
            $('main').html($(template(currentUser)));
        });

        $('#nameOfUser').text(currentUser.name);
        $('#name').text(currentUser.name);
        $('#ups').text('Качени: ' + currentUser.uploads);
        $('#downs').text('Свалени: ' + currentUser.downloads);
    }
}


function isEmailValid(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}