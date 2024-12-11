$(document).ready(function() {
  // Smooth scrolling for links
  $("a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function() {
        window.location.hash = hash;
      });
    }
  });

  // Add active class to nav links on scroll
  $(window).scroll(function() {
    var scrollPos = $(document).scrollTop();
    $('nav ul li a').each(function() {
      var sectionOffset = $(this.hash).offset().top - 50;
      if (sectionOffset <= scrollPos) {
        $('nav ul li a').removeClass('active');
        $(this).addClass('active');
      }
    });
  });
});
