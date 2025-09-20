

document.addEventListener('DOMContentLoaded', function() {
    console.log('La página se ha cargado completamente');
    
    initScrollAnimation();
   
});



/* Animación suave al hacer scroll a las secciones*/

function initScrollAnimation() {
    // Obtener todos los enlaces internos del menú
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    
    // Añadir evento click a cada enlace
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Prevenir comportamiento predeterminado del enlace
            e.preventDefault();
            
            // Obtener el objetivo al que se quiere desplazar
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                // Realizar scroll suave hacia la sección
                window.scrollTo({
                    top: targetSection.offsetTop - 70, // 70px de offset para el header fijo
                    behavior: 'smooth'
                });
            }
        });
    });
}