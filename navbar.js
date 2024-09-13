document.addEventListener('DOMContentLoaded', () => {
    const dropdownToggles = document.querySelectorAll('.dropdown-toggle');

    dropdownToggles.forEach(toggle => {
        toggle.addEventListener('click', (e) => {
            const parentLi = toggle.closest('.nav-dropdown');
            const menu = parentLi.querySelector('.dropdown-menu');

            // Close any open dropdowns
            document.querySelectorAll('.nav-dropdown').forEach(item => {
                if (item !== parentLi) {
                    item.classList.remove('show');
                }
            });

            // Toggle the clicked dropdown menu
            parentLi.classList.toggle('show');
        });
    });

    // Close dropdown if clicked outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.nav-dropdown')) {
            document.querySelectorAll('.nav-dropdown').forEach(item => {
                item.classList.remove('show');
            });
        }
    });

    // Add 'active' class to the current page link
    const currentPage = window.location.pathname.split('/').pop();
    document.querySelectorAll('.navbar .nav-dropdown .main-link').forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });

    // Optimize smooth scrolling and animation handling
    let isScrolling;
    window.addEventListener('scroll', () => {
        document.body.style.animationPlayState = 'paused';  // Pause animations

        // Debounce scroll event
        clearTimeout(isScrolling);
        isScrolling = setTimeout(() => {
            document.body.style.animationPlayState = 'running';  // Resume animations
        }, 200);  // Adjust delay as needed
    });

    // Smooth scroll handling for navigation links
    document.querySelectorAll('.main-link').forEach(link => {
        link.addEventListener('click', function(event) {
            // Pause animations during scroll
            document.body.style.animationPlayState = 'paused';
            
            // Resume animations after scrolling
            setTimeout(() => {
                document.body.style.animationPlayState = 'running';
            }, 1000); // Adjust timing based on scroll speed
        });
    });

    // Change header background on scroll
    window.addEventListener('scroll', () => {
        const header = document.querySelector('header');
        if (window.scrollY > 50) {
            header.classList.add('header-scrolled');
        } else {
            header.classList.remove('header-scrolled');
        }
    });
});
