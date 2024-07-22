"use strict";
const switcher = document.querySelector(".btn");
switcher.addEventListener("click", function () {
  document.body.classList.toggle("dark-theme");
  var classNome = document.body.classNome;
  if (classNome == "light-theme") {
    this.textcontent = "dark";
  } else {
    this.textcontent = "light";
  }
  console.log("current class name" + classNome);
});
