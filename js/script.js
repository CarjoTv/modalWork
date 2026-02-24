const modalContactos = document.querySelector ("#modalContactos")

function capturarNombre








//Script para escuchar al click del boton y mostrar el modal
// Toma el valor modal
const modal = document.getElementById("myModal");

// Toma el boton que abre el modal
const btn = document.getElementById("myBtn");

// Toma el elemento <Etiqueta cualquiera> que cierra el modal
const  span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}