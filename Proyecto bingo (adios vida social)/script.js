const display = document.getElementById("number-display");
const button = document.getElementById("generate-btn");

// Función para generar un número aleatorio entre 1 y 89
function getRandomNumber() {
    return Math.floor(Math.random() * 89) + 1; // Genera un número entre 1 y 89
}

// Función para mostrar el número con animación
function showRandomNumber() {
    const randomNumber = getRandomNumber(); // Generamos el número aleatorio

    display.textContent = randomNumber; // Establece el número en el contenedor

    // Reinicia la animación (para que se repita cada vez que se hace clic)
    display.style.animation = 'none'; 
    display.offsetHeight; // Triggers reflow para reiniciar la animación
    display.style.animation = 'slide 1s ease-out forwards';
}

// Escuchar el clic del botón para generar un número aleatorio
button.addEventListener('click', showRandomNumber);
