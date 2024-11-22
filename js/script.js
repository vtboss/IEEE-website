$(document).ready(function(){
  // Smooth Scrolling for Anchor Links
  $('a[href^="#"]').on('click', function(e) {
    e.preventDefault();
    var target = $(this.getAttribute('href'));
    if (target.length) {
      $('html, body').stop().animate({
        scrollTop: target.offset().top
      }, 1000);
    }
  });

  // Sticky Navbar
  $(window).scroll(function(){
    if($(this).scrollTop() > 20){
      $('.navbar').addClass("sticky");
    } else {
      $('.navbar').removeClass("sticky");
    }
  });

  // Hero Text Animations
  $('.home .text-1').css({
    'opacity': '0',
    'animation': 'fadeInDown 1s forwards',
    'animation-delay': '0.3s'
  });

  $('.home .text-2').css({
    'opacity': '0',
    'animation': 'fadeInUp 1s forwards',
    'animation-delay': '0.6s'
  });

  $('.home .text-3').css({
    'opacity': '0', 
    'animation': 'fadeInUp 1s forwards',
    'animation-delay': '0.9s'
  });

  $('.home .home-content a').css({
    'opacity': '0',
    'animation': 'fadeIn 1s forwards',
    'animation-delay': '1.2s'
  });

  // Responsive Menu Toggle
  $('.menu-btn').click(function(){
    $('.navbar .menu').toggleClass("active");
    $('.menu-btn i').toggleClass("active");
  });

  // Fade in Sections on Scroll
  $(window).scroll(function() {
    const scrollPosition = $(window).scrollTop();
    const windowHeight = $(window).height();

    $('.about, .events, .execoms, .contact').each(function() {
      const $section = $(this);
      const sectionTop = $section.offset().top;
      const sectionHeight = $section.outerHeight();

      if (scrollPosition >= sectionTop - windowHeight / 2 && 
          scrollPosition < sectionTop + sectionHeight) {
        $section.addClass('fade-in');
      }
    });
  });

  // Event Card Hover Effect
  $('.events .card').hover(
    function() {
      $(this).css({
        'transform': 'scale(1.02)',
        'box-shadow': '0 10px 20px rgba(0,0,0,0.2)'
      });
    },
    function() {
      $(this).css({
        'transform': 'scale(1)',
        'box-shadow': 'none'
      });
    }
  );
});