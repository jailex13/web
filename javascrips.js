/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console': 0*/

console.log("ELLO");




var downloadicoon = document.querySelector('.download');
var downloadbalk = document.querySelector("body ul div");

downloadicoon.addEventListener('click', function () {

    var laadbalk = document.querySelector("body ul .laadbalk");

    downloadbalk.classList.toggle("open");
    laadbalk.classList.toggle("openDelay");
    console.log("HEEEELLLOO");
});




//
//var selButton = document.querySelector(".verstuur");
//var comment = document.querySelector('.ding');
//var comments = document.querySelector('.comment');
//
//
//
//
//selButton.addEventListener('click', function () {
//    comments.classList.add("comments");
//    comment.classList.add("test");
//    console.log("HEEEELLLOO");
//});
//





//var reageren = document.querySelector("body > article:second-child");
//
//var reactie = document.querySelector(".comments");
//
//reageren.addEventListener("click", function () {
//
//    reactie.classList.toggle("comments");
//
//    console.log("nvrorjg");
//});

