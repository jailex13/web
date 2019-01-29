/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console': 0*/


var selButton = document.querySelector(".verstuur");
var comment = document.querySelector('.ding');
var comments = document.querySelector('.comment');




selButton.addEventListener("click", function () {
    comments.classList.add("comments");
    comment.classList.add("test");
    console.log("HEEEELLLOO");
});



