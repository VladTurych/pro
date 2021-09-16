$(document).ready(function () {
   $('.hamburger').click(function () {
      $(this).toggleClass('active');
      $('.nav-content__links').toggleClass('opened');
   });
   $('.owl-carousel').owlCarousel({
      items: 1,
      navigation: true,
      loop: true,
      autoplay: true,
      autoplayHoverPause: true,
      autoplayTimeout: 3000,
      dots: false,
      nav: true,
      lazyLoad: true,
      smartSpeed: 1000,
      margin: 10,
      navText: [
         "<i class='fas fa-chevron-left'></i>",
         "<i class='fas fa-chevron-right'></i>"
       ],
   });
  
});