"use strict"
// Obtener una referencia al botón que muestra el modal
var mostrarModal = document.getElementById('botonLogin');

// Obtener una referencia al modal
var modal = new bootstrap.Modal(document.getElementById('modal'));


// Obtener una referencia al contenido del modal
    const contenidoModal = document.getElementById('modal-content');
    const divUser = document.getElementById('usua');
    const divContra = document.getElementById('con');
    const formulario= document.getElementById('form1');

    //si se oprime el boton de enviar se muestra el modal
    mostrarModal.addEventListener('click', () => {
        //se definen dos variables para almacenar los valores que ingrese el usuario
        var usuario=document.getElementById("usuario").value;
        var clave=document.getElementById("contra").value;
        //se comprueban las contraseñas en caso de que esten vasios los campos se marca en rojo
        if (usuario== "jperez" && clave == "mipssw"){
            window.location.href = 'homeCliente.html';
            divUser.classList.remove('was-validated');
            divContra.classList.remove('was-validated');
            //reiniciar formulario
            formulario.usuario.value=formulario.contra.value=''
            return true;
        }
        if (usuario== "vendedor" && clave == "mipssw-vend"){
            window.location.href = 'homeVendedor.html';
            divUser.classList.remove('was-validated');
            divContra.classList.remove('was-validated');
            //reiniciar formulario
            formulario.usuario.value=formulario.contra.value=''
            return true;
        }
        // si no coinciden las contraseñas sale el moodal de datos icorrectos
        divUser.classList.add('was-validated');
        divContra.classList.add('was-validated');
        contenidoModal.innerHTML = "Usuario o contraseña incorrectos, Intente de Nuevo!"
        // Mostrar el modal
        modal.show();
        return false;


    });
