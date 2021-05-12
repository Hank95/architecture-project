"use strict";

const burger = document.querySelector("#burger-menu");
const arrow = document.querySelector("#arrow");
const menu = document.querySelector("#menu");

const openMenu = function () {
  menu.classList.remove("hidden");
  burger.classList.add("hidden");
};

const closeMenu = function () {
  menu.classList.add("hidden");
  burger.classList.remove("hidden");
};

burger.addEventListener("click", openMenu);

arrow.addEventListener("click", closeMenu);
