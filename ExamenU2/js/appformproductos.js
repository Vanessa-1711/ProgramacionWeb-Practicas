
//Se obtiene la referencia al boton que muestra el modal
var btnMostrarModal = document.getElementById('botonEnviar');

// Obtener una referencia al modal
var modal = new bootstrap.Modal(document.getElementById('modal'));
const contenidoModal = document.getElementById('modal-content');
var contenidoId = document.getElementById('modalID');
var contenidoNombre = document.getElementById('modalNombre');
var contenidoDescripcion = document.getElementById('modaldescripcion');
var contenidoPrecio = document.getElementById('modalprecio');
var contenidoFecha = document.getElementById('modalfecha');
var contenidoNotas = document.getElementById('modalnotas');

// Obtener una los div de los input
var divId = document.getElementById('iddiv');
var divNombre = document.getElementById('nombrediv');
var divDescripcion = document.getElementById('descripciondiv');
var divPrecio = document.getElementById('preciodiv');
var divCaptura = document.getElementById('capturadiv');
var divNotas = document.getElementById('notasdiv');
var formulario= document.getElementById('form1');
// Se agregan con un evento click al botón que muestra el modal
btnMostrarModal.addEventListener('click', () => {
    var id=document.form1.id.value;
    var nombre=document.form1.nombre.value;
    var descripcion=document.form1.descripcion.value;
    var precio=document.form1.precio.value;
    var captura = document.form1.captura.value;
    var notas=document.form1.notas.value;

    //validaciones
    if(id=="" || nombre == "" || descripcion =="" || precio==""){
        divNombre.classList.add('was-validated');
        divDescripcion.classList.add('was-validated');
        divId.classList.add('was-validated');
        divPrecio.classList.add('was-validated');
        return false;
        }
    if(captura=="" || notas==""){
        //reiniciar formulario
        divCaptura.classList.add('was-validated');
        divNotas.classList.add('was-validated');
        return false;
    }

     //agregar los datos al modal
    contenidoId.innerHTML = "ID: " + id
    contenidoNombre.innerHTML = "Nombre: " + nombre;
    contenidoDescripcion.innerHTML = "Descripcion: " + descripcion;
    contenidoPrecio.innerHTML = "Precio: " + precio
    contenidoFecha.innerHTML = "Fecha de captuta: " + captura;
    contenidoNotas.innerHTML = "Notas: " + notas;
    // Mostrar el modal
    modal.show();

    //reiniciar formulario
    divNombre.classList.remove('was-validated');
    divDescripcion.classList.remove('was-validated');
    divId.classList.remove('was-validated');
    divPrecio.classList.remove('was-validated');
    divCaptura.classList.remove('was-validated');
    divNotas.classList.remove('was-validated');
    
    formulario.id.value=formulario.nombre.value=formulario.Papellido.value=formulario.Mapellido.value=formulario.telefono.value=formulario.email.value=formulario.direccion.value=formulario.rfc.value=formulario.categoria.value='';
    });
