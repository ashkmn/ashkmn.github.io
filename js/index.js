$(function () {
  // Owl Carousel
  var owl = $(".owl-carousel");
  owl.owlCarousel({
    items: 4,
    margin: 10,
    loop: true,
    responsive: {
      0: {
        items: 2,
      },
      768: {
        items: 2,
      },
      1180: {
        items: 4,
      },
    },
    /*  nav: true */
  });
});
// Phone toggle
(function ($) {
  // Begin jQuery
  $(function () {
    // DOM ready
    // If a link has a dropdown, add sub menu toggle.
    $("nav ul li a:not(:only-child)").click(function (e) {
      $(this).siblings(".nav-dropdown").toggle();
      // Close one dropdown when selecting another
      $(".nav-dropdown").not($(this).siblings()).hide();
      e.stopPropagation();
    });
    // Clicking away from dropdown will remove the dropdown class
    $("html").click(function () {
      $(".nav-dropdown").hide();
    });
    // Toggle open and close nav styles on click
    $("#nav-toggle").click(function () {
      $("nav ul").slideToggle();
    });
    // Hamburger to X toggle
    $("#nav-toggle").on("click", function () {
      this.classList.toggle("active");
    });
  }); // end DOM ready
})(jQuery);


function goBack() {
  window.history.back();
}

$('.goback').click(function(){
  window.history.back();
})