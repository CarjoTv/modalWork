const botonEnviarContactos = document.querySelector("#enviar");
const nombre = document.querySelector("#inputNombre");
const email = document.querySelector("#inputEmail");
const telefono = document.querySelector("#inputTelefono");
const lista = document.querySelector("#lista");
const modal = document.getElementById("modalFormulario");
const btnAbrirModal = document.getElementById("myBtn");
const btnCerrarModal = document.getElementById("cerrarFormulario");

// Función para agregar contacto
botonEnviarContactos.addEventListener("click", function () {
  if (nombre.value === "") return alert("Por favor escribe un nombre");

  const idUnico = `contacto-${Date.now()}`; //asigna un ID único basado en la marca de tiempo para cada contacto agregado

  // Estilo de tarjeta y funcionalidad de expandir detalles al hacer clic usando 'onclick'.
  lista.innerHTML += `
    <div onclick="mostrarDetalles('${idUnico}')" class="bg-[#F3F4F6] p-5 rounded-xl cursor-pointer hover:bg-gray-200 transition-colors duration-200"> 
        <p class="text-gray-800 font-medium">${nombre.value}</p>
        <div id="${idUnico}" class="hidden mt-2 pt-2 border-t border-gray-300 text-sm text-gray-600">
            <p><strong>Email:</strong> ${email.value}</p>
            <p><strong>Tel:</strong> ${telefono.value}</p>
        </div>
    </div>
    `; 

  // Limpiar y cerrar
  nombre.value = "";
  email.value = "";
  telefono.value = "";
  modal.classList.add("hidden");
  modal.style.display = "none"; // Asegurar cierre
});

// Función para expandir/colapsar
/**
 * Alterna la visibilidad de los detalles de un contacto.
 * Utiliza .toggle para añadir o quitar la clase hidden según el estado actual.
 */
function mostrarDetalles(id) {
    const elemento = document.getElementById(id); // Obtener el elemento por su ID único

    if (elemento) { // Verificar que el elemento existe antes de intentar manipularlo

        // Si tiene 'hidden' lo quita, si no lo tiene lo pone.
        elemento.classList.toggle("hidden");
    }
}

// Lógica del Modal
btnAbrirModal.onclick = () => {
  modal.style.display = "flex"; // Cambia a 'flex' para mostrar el modal
  modal.classList.remove("hidden");
};

btnCerrarModal.onclick = () => {
  modal.style.display = "none";
};
//Cerrar si el usuario hace clic fuera del modal
window.onclick = (event) => {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
 //Comentarios por Anthony.