const header = document.querySelector(".header");
const main = document.querySelector(".main");

const headerHeight = header.getBoundingClientRect().height;
const mainHeight = main.getBoundingClientRect().height;

main.style.height = mainHeight - headerHeight + "px";
