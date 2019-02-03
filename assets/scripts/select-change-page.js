window.addEventListener('DOMContentLoaded', function () {

    document.querySelector("#upload").addEventListener('click', event => {
        event.preventDefault();

       document.getElementById("containers").style.display="none";
       document.getElementById("poll").style.display="none";
       document.getElementById("ads").style.display="none";
       document.getElementById("forum-uc").style.display="none";
       document.getElementById("blog-uc").style.display="none";
       document.getElementById("upload-conteiner").style.display="block";
       document.getElementById("upload-conteiner").style.marginTop="20px";
    }, false);

    document.querySelector("#home").addEventListener('click', event => {
        event.preventDefault();

       document.getElementById("containers").style.display="block";
       document.getElementById("poll").style.display="block";
       document.getElementById("upload-conteiner").style.display="none";
       document.getElementById("forum-uc").style.display="none";
       document.getElementById("blog-uc").style.display="none";
    }, false);

    document.querySelector("#forum").addEventListener('click', event => {
        event.preventDefault();

       document.getElementById("containers").style.display="none";
       document.getElementById("poll").style.display="none";
       document.getElementById("ads").style.display="none";
       document.getElementById("upload-conteiner").style.display="none";
       document.getElementById("forum-uc").style.display="block";
       document.getElementById("blog-uc").style.display="none";
    }, false);

    document.querySelector("#blog").addEventListener('click', event => {
        event.preventDefault();

       document.getElementById("containers").style.display="none";
       document.getElementById("poll").style.display="none";
       document.getElementById("ads").style.display="none";
       document.getElementById("upload-conteiner").style.display="none";
       document.getElementById("forum-uc").style.display="none";
       document.getElementById("blog-uc").style.display="block";
    }, false);

}, false);
