document.addEventListener('DOMContentLoaded', function() {
    const serviciosLink = document.querySelector('nav a[href="#servicios"]');
    if (serviciosLink) {
        serviciosLink.addEventListener('click', function(event) {
            event.preventDefault(); // Evita el comportamiento por defecto del enlace

            const serviciosSection = document.getElementById('servicios');
            if (serviciosSection) {
                serviciosSection.scrollIntoView({
                    behavior: 'smooth' // Desplazamiento suave
                });
            }
        });
    }
});

