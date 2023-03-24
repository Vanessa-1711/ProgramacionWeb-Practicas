//Se obtiene la referencia al boton que muestra el modal
var btnMostrarModal = document.getElementById('botonEnviar');

// Obtener una los div de los input
var divNombre = document.getElementById('nombrediv');
var divEmail = document.getElementById('emaildiv');
var divdireccion = document.getElementById('direcdiv');
var divTelefono = document.getElementById('telfdiv');
var divEdad = document.getElementById('edaddiv');
var divSexo = document.getElementById('sexodiv');
var divMatricula = document.getElementById('matriculadiv');
var formulario= document.getElementById('form1');
// Se agregan con un evento click al botón que muestra el modal
btnMostrarModal.addEventListener('click', () => {
    var nombre=document.form1.nombre.value;
    var email=document.form1.email.value;
    var direccion=document.form1.direccion.value;
    var telefono=document.form1.telefono.value;
    var edad=document.form1.edad.value;
    var sexo=document.form1.sexo.value;
    var matricula=document.form1.matricula.value;
    var invalidFeedback = document.querySelector("#sexo + .invalid-feedback");
    //validaciones
    if( nombre == "" || email ==""){
        divNombre.classList.add('was-validated');
        divEmail.classList.add('was-validated');
        return false;
        }
    if(direccion=="" || telefono==""){
        //reiniciar formulario
        divdireccion.classList.add('was-validated');
        divTelefono.classList.add('was-validated');

        return false;
    }
    if(edad=="" || sexo=="" || matricula==""){
        //reiniciar formulario
        divEdad.classList.add('was-validated');
        divSexo.classList.add('was-validated');
        divMatricula.classList.add('was-validated');
        return false;
    } 
    if (this.value === "") {
      this.setCustomValidity("Por favor seleccione una opción.");
      invalidFeedback.style.display = "block";
    } else {
      this.setCustomValidity("");
      invalidFeedback.style.display = "none";
    }

    
    //reiniciar formulario
    divNombre.classList.remove('was-validated');
    divEmail.classList.remove('was-validated');
    divdireccion.classList.remove('was-validated');
    divTelefono.classList.remove('was-validated');
    divEdad.classList.remove('was-validated');
    divSexo.classList.remove('was-validated');
    divMatricula.classList.remove('was-validated');
    formulario.nombre.value=formulario.edad.value=formulario.direccion.value=formulario.telefono.value=formulario.edad.value=formulario.sexo.value=formulario.matricula.value='';
    });