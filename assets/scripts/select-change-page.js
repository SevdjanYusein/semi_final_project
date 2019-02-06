window.addEventListener('DOMContentLoaded', function () {

    document.querySelector("#upload").addEventListener('click', event => {
        event.preventDefault();
        currentUser = JSON.parse(localStorage.getItem('loggedUser'));//new
        if (currentUser.isLoged == true) {            
            document.getElementById("containers").style.display="none";
            document.getElementById("poll").style.display="none";
            document.getElementById("forum-uc").style.display="none";
            document.getElementById("blog-uc").style.display="none";
            document.getElementById("upload-conteiner").style.display="block";
            document.getElementById("upload-conteiner").style.marginTop="20px";
            document.getElementById("user").style.display="none";
        } else {
            document.getElementById("user").style.display="block";
        }
    }, false);

    document.querySelector("#home").addEventListener('click', event => {
        event.preventDefault();

       document.getElementById("containers").style.display="block";
       document.getElementById("poll").style.display="block";
       document.getElementById("upload-conteiner").style.display="none";
       document.getElementById("forum-uc").style.display="none";
       document.getElementById("blog-uc").style.display="none";
       document.getElementById("user").style.display="none";
    }, false);

    document.querySelector("#forum").addEventListener('click', event => {
        event.preventDefault();

       document.getElementById("containers").style.display="none";
       document.getElementById("poll").style.display="none";
       document.getElementById("upload-conteiner").style.display="none";
       document.getElementById("forum-uc").style.display="block";
       document.getElementById("blog-uc").style.display="none";
       document.getElementById("user").style.display="none";
    }, false);

    document.querySelector("#blog").addEventListener('click', event => {
        event.preventDefault();

       document.getElementById("containers").style.display="none";
       document.getElementById("poll").style.display="none";
       document.getElementById("upload-conteiner").style.display="none";
       document.getElementById("forum-uc").style.display="none";
       document.getElementById("blog-uc").style.display="block";
       document.getElementById("user").style.display="none";
    }, false);

    document.querySelector("#profile-nav").addEventListener('click', event => {
        event.preventDefault();

       document.getElementById("containers").style.display="none";
       document.getElementById("poll").style.display="none";
       document.getElementById("upload-conteiner").style.display="none";
       document.getElementById("forum-uc").style.display="none";
       document.getElementById("blog-uc").style.display="none";
       document.getElementById("user").style.display="block";
    }, false);

    document.querySelector("#exit").addEventListener('click', event => {
        event.preventDefault();
        
        currentUser = JSON.parse(localStorage.getItem('loggedUser'));
        // console.log(currentUser);
        localStorage.removeItem('loggedUser');
        
        $('#name').hide();
        $('#ups').hide();
        $('#downs').hide();
        $('#profile').hide();
        $('#loginForm').show();
    }, false);

}, false);
