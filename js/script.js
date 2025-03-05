document.addEventListener('DOMContentLoaded', () => {
  const menuBtn = document.querySelector('.menu-btn');
  const menu = document.querySelector('.menu');
  let touchStart = null;

  const toggleMenu = (show) => {
    menu.classList.toggle('active', show);
    menuBtn.classList.toggle('active', show);
    document.body.style.overflow = show ? 'hidden' : 'auto';
  };

  menuBtn.addEventListener('click', () => toggleMenu(!menu.classList.contains('active')));

  document.addEventListener('click', (e) => {
    if (!menu.contains(e.target) && !menuBtn.contains(e.target) && menu.classList.contains('active')) {
      toggleMenu(false);
    }
  });

  menu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => toggleMenu(false));
  });

  document.addEventListener('touchstart', (e) => {
    touchStart = e.touches[0].clientX;
  });

  document.addEventListener('touchmove', (e) => {
    if (!touchStart) return;
    const touchEnd = e.touches[0].clientX;
    const diff = touchStart - touchEnd;
    
    if (diff > 50 && menu.classList.contains('active')) {
      toggleMenu(false);
    }
    touchStart = null;
  });

  const hash = window.location.hash;
  if (hash) {
    setTimeout(() => {
      document.querySelector(hash)?.scrollIntoView({ 
        behavior: 'smooth',
        block: 'center'
      });
    }, 100);
  }
});

$(document).ready(function(){
  $('a[href^="#"]').on('click', function(e) {
    e.preventDefault();
    const target = $(this.getAttribute('href'));
    if (target.length) {
      const headerOffset = $('.navbar').outerHeight();
      const elementPosition = target.offset().top;
      const offsetPosition = elementPosition - headerOffset;
      
      $('html, body').animate({
        scrollTop: offsetPosition
      }, 1000);
    }
  });

  window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 20) {
        navbar.classList.add('sticky');
    } else {
        navbar.classList.remove('sticky');
    }
  });

  // Hero text animations
  $(document).ready(function() {
    // Hero section text and button animations
    $('.hero-title').css({
      'opacity': '0',
      'transform': 'translateY(50px)',
      'animation': 'fadeInUp 1s forwards',
      'animation-delay': '0.3s'
    });
  
    $('.hero-subtitle').css({
      'opacity': '0',
      'transform': 'translateY(50px)',
      'animation': 'fadeInUp 1s forwards',
      'animation-delay': '0.6s'
    });
  
    $('.hero-cta').css({
      'opacity': '0',
      'transform': 'translateY(50px)',
      'animation': 'fadeInUp 1s forwards',
      'animation-delay': '0.9s'
    });
  
    $('.banner-logo').css({
      'opacity': '0',
      'transform': 'scale(0.8)',
      'animation': 'fadeIn 1s forwards',
      'animation-delay': '1.2s'
    });
  
    $('.affiliated-logos').css({
      'opacity': '0',
      'transform': 'scale(0.8)',
      'animation': 'fadeIn 1s forwards',
      'animation-delay': '1.5s'
    });
  });

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