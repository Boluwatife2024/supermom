"use strict";
const dotContainer = document.querySelector(".dots");
const slides = document.querySelectorAll(".slide");
const slider = document.querySelector(".slider");
let curSlide = 0;
const maxSlide = slides.length;

// slides.forEach((s, i) => (s.style.transform = `translateX(${105 * i}%)`));

// slider.style.transform = "scale(0.5)";
// slider.style.overflow = "visible";
const goToSlide = function (slide) {
  slides.forEach((s, i) => {
    const num = i - slide;

    s.style.transform = `translateX(${105 * num}%) scale(${
      num ? "0.9" : "1.1"
    })`;
  });
};
goToSlide(0);
slider.style.transform = `translateX(39rem)`;

const createDots = function () {
  slides.forEach(function (_, i) {
    dotContainer.insertAdjacentHTML(
      "beforeend",
      `<button class="dots__dot" data-slide="${i}"></button>`
    );
  });
};
createDots();

const activateDot = function (slide) {
  document
    .querySelectorAll(".dots__dot")
    .forEach((dot) => dot.classList.remove("dots__dot--active"));
  document
    .querySelector(`.dots__dot[data-slide="${slide}"]`)
    .classList.add("dots__dot--active");
};

const nextSlide = function () {
  if (curSlide === maxSlide - 1) {
    curSlide = 0;
  } else {
    curSlide++;
  }
  goToSlide(curSlide);
};
const prevSlide = function () {
  if (curSlide === 0) {
    curSlide = maxSlide - 1;
  } else {
    curSlide--;
  }
  goToSlide(curSlide);
};
dotContainer.addEventListener("click", function (e) {
  if (e.target.classList.contains("dots__dot")) {
    const { slide } = e.target.dataset;
    goToSlide(slide);
    activateDot(slide);
  }
});

const container = document.querySelector(".container");
const productContainer = document.querySelector(".products--page--container");
const productMenu = document.querySelector(".product");
productMenu.addEventListener("click", function (e) {
  e.preventDefault();
  container.classList.add("hidden");
  productContainer.classList.remove("hidden");
});
const mainName = document.getElementById("navbar--name");
mainName.addEventListener("click", (e) => {
  e.preventDefault();
  container.classList.remove("hidden");
  productContainer.classList.add("hidden");
});
const marketPlace = document.querySelector(".marketplace");
marketPlace.addEventListener("click", function () {
  container.classList.add("hidden");
  productContainer.classList.remove("hidden");
});
