function stickyNavbar() {
    console.log("stickyNavbar function called");

    // Wrap the code in a window load event
    window.addEventListener('load', function () {
        const header = document.querySelector("header");
        const menu = document.querySelector('#menu-icon');
        const navbar = document.querySelector('.navbar');

        window.addEventListener("scroll", function () {
            header.classList.toggle("sticky", window.scrollY > 0);
        });

        // Check if the menu and navbar elements exist before setting onclick
        if (menu && navbar) {
            menu.onclick = () => {
                menu.classList.toggle('bx-x');
                navbar.classList.toggle('open');
            };
        }

        window.onscroll = () => {
            menu.classList.remove('bx-x');
            navbar.classList.remove('open');
        };

        const sr = ScrollReveal({
            distance: '30px',
            duration: 2500,
            reset: true,
        });

        sr.reveal('.home-text', { delay: 200, origin: 'left' });
        sr.reveal('.home-img', { delay: 200, origin: 'right' });
        sr.reveal('.container, .about, .menu, .contact', { delay: 200, origin: 'bottom' });
    });
}

export default stickyNavbar;
