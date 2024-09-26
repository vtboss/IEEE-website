document.addEventListener('DOMContentLoaded', () => {
    // Redirect to Google Form on register button click
    const registerButtons = document.querySelectorAll('.register-btn');
    
    registerButtons.forEach(button => {
        button.addEventListener('click', () => {
            window.location.href = 'https://forms.gle/your-google-form-url'; // Replace with your Google Form URL
        });
    });

    // Expand past event to show images on click
    const pastEventCards = document.querySelectorAll('.past-event-card');
    
    pastEventCards.forEach(card => {
        card.addEventListener('click', () => {
            const imagesContainer = card.querySelector('.images-container');
            if (imagesContainer.classList.contains('show')) {
                imagesContainer.classList.remove('show');
                card.style.maxHeight = '200px';
                card.style.paddingBottom = '1rem';
            } else {
                imagesContainer.classList.add('show');
                card.style.maxHeight = '800px'; // Adjust height based on content
                card.style.paddingBottom = '2rem';
            }
        });
    });

    // Show/hide footer on scroll
    let lastScrollTop = 0;
    const footer = document.querySelector('footer');

    window.addEventListener('scroll', () => {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (scrollTop > lastScrollTop) {
            footer.style.transform = 'translateY(100%)';
        } else {
            footer.style.transform = 'translateY(0)';
        }
        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    });

    // Fullscreen image on click
    const images = document.querySelectorAll('.images-container img');
    
    images.forEach(image => {
        image.addEventListener('click', () => {
            if (!document.fullscreenElement) {
                image.requestFullscreen().catch(err => {
                    alert(`Error attempting to enable fullscreen mode: ${err.message} (${err.name})`);
                });
            } else {
                document.exitFullscreen();
            }
        });
    });
});
