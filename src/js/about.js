
// Selecciona todas las tarjetas
const cards = document.querySelectorAll('.cardh');

// eventos a cada tarjeta
cards.forEach(card => {
    // Encuentra todos los paths dentro del svg en la tarjeta actual
    const paths = card.querySelectorAll('svg .icon');

    card.addEventListener('mouseover', () => {
        // Cambia el color de todos los paths a blanco en hover
        paths.forEach(path => {
            path.setAttribute('fill', '#F6F6F6'); 
        });
    });

    card.addEventListener('mouseleave', () => {
        // Restaura el color de todos los paths a rojo cuando sale el hover
        paths.forEach(path => {
            path.setAttribute('fill', '#D04E54');
        });
    });
});
