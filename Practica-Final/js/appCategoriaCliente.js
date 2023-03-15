//obtener una referencia al boton que muestra el modal
var btnMostrarModal = document.getElementById('botonEnviar');

// Obtener una referencia al modal
var modal = new bootstrap.Modal(document.getElementById('modal'));
var contenidoClave = document.getElementById('modalId');
var contenidoNombre = document.getElementById('modalNombre');

// Obtener una los div de los input
var divid = document.getElementById('iddiv');
var divnombre = document.getElementById('nombrediv');
var formulario= document.getElementById('form1');

// Se agregan con un evento click al botón que muestra el modal
btnMostrarModal.addEventListener('click', () => {
    var nombre=document.form1.nombre.value;
    var id=document.form1.id.value;
    // validacion
    if(id==""){
        divid.classList.add('was-validated');
        return false;
    }

    if(nombre=="" ){
        divnombre.classList.add('was-validated');
        return false;
    }

    //agregar los datos al modal
    contenidoClave.innerHTML = "ID: " + id;
    contenidoNombre.innerHTML = "Nombre: " + nombre;
    // Mostrar el modal
    modal.show();

    //reiniciar formulario
    divNombre.classList.remove('was-validated');
    divclave.classList.remove('was-validated');
    formulario.nombre.value=formulario.clave.value='';
    });
