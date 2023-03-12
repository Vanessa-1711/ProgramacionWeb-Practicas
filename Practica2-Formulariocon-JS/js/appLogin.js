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

    mostrarModal.addEventListener('click', () => {
        var usuario=document.getElementById("user").value;
        var clave=document.getElementById("pass").value;
        if (usuario== "admin" && clave == "admin"){
            window.location.href = 'dasboard.html';
            //reiniciar formulario
            divUser.classList.remove('was-validated');
            divContra.classList.remove('was-validated');
            formulario.usuario.value=formulario.contra.value=''
            return true;
        }
        divUser.classList.add('was-validated');
        divContra.classList.add('was-validated');
        contenidoModal.innerHTML = "Usuario o contraseña incorrectos, Intente de Nuevo!"
        // Mostrar el modal
        modal.show();
        return false;

    });
