
//Se obtiene la referencia al boton que muestra el modal
var btnMostrarModal = document.getElementById('botonEnviar');

// Obtener una referencia al modal
var modal = new bootstrap.Modal(document.getElementById('modal'));
const contenidoModal = document.getElementById('modal-content');
var contenidoImagen = document.getElementById('modalImagen');
var contenidoNombre = document.getElementById('modalNombre');
var contenidoDescripcion = document.getElementById('modaldescripcion');
var contenidoPrecio = document.getElementById('modalprecio');
var contenidoFecha = document.getElementById('modalfecha');

// Obtener una los div de los input
var divImagen = document.getElementById('imagendiv');
var divNombre = document.getElementById('nombrediv');
var divDescripcion = document.getElementById('descripciondiv');
var divPrecio = document.getElementById('preciodiv');
var divFecha = document.getElementById('fechadiv');
var formulario= document.getElementById('form1');
// Se agregan con un evento click al botón que muestra el modal
btnMostrarModal.addEventListener('click', () => {
    var imagen=document.form1.imagen.value;
    var nombre=document.form1.nombre.value;
    var descripcion=document.form1.descripcion.value;
    var precio=document.form1.precio.value;
    var fecha = document.form1.fecha.value;

    //validaciones
    if(imagen=="" || nombre == "" || descripcion =="" || precio==""){
        divNombre.classList.add('was-validated');
        divDescripcion.classList.add('was-validated');
        divImagen.classList.add('was-validated');
        divPrecio.classList.add('was-validated');
        return false;
        }
    if(fecha==""){
        //reiniciar formulario
        divFecha.classList.add('was-validated');
        return false;
    }

     //agregar los datos al modal
    contenidoImagen.innerHTML = "Imagen: " + imagen
    contenidoNombre.innerHTML = "Nombre: " + nombre;
    contenidoDescripcion.innerHTML = "Descripcion: " + descripcion;
    contenidoPrecio.innerHTML = "Precio: " + precio
    contenidoFecha.innerHTML = "Fecha de captuta: " + fecha;
    // Mostrar el modal
    modal.show();

    //reiniciar formulario
    divNombre.classList.remove('was-validated');
    divDescripcion.classList.remove('was-validated');
    divImagen.classList.remove('was-validated');
    divPrecio.classList.remove('was-validated');
    divFecha.classList.remove('was-validated');
    
    formulario.id.value=formulario.nombre.value=formulario.Papellido.value=formulario.Mapellido.value=formulario.telefono.value=formulario.email.value=formulario.direccion.value=formulario.rfc.value=formulario.categoria.value='';
    });
