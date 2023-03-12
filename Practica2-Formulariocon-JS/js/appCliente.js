
//Se obtiene la referencia al boton que muestra el modal
var btnMostrarModal = document.getElementById('botonEnviar');

// Obtener una referencia al modal
var modal = new bootstrap.Modal(document.getElementById('modal'));
const contenidoModal = document.getElementById('modal-content');
var contenidoId = document.getElementById('modalID');
var contenidoNombre = document.getElementById('modalNombre');
var contenidoPapellido = document.getElementById('modalp_apellido');
var contenidoMapellido = document.getElementById('modalm_apellido');
var contenidoTelefono = document.getElementById('modaltelefono');
var contenidoEmail = document.getElementById('modalEmail');
var contenidoDireccion = document.getElementById('modaldireccion');
var contenidorfc = document.getElementById('modalrfc');
var contenidoCategoria = document.getElementById('modalcategoria');

// Obtener una los div de los input
var divId = document.getElementById('iddiv');
var divNombre = document.getElementById('nombrediv');
var divPapellido = document.getElementById('p_apellidodiv');
var divMapellido = document.getElementById('m_apellidodiv');
var divTelefono = document.getElementById('telefonodiv');
var divEmail = document.getElementById('emaildiv');
var divDireccion = document.getElementById('dirediv'); 
var divRFC = document.getElementById('rfcdiv');
var divCategoria = document.getElementById('categoriadiv');
var formulario= document.getElementById('form1');
// Se agregan con un evento click al botón que muestra el modal
btnMostrarModal.addEventListener('click', () => {
    var id=document.form1.id.value;
    var nombre=document.form1.nombre.value;
    var Papellido=document.form1.p_apellido.value;
    var Mapellido=document.form1.m_apellido.value;
    var telefono = document.form1.telefono.value;
    var email=document.form1.email.value;
    var direccion=document.form1.direccion.value;
    var rfc=document.form1.RFC.value;
    var categoria = document.form1.categoria.value

    //validaciones
    if(id=="" || nombre == "" || Papellido =="" || Mapellido==""){
        divNombre.classList.add('was-validated');
        divPapellido.classList.add('was-validated');
        divId.classList.add('was-validated');
        divMapellido.classList.add('was-validated');
        return false;
        }
    if(telefono=="" || email==""){
        //reiniciar formulario
        divTelefono.classList.add('was-validated');
        divEmail.classList.add('was-validated');
        return false;
    }

    if(direccion=="" || rfc=="" ){
        //reiniciar formulario
        divDireccion.classList.add('was-validated');
        divRFC.classList.add('was-validated');
        return false;
    } 
    if (categoria==""){
        //reiniciar formulario
        divCategoria.classList.add('was-validated');
        return false;
    }

     //agregar los datos al modal
    contenidoId.innerHTML = "ID: " + id
    contenidoNombre.innerHTML = "Nombre: " + nombre;
    contenidoPapellido.innerHTML = "Apellido Paterno: " + Papellido
    contenidoMapellido.innerHTML = "Apellido: " + Mapellido;
    contenidoTelefono.innerHTML = "Telefono: " + telefono
    contenidoEmail.innerHTML = "Email: " + email;
    contenidoDireccion.innerHTML = "Direccion: " + direccion;
    contenidorfc.innerHTML = "RFC: " + rfc
    contenidoCategoria.innerHTML = "Categoria: " + categoria;
    // Mostrar el modal
    modal.show();

    //reiniciar formulario
    divNombre.classList.remove('was-validated');
    divPapellido.classList.remove('was-validated');
    divId.classList.remove('was-validated');
    divMapellido.classList.remove('was-validated');
    divTelefono.classList.remove('was-validated');
    divEmail.classList.remove('was-validated');
    divDireccion.classList.remove('was-validated');
    divRFC.classList.remove('was-validated');
    divCategoria.classList.remove('was-validated');
    
    formulario.id.value=formulario.nombre.value=formulario.Papellido.value=formulario.Mapellido.value=formulario.telefono.value=formulario.email.value=formulario.direccion.value=formulario.rfc.value=formulario.categoria.value='';
    });
