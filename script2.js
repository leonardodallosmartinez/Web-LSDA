console.log("Entrando a archivo script.js...");

// Lista de imágenes para alternar
const images = ["media/naturaleza_1.jpg", "media/naturaleza_2.png", "media/naturaleza_3.jpg"];
let currentIndex = 0;

// Referencias a la imagen centrada y el fondo
const centerImage = document.getElementById("center-image");
const background = document.querySelector(".background");
const centerBox = document.querySelector(".center-box");

// Tamaño fijo para las imágenes añadidas (300px en este caso, como la imagen inicial)
const imageSize = 300;  // 300px de ancho y altura

// Función para agregar una nueva imagen
function addNewImage() {
    console.log("Añadiendo nueva imagen...");

    // Incrementar el índice de la imagen actual
    currentIndex = (currentIndex + 1) % images.length;

    // Crear una nueva imagen
    const newImage = document.createElement("img");
    newImage.src = images[currentIndex];
    newImage.classList.add("new-image");

    // Establecer el tamaño de la imagen a 300px x 300px
    newImage.style.width = `${imageSize}px`;
    newImage.style.height = `${imageSize}px`;

    // Mover la nueva imagen a una posición aleatoria dentro de los límites de la pantalla
    moveToRandomPosition(newImage);

    // Agregar la nueva imagen al body
    centerBox.appendChild(newImage);
}

// Función para mover una imagen a una posición aleatoria dentro de los límites de la pantalla
function moveToRandomPosition(image) {
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    // Asegurarnos de que la imagen no se salga de la pantalla
    const maxX = screenWidth - imageSize;
    const maxY = screenHeight - imageSize;

    // Generar posiciones aleatorias dentro de los límites de la pantalla
    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    // Aplicar las posiciones aleatorias a la nueva imagen
    image.style.position = "absolute";  // Asegura que la imagen se posicione absolutamente
    image.style.left = randomX + "px";
    image.style.top = randomY + "px";
}

// Mover el cuadro a una posición aleatoria cuando la página cargue (no se necesita cambios en este caso)
moveToRandomPosition(centerImage);

// Eventos para agregar una nueva imagen y moverla a una posición aleatoria al hacer clic en el fondo o en la imagen centrada
centerImage.addEventListener("click", addNewImage);
background.addEventListener("click", addNewImage);
