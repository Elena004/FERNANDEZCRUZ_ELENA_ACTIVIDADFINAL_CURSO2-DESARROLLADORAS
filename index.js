// Definir variables y constantes para tener un cdigo más limpio.
var inputNombre = document.getElementById('nombre');
var inputEmail = document.getElementById('email');
var inputClave = document.getElementById("clave");
var inputConfirmarClave = document.getElementById('confirmarclave');

var spanNombre = document.getElementById('ErrorNombre');
var spanEmail = document.getElementById('ErrorEmail');
var spanClave = document.getElementById('ErrorClave');
var spanConfirmarClave = document.getElementById('ErrorClave2');

const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');
formulario.noValidate = true;

const expresiones = {//Expresiones regulares.
    nombre:/^[a-zA-ZÀ-ÿ\s]{1,40}$/,//Letras y espacios, pueden llevar acentos.
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,//formato de email.
    clave: /^.{8,20}/, // 8 a 20 digitos.
};
/*--------------------------------------------------------------------------------------------- */
inputNombre.oninput = function () {
    validarNombre();
  };
  
  inputEmail.oninput = function () {
    validarEmail();
  };
  
  inputClave.oninput = function () {
    validarClave ();
  };
  
  inputConfirmarClave.oninput = function () {
    validarConfirmarClave();
  }; 

//   FUNCIONES
function validarNombre(){
    if (!inputNombre.value) {
        spanNombre.style.display = "block"
        spanNombre.innerHTML = 'Rellene este campo';
        inputNombre.classList.add('input-nombre')
      } else if (!expresiones.nombre.test(inputNombre.value)) {
        inputNombre.setAttribute("valid", false)
        spanNombre.style.display = "block"
        spanNombre.innerHTML = 'El nombre tiene que ser solamente letras, puede contener espacios.';
        inputNombre.classList.add('input-nombre')
      } else {
        spanNombre.style.display = "none"
        spanNombre.innerHTML = '';
      }
};
function validarEmail() {
    if (!inputEmail.value) {
      spanEmail.style.display = "block"
      spanEmail.innerHTML = 'Rellene este campo';
      inputEmail.classList.add('input-email')
    } else if (!expresiones.email.test(inputEmail.value)) {
      inputEmail.setAttribute("valid", false)
      spanEmail.style.display = "block"
      spanEmail.innerHTML = 'Tiene que ser un email valido.';
      inputEmail.classList.add('input-email')
    } else {
      spanEmail.style.display = "none"
      spanEmail.innerHTML = '';
    }
  };

  function validarClave () {
    if (!inputClave.value) {
      spanClave.style.display = "block"
      spanClave.innerHTML = 'Rellene este campo';
      inputClave.classList.add('input-clave')
    } else if (!expresiones.clave.test(inputClave.value)) {
      inputClave.setAttribute("valid", false)
      spanClave.style.display = "block"
      spanClave.innerHTML = 'La clave deberá tener al menos 8 caracteres.';
      inputClave.classList.add('input-clave')
    } else {
      spanClave.style.display = "none"
      spanClave.innerHTML = '';
    }
  };
 
    function validarConfirmarClave() {
      if (!inputConfirmarClave.value) {
          spanConfirmarClave.style.display = "block"
          spanConfirmarClave.innerHTML = 'Rellene este campo';
          inputConfirmarClave.classList.add('input-confirmarclave')
      } else if(!expresiones.clave.test(inputConfirmarClave.value)) {
          inputConfirmarClave.setAttribute("valid", false)
          spanConfirmarClave.style.display = "block"
          spanConfirmarClave.innerHTML = 'La contraseña debe tener al menos 8 caracteres';
          inputConfirmarClave.classList.add('input-confirmarclave')
      } else if (inputConfirmarClave.value !== inputClave.value) {
          inputConfirmarClave.setAttribute("valid", false)
          spanConfirmarClave.style.display = "block"
          spanConfirmarClave.innerHTML = 'Las claves no son iguales.';
          inputConfirmarClave.classList.add('input-confirmarclave')
      } else {
          spanConfirmarClave.style.display = "none"
          spanConfirmarClave.innerHTML = '';
      }
  };
/* No consigo solucionar que cuando sean incorrectos se muestre el estilo de .input-confirmarclave:invalid, porque si se cumple la función de mostrar las claves no son iguales, no entiento por que no me selecciona la classList puesta*/

//  MENSAJE ALERTA
formulario.onsubmit = function (e) {
    e.preventDefault();
    this.checkValidity() ? (alert('¡Tu cuenta se ha creado correctamente!'))
        : (
            validarNombre(),
            validarEmail(),
            validarClave(),
            validarConfirmarClave()
         )
};