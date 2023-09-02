function activarPanel(){
    const contenedor = document.querySelector(".cont-colores");
    const boton = document.querySelector(".open-panel");


    contenedor.classList.toggle("active");
    boton.classList.toggle("active");

}

var link = document.getElementById("Filecss")

function amarillo(){
    link.href="css/StylePortafolioRojo.css"
}

function morado(){
    link.href="css/StylePortafolioMoradoindex.css"
}



// Selecciona el elemento <hr> por su ID
var miHr = document.getElementById("miHr");

// Cambia el grosor (ancho) del <hr>
miHr.style.borderWidth = "4px"; // Cambia el grosor a 4 píxeles

miHr.style.borderColor = "#000000";

var miHr = document.getElementById("miHy");

// Cambia el grosor (ancho) del <hr>
miHr.style.borderWidth = "4px"; // Cambia el grosor a 4 píxeles

miHr.style.borderColor = "#000000";

var miHr = document.getElementById("miHu");

// Cambia el grosor (ancho) del <hr>
miHr.style.borderWidth = "4px"; // Cambia el grosor a 4 píxeles

miHr.style.borderColor = "#000000";

var miHr = document.getElementById("miHt");

// Cambia el grosor (ancho) del <hr>
miHr.style.borderWidth = "4px"; // Cambia el grosor a 4 píxeles

miHr.style.borderColor = "#000000";

var imagen = document.getElementById("imgs");

// Agrega un evento de clic a la imagen
imagen.addEventListener("click", function() {
  alert("¡En un momento te llegaran mis proyectos!"); // Puedes cambiar esto por la acción que desees
});