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

document.addEventListener('DOMContentLoaded', function() {
  // Function to start counting when element is in viewport
  function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  
  // Counter animation function
  function animateCounter(element) {
    const target = parseInt(element.getAttribute('data-count'));
    let count = 0;
    const duration = 2000; // 2 seconds for the animation
    const step = target / (duration / 30); // Update every 30ms
    
    const counter = setInterval(() => {
      count += step;
      if (count >= target) {
        count = target;
        clearInterval(counter);
      }
      element.querySelector('.stat-number').textContent = Math.floor(count) + '+';
    }, 30);
  }
  
  // Start animation when scrolled into view
  function checkCounters() {
    const statsSection = document.querySelector('.about-stats-container');
    if (isElementInViewport(statsSection) && !statsSection.classList.contains('counted')) {
      statsSection.classList.add('counted');
      document.querySelectorAll('.stat-item').forEach(item => {
        animateCounter(item);
      });
    }
  }
  
  // Check on scroll
  window.addEventListener('scroll', checkCounters);
  
  // Check on page load
  checkCounters();
});

// Events Section Animation
$(document).ready(function() {
  // Check if element is in viewport
  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  // Animate elements when they come into view
  function animateOnScroll() {
    $('.event-card').each(function() {
      if (isInViewport(this) && !$(this).hasClass('animated')) {
        $(this).addClass('animated');
        $(this).css({
          'opacity': '1',
          'transform': 'translateY(0)'
        });
      }
    });
  }

  // Reset animation state for initial load
  $('.event-card').css({
    'opacity': '0',
    'transform': 'translateY(30px)',
    'animation': 'none'
  });

  // Run animation check on scroll
  $(window).on('scroll', animateOnScroll);
  
  // Run once on page load
  animateOnScroll();

  // Event card hover effect
  $('.event-card').hover(
    function() {
      $(this).find('.event-image img').css({
        'transform': 'scale(1.1)'
      });
      $(this).find('.event-title::after').css({
        'width': '100%'
      });
    },
    function() {
      $(this).find('.event-image img').css({
        'transform': 'scale(1)'
      });
      $(this).find('.event-title::after').css({
        'width': '50px'
      });
    }
  );
});
// Execoms Section Animations
$(document).ready(function() {
  // Check if element is in viewport
  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  // Animate elements when they come into view
  function animateOnScroll() {
    const execomsSection = document.querySelector('.execoms');
    
    if (isInViewport(execomsSection) && !execomsSection.classList.contains('animated')) {
      execomsSection.classList.add('animated');
      
      // Start animation sequence
      $('.counselor').css({
        'opacity': '1',
        'transform': 'translateY(0)'
      });
      
      setTimeout(() => {
        $('.chair').css({
          'opacity': '1',
          'transform': 'translateY(0)'
        });
      }, 300);
      
      setTimeout(() => {
        $('.co-chair').css({
          'opacity': '1',
          'transform': 'translateY(0)'
        });
      }, 600);
      
      setTimeout(() => {
        $('.view-all-execoms').css({
          'opacity': '1',
          'transform': 'translateY(0)'
        });
      }, 900);
    }
  }

  // Reset animation state for initial load
  $('.counselor, .chair, .co-chair, .view-all-execoms').css({
    'opacity': '0',
    'transform': 'translateY(30px)',
    'transition': 'all 0.6s ease-out'
  });

  // Run animation check on scroll
  $(window).on('scroll', animateOnScroll);
  
  // Run once on page load
  setTimeout(animateOnScroll, 300);

  // Interactive hover effects
  $('.member').hover(
    function() {
      $(this).find('.img-overlay').css('opacity', '1');
      $(this).css('transform', 'translateY(-10px)');
    },
    function() {
      $(this).find('.img-overlay').css('opacity', '0');
      $(this).css('transform', 'translateY(0)');
    }
  );

  // Social icons hover effect
  $('.social-icon').hover(
    function() {
      $(this).css({
        'transform': 'translateY(-3px) scale(1.1)',
        'box-shadow': '0 5px 15px rgba(0, 0, 0, 0.15)'
      });
    },
    function() {
      $(this).css({
        'transform': 'translateY(0) scale(1)',
        'box-shadow': 'none'
      });
    }
  );

  // Ripple effect on view all button
  $('.view-all-btn').on('mousedown', function(e) {
    const x = e.pageX - $(this).offset().left;
    const y = e.pageY - $(this).offset().top;
    
    const ripple = $('<span class="ripple"></span>');
    ripple.css({
      left: x,
      top: y
    });
    
    $(this).append(ripple);
    
    setTimeout(() => {
      ripple.remove();
    }, 600);
  });
});