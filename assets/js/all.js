"use strict";

$(document).ready(function () {
  // ------------------ index ------------------
  // navbar ham menu
  $(".navbar-toggler-logo").click(function (e) {
    event.preventDefault();
    $(".fa-bars-logo, .fa-xmark-logo").toggleClass("d-none");
  }); // navbar magnifying search

  $(".navbar-glass-mobile").click(function (e) {
    event.preventDefault();
    $(".navbar-toggler-logo, .navbar-brand-logo, .navbar-previous, .navbar-searchBox").toggleClass("d-none");
  }); // navbar previous

  $(".navbar-previous").click(function (e) {
    event.preventDefault();
    $(".navbar-toggler-logo, .navbar-brand-logo, .navbar-previous, .navbar-searchBox").toggleClass("d-none");
  }); // index swiper

  var mySwiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    spaceBetween: 24,
    initialSlide: 1,
    // loop: true,
    centeredSlides: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    breakpoints: {
      1200: {
        slidesPerView: 3,
        spaceBetween: 24
      }
    }
  }); // ------------------ arts ------------------
  // collapse arrow

  $(".art-collapse-btn").click(function (e) {
    event.preventDefault();
    $(this).find(".fa-angle-up, .fa-angle-down").toggleClass("d-none");
  }); // ------------------ arts intro ------------------
  // arts intro swiper

  var artIntroSwiper = new Swiper(".artIntroSwiper", {
    slidesPerView: 2,
    spaceBetween: 24,
    loop: true,
    // centeredSlides: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    breakpoints: {
      1200: {
        slidesPerView: 4,
        spaceBetween: 24
      }
    }
  }); // ------------------ ranking ------------------

  $(".art-ranking-triangle").click(function (e) {
    event.preventDefault();
    $(this).toggleClass("show");
  });
});
//# sourceMappingURL=all.js.map
