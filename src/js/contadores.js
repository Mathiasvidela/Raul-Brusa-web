

function counterStart(){
    const valueDisplays = document.querySelectorAll('.num');
    let interval = 1000;

    valueDisplays.forEach((valueDisplay) => {
        let startValue = 0;
        let endValue = parseInt(valueDisplay.getAttribute("data-val"));
        let duration = Math.floor(interval / endValue);

        let counter = setInterval(function() {
            startValue += 1;
            valueDisplay.innerHTML = startValue;

            if (startValue == endValue) {
                clearInterval(counter);
            }
        }, duration);

    });
}

const contadorNums = document.getElementById('contadorNums');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Inicia el contador cuando el elemento es visible
            counterStart();
            // Deja de observar una vez que se ha iniciado el contador
            observer.unobserve(contadorNums);
        }
    });
}, {
    threshold: 0.5 // Ajusta este valor según necesites, 0.5 significa que el 50% del elemento debe ser visible
});

// Comienza a observar el contenedor
observer.observe(contadorNums);