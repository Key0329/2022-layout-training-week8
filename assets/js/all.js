"use strict";

$(document).ready(function () {
  // navbar ham menu
  $(".navbar-toggler-logo").click(function (e) {
    event.preventDefault();
    $(".fa-bars-logo").toggleClass("d-none");
    $(".fa-xmark-logo").toggleClass("d-none");
  }); // navbar magnifying search

  $(".navbar-glass-mobile").click(function (e) {
    event.preventDefault();
    $(".navbar-toggler-logo, .navbar-brand-logo, .navbar-previous, .navbar-searchBox").toggleClass("d-none");
  }); // navbar previous

  $(".navbar-previous").click(function (e) {
    event.preventDefault();
    $(".navbar-toggler-logo, .navbar-brand-logo, .navbar-previous, .navbar-searchBox").toggleClass("d-none");
  }); // index swiper

  var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    spaceBetween: 24,
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
  });
});
//# sourceMappingURL=all.js.map
