$(function() {

    $('#registerForm').hide();
    $('#profile').hide();
    $('#err').hide();
    $('#success').hide();

    $('#login').on('click', function(event) {
        event.originalEvent.preventDefault();

        let user = userStorage.login($('#username').val(), $('#password').val());

        if (user) {
            user.isLoged = true;

            $('#nameOfUser').css('display', 'inline');
            $('#nameOfUser').text($('#username').val());
            $('#name').text($('#username').val());
            $('#ups').text('Качени: ' + user.uploads);
            $('#downs').text('Свалени: ' + user.downloads);

            $('#profile').show();
            $('#loginForm').hide();
            $('#containers').hide();
            $('#poll').hide();
            $('#ads').hide();
            $('#forum-uc').hide();
            $('#blog-uc').hide();
            $('#upload-conteiner').hide();
        } else {
            $('#err').show();
        }
    });

    $('#showRegisterForm').on('click', function(event) {
        event.originalEvent.preventDefault();

            $('#registerForm').show();
            $('#loginForm').hide();
            $('#containers').hide();
            $('#poll').hide();
            $('#ads').hide();
            $('#forum-uc').hide();
            $('#blog-uc').hide();
            $('#upload-conteiner').hide();
    });

    $('#register').on('click', function(event) {
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

            $('#registerForm').hide();
            $('#success').show();
            $('#success').hide(3500);
            $('#loginForm').show(3500);
        }
    });
});

function isEmailValid(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}