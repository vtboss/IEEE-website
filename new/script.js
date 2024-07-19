document.addEventListener('DOMContentLoaded', function() {
    const aboutSection = document.getElementById('about');
    const sectionPos = aboutSection.getBoundingClientRect().top;
    const screenPos = window.innerHeight / 1.3;
    
    function fadeIn() {
      if (sectionPos < screenPos) {
        aboutSection.classList.add('fade-in');
        window.removeEventListener('scroll', fadeIn);
      }
    }
    
    window.addEventListener('scroll', fadeIn);
  });
  