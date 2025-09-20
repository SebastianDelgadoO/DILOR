
// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    // Configuración del carrusel
    const config = {
        interval: 4000,        // Tiempo entre diapositivas en milisegundos 
        transition: 1000,      // Duración de la transición en milisegundos 
        autoplay: true         // Iniciar automáticamente
    };
    
    // Obtener los elementos del DOM
    const slides = document.querySelectorAll('.slide');
    const indicators = document.querySelectorAll('.indicator');
   
    
    // Variables de control
    let currentSlide = 0;      // Índice de la diapositiva actual
    let slideInterval;         // Referencia al intervalo automático
    let isPlaying = config.autoplay;  // Estado actual (reproduciendo o pausado)
    
    //Inicializa el carrusel y configura los eventos
    function initCarousel() {

        // Mostrar la primera diapositiva
        updateSlides();
        
        // Iniciar la reproducción automática si está configurada
        if (config.autoplay) {
            startAutoplay();
        }

    }
    
    //Actualiza las clases de las diapositivas e indicadores para mostrar la diapositiva actual
    function updateSlides() {
        // Quitar la clase 'active' de todas las diapositivas e indicadores
        slides.forEach(slide => slide.classList.remove('active'));
        indicators.forEach(indicator => indicator.classList.remove('active'));
        
        // Añadir la clase 'active' a la diapositiva e indicador actuales
        slides[currentSlide].classList.add('active');
        indicators[currentSlide].classList.add('active');
    }
    
    //Avanza a la siguiente diapositiva
    function nextSlide() {
        // Incrementar el índice, volviendo a 0 si llegamos al final
        currentSlide = (currentSlide + 1) % slides.length;
        updateSlides();
    }
    
   //Inicia la reproducción automática del carrusel
    function startAutoplay() {
        // Limpiar cualquier intervalo existente
        if (slideInterval) {
            clearInterval(slideInterval);
        }
        
      
        // Crear un nuevo intervalo para avanzar automáticamente
        slideInterval = setInterval(nextSlide, config.interval);
        
        
    }
    
    // Inicializar el carrusel
    initCarousel();
    

});