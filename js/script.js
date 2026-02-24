const botonEnviarContactos = document.querySelector ("#enviar")
const nombre =document.querySelector("#inputNombre")
const email = document.querySelector("#inputEmail")
const telefono = document.querySelector("#inputTelefono")

let lista = document.querySelector("#lista")
      
  botonEnviarContactos.addEventListener ("click", function(){
    let name=nombre.value
    let email2=email.value
    let phone=telefono.value


    lista.innerHTML +=`
    <div class="bg-gray-100 p-4 rounded-xl mb-4">
        <p class="font-bold">${name}</p>
        <div class="gap-4 hidden" id="info-${name}">
            <p>${email2}</p>
            <p>${phone}</p>
        </div>
    </div>
    `
  nombre.value=""
  email.value=""
  telefono.value=""

  mostrarEmailYPhone()


  });

  const contactoInfo = document.querySelector("#name")
  
  function mostrarEmailYPhone (){
    lista.addEventListener ("click", () =>{
       contactoInfo.classList.remove("hidden")
    })
  }

mostrarEmailYPhone()







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