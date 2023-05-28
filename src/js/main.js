const header = document.querySelector(".header");
// const footer = document.querySelector(".footer");
const main = document.querySelector(".main");
// const mainForm = document.querySelector(".main-form");

const headerHeight = header.getBoundingClientRect().height;
// const footerHeight = footer.getBoundingClientRect().height;
const mainHeight = main.getBoundingClientRect().height;
// const mainFormHeight = mainForm.getBoundingClientRect().height;

main.style.height = mainHeight - headerHeight + "px";
// mainForm.style.height = mainHeight - headerHeight - footerHeight + "px";

// console.log(mainHeight);
// console.log(headerHeight);

// jQuery(function () {
//   "use strict";
//   // open mobil menu and hamburger btn
//   $(".nav-toggle-btn").on("click", function (e) {
//     $(".nav-toggle-btn, .nav-backdrop-container").toggleClass("active");
//   });

//   $(".nav-backdrop-container").on("click", function (e) {
//     $(".nav-toggle-btn, .nav-backdrop-container").removeClass("active");
//   });

// });
