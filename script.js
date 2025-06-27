document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.menu');

    if (toggleButton && menu) {
        toggleButton.addEventListener('click', () => {
            menu.classList.toggle('active');
        });

        const menuLinks = menu.querySelectorAll('a');
        menuLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (menu.classList.contains('active')) {
                    menu.classList.remove('active');
                }
            });
        });
    } else {
        console.error("Elementos 'menu-toggle' ou 'menu' não encontrados. Verifique seus seletores no HTML.");
    }

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault(); 

            const targetId = this.getAttribute('href'); 
            const targetElement = document.querySelector(targetId); 

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop, 
                    behavior: 'smooth' 
                });
            }
        });
    });

    if (window.location.hash) {
        const hash = window.location.hash; 
        const targetElement = document.querySelector(hash);

        if (targetElement) {
            setTimeout(() => {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
            }, 100); 
        }
    }
});