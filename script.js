"use strict";

const button = document.querySelector(".modal");

button.addEventListener("cilck", function () {
  document.querySelector(".main-nav").classList.toggle("active");
});
