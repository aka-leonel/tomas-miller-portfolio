// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', () => {

    // Referencias a elementos del DOM
    const menuBtn = document.getElementById('menuBtn');
    const navLinks = document.getElementById('navLinks');
    const themeToggle = document.getElementById('themeToggle');
    const themeIcon = document.getElementById('themeIcon');
    const htmlElement = document.documentElement;

    /* ==========================================================================
       1. MANEJO DEL MENÚ RESPONSIVO (HAMBURGUESA)
       ========================================================================== */
    menuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        const icon = menuBtn.querySelector('i');
        
        // Alternar ícono de barras a 'X' al abrir/cerrar
        if (navLinks.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-xmark');
        } else {
            icon.classList.remove('fa-xmark');
            icon.classList.add('fa-bars');
        }
    });

    // Cerrar el menú desplegable al hacer clic en cualquier enlace
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            const icon = menuBtn.querySelector('i');
            icon.classList.remove('fa-xmark');
            icon.classList.add('fa-bars');
        });
    });

    /* ==========================================================================
       2. MANEJO DEL TEMA (MODO OSCURO / MODO CLARO)
       ========================================================================== */
    themeToggle.addEventListener('click', () => {
        if (htmlElement.classList.contains('dark')) {
            // Cambiar a Tema Claro
            htmlElement.classList.remove('dark');
            htmlElement.classList.add('light');
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
        } else {
            // Cambiar a Tema Oscuro
            htmlElement.classList.remove('light');
            htmlElement.classList.add('dark');
            themeIcon.classList.remove('fa-sun');
            themeIcon.classList.add('fa-moon');
        }
    });

});