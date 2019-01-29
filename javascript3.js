/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console': 0*/

var filter = document.querySelector(".filter");
var filtermenu = document.querySelector(".filtermenu");

filter.addEventListener('click', function () {
    filtermenu.classList.toggle("filteranimatie");
    console.log("test");
});
