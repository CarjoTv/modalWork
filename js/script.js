const botonEnviarContactos = document.querySelector ("#enviar")
const nombre =document.querySelector("#inputNombre")
const email = document.querySelector("#inputEmail")
const telefono = document.querySelector("#inputTelefono")

let lista = document.querySelector("#lista")
      
  botonEnviarContactos.addEventListener ("click", function(){
    let name=nombre.value
    let email2=email.value
    let phone=telefono.value

    // Tendre que generar un ID unico para cada contacto para poder usar el onclick de mejor manera, usa la fecha de hoy de base
    const idUnico = `contacto-${Date.now()}`;

    lista.innerHTML +=`
    <div onclick="mostrarDetalles('${idUnico}')" class="contacto-card bg-gray-100 p-4 rounded-xl mb-4 cursor-pointer hover:bg-gray-200 transition">
        <p class="font-bold border-b pb-2">${name}</p>
        <div class="info-extra hidden mt-2" id="${idUnico}">
            <p><span class="font-semibold">Email:</span> ${email2}</p>
            <p><span class="font-semibold">Tel:</span> ${phone}</p>
        </div>
    </div>
    `;
  nombre.value=""
  email.value=""
  telefono.value=""
  modal.style.display = "none";

  });

  function mostrarDetalles(id) {
      const elemento = document.getElementById(id);
      if (elemento) {
          // .toggle añade la clase si no está, y la quita si ya está
          elemento.classList.toggle("hidden");
      }
  }







//Script para escuchar al click del boton y mostrar el modal
// Toma el valor modal
const modal = document.getElementById("modalFormulario");

// Toma el boton que abre el modal
const btn = document.getElementById("myBtn");

// Toma el elemento <Etiqueta cualquiera> que cierra el modal
const  btnClose = document.getElementById("cerrarFormulario");

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
btnClose.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}