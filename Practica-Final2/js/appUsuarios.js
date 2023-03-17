
//Se obtiene la referencia al boton que muestra el modal
var btnMostrarModal = document.getElementById('botonEnviar');

// Obtener una referencia al modal
var modal = new bootstrap.Modal(document.getElementById('modal'));
const contenidoModal = document.getElementById('modal-content');
var contenidoUser = document.getElementById('modalUser');
var contenidoNombre = document.getElementById('modalNombre');
var contenidoApellido = document.getElementById('modalApellido');
var contenidoEmail = document.getElementById('modalEmail');
var contenidoContra = document.getElementById('modalContra');
var contenidoHobbies = document.getElementById('modalHobbies');

// Obtener una los div de los input
var divContra = document.getElementById('contradiv');
var divContra2 = document.getElementById('contra2div');
var divEmail = document.getElementById('emaildiv');
var divUser = document.getElementById('userdiv');
var divNombre = document.getElementById('nombrediv');
var divApellido = document.getElementById('apellidodiv');
var divCheck = document.getElementById('check');
var formulario= document.getElementById('form1');
// Se agregan con un evento click al botón que muestra el modal
btnMostrarModal.addEventListener('click', () => {
    var usuario=document.form1.usuario.value;
    var nombre=document.form1.nombre.value;
    var apellido=document.form1.apellido.value;
    var email=document.form1.email.value;
    var contrasena1=document.form1.contrasena.value;
    var contrasena2=document.form1.contrasena2.value;
    var hobbies=""
    var b=document.form1.hobby.length;

    //se sacan los check seleccionados por el usuario
    for(var a=0; a<b; a++){
        if (document.form1.hobby[a].checked){
            hobbies+=document.form1.hobby[a].value + ", ";
        }
    }
    //validaciones
    if(usuario=="" || nombre == "" || apellido ==""){
        divNombre.classList.add('was-validated');
        divApellido.classList.add('was-validated');
        divUser.classList.add('was-validated');
        return false;
        }
    if(contrasena1=="" || contrasena2==""){
        //reiniciar formulario
        divContra.classList.add('was-validated');
        divContra2.classList.add('was-validated');

        return false;
    }
    if(contrasena1!=contrasena2){
        console.log("entre")
        divContra.classList.add('was-validated');
        divContra2.classList.add('was-validated');
        return false
    }
    if(email=="" ){
        //reiniciar formulario
        divEmail.classList.add('was-validated');
        return false;
    } 
    if (hobbies.length==0){
        //reiniciar formulario
        divCheck.classList.add('was-validated');
        return false;
    }

     //agregar los datos al modal
    contenidoUser.innerHTML = "Usuario: " + usuario;
    contenidoNombre.innerHTML = "Nombre: " + nombre;
    contenidoApellido.innerHTML = "Apellido: " + apellido;
    contenidoEmail.innerHTML = "Email: " + email;
    contenidoContra.innerHTML = "Contraseña: " + contrasena1;
    contenidoHobbies.innerHTML = "Hobbies: " + hobbies;
    // Mostrar el modal
    modal.show();

    //reiniciar formulario
    divCheck.classList.remove('was-validated');
    divContra.classList.remove('was-validated');
    divNombre.classList.remove('was-validated');
    divUser.classList.remove('was-validated');
    divApellido.classList.remove('was-validated');
    divEmail.classList.remove('was-validated');
    formulario.usuario.value=formulario.nombre.value=formulario.apellido.value=formulario.email.value=formulario.contrasena1.value=formulario.contrasena2.value='';
    });
