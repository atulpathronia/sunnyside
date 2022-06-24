"use strict";

const button = document.querySelector(".modal");
const nav = document.querySelector(".main-nav");
console.log(button);
console.log(nav);

button.addEventListener("click", function (e) {
  console.log(e);
  nav.classList.toggle("active");
});

// button.addEventListener("cilck", function (e) {
//   console.log(e);
//   document.querySelector(".main-nav").classList.toggle("active");
// });
