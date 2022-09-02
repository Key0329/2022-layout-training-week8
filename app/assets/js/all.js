$(document).ready(function () {

  // navbar ham menu
  $(".navbar-toggler-logo").click(function (e) {
    event.preventDefault();
    $(".fa-bars-logo").toggleClass("d-none");
    $(".fa-xmark-logo").toggleClass("d-none");
  })

  // navbar magnifying search
  $(".navbar-glass-mobile").click(function (e) {
    event.preventDefault();
    $(".navbar-toggler-logo, .navbar-brand-logo, .navbar-previous, .navbar-searchBox").toggleClass("d-none");
  })
  // navbar previous
  $(".navbar-previous").click(function (e) {
    event.preventDefault();
    $(".navbar-toggler-logo, .navbar-brand-logo, .navbar-previous, .navbar-searchBox").toggleClass("d-none");
  })

});