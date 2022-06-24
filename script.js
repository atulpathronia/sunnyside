"use strict";

const nav = document.querySelector(".main-nav");
const button = document.querySelector(".modal");
const openBtn = document.querySelector(".openBtn");
const closeBtn = document.querySelector(".closeBtn");

button.addEventListener("click", function (e) {
  nav.classList.toggle("active");
  if (nav.classList.contains("active")) {
    closeBtn.classList.remove("inactive");
    openBtn.classList.add("inactive");
  } else {
    closeBtn.classList.add("inactive");
    openBtn.classList.remove("inactive");
  }
});

// button.addEventListener("cilck", function (e) {
//   console.log(e);
//   document.querySelector(".main-nav").classList.toggle("active");
// });
