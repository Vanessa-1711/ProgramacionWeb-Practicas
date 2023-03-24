// Se obtiene la referencia al botón que muestra el modal
var boton = document.getElementById('enviar');
// Se obtiene una referencia al formulario
const formulario = document.getElementById("form1");

// Se obtiene una referencia al modal
const myModal = new bootstrap.Modal(document.getElementById('myModal'));
// Se obtiene una referencia al contenido del modal
var contenidoModal = document.getElementById("cuenta-regresiva")

// Se obtiene una div de los campos de inicio y sus input
divInicio = document.getElementById("inicio");
const camposInicio = divInicio.querySelectorAll("input");

// Se obtiene una div de los campos de datos personales y sus input
divPersonales = document.getElementById("datosp");
const camposPersonales = divPersonales.querySelectorAll("input, select");

// Se obtiene una div de los campos de documentacion y sus input
divDocumentacion = document.getElementById("documentacion");
const camposDocumentacion = divDocumentacion.querySelectorAll("input");

// Se obtiene una div de los campos de salud y sus input
divSalud = document.getElementById("salud");
const camposSalud = divSalud.querySelectorAll("input");

// Se obtiene una div de los campos de datos familiares y sus input
divDatosFam = document.getElementById("datosfam");
const camposDatosFam = divDatosFam.querySelectorAll("input");

// Se obtiene una div de los campos de empleo y sus input
divDatosE = document.getElementById("datosE");
const camposDatosE = divDatosE.querySelectorAll("input");

// Se obtiene una div de los campos de secundaria y sus input
divDatosF = document.getElementById("datosf");
const camposDatosF = divDatosF.querySelectorAll("input");

// Se obtiene una div de los campos de prepa y sus input
divDatosprep = document.getElementById("datosPrep");
const camposPrep = divDatosprep.querySelectorAll("input");

// Se obtiene una div de los campos de datos profesionales y sus input
divDatosprof = document.getElementById("datosPorf");
const camposProf = divDatosprof.querySelectorAll("input");

// Se obtiene una div de los campos de comercial y sus input
divDatosComercial = document.getElementById("datosComercial");
const camposComercial = divDatosComercial.querySelectorAll("input");

// Se obtiene una div de los campos de estudios que efectua y sus input
divDatosEfectua = document.getElementById("datosEfectua");
const camposEfectua = divDatosEfectua.querySelectorAll("input");

// Se obtiene una div de los campos de conocimiento y sus input
divDatosConocimiento = document.getElementById("conocimiento");
const camposConocimiento = divDatosConocimiento.querySelectorAll("input");

// Se obtiene una div de los campos de empleo y sus input
divDatosEmpleo = document.getElementById("empleo");
const camposEmpleo = divDatosEmpleo.querySelectorAll("input", "textarea");

// Se obtiene una div de los campos de referencias personales y sus input
divDatosrefPer = document.getElementById("refPersonales");
const camposrefPer = divDatosrefPer.querySelectorAll("input", "textarea");

// Se obtiene una div de los campos de datos generales y sus input
divDatosGenerales = document.getElementById("datosGenerales");
const camposDatosGenerales = divDatosGenerales.querySelectorAll("input", "textarea");

// Se obtiene una div de los campos de datos económicos y sus input
divDatosEconomicos = document.getElementById("datosEco");
const camposDatosEconomicos = divDatosEconomicos.querySelectorAll("input", "textarea");


boton.addEventListener('click', () => {
  //arreglo para guardar los datos ingresado por el usuario
  var inicio = {};
  //se obtienen los campos de inicio y se guardan
  camposInicio.forEach(function(n) {
    inicio[n.id] = n.value;
  });
  //se verifica que que no se tengan valores vacios
  var vacio = Object.values(inicio).some(function(valor) {
    return valor.trim() === "";//retorna true si hay campos vacios
  });
  //si hay campos vacios se regresa a la seccion que no se lleno y se agrega la clase de validacion de bootstrap
  if (vacio) {
    divInicio.classList.add('was-validated');
    divInicio.scrollIntoView({behavior: "smooth"});
    return false
  }

  //Verificar los campos de la seccion datos personales
  camposPersonales.forEach(function(n) {
    //se cambia el valor para select 
    if (n.id=='sexo') {
      if (n.value==1){
        inicio[n.id] = 'Masculino'
      }else if (n.value==2){
        inicio[n.id] = 'Femenino'
      }else if (n.value==3){
        inicio[n.id] = 'Prefiero no decir'
      }
    }else{
      inicio[n.id] = n.value;
    }
  });

  var vacio = Object.values(inicio).some(function(valor) {
    return valor.trim() === "";
  });

  if (vacio) {
    divPersonales.classList.add('was-validated');
    divPersonales.scrollIntoView({behavior: "smooth"});
    return false
  }

  camposDocumentacion.forEach(function(n) {
    //para los radio button, detectar cual es el seleccionado y guardar su valor
   if (n.type == 'radio' && n.checked) {
    inicio[n.name]=n.labels[0].textContent.trim();
    console.log(n.labels[0].textContent.trim())
   } else if (n.type != 'radio') {
    inicio[n.id] = n.value;  
   }
  }) ;

  var vacio = Object.values(inicio).some(function(valor) {
    return valor.trim() === "";
  });

  if (vacio) {
    divDocumentacion.classList.add('was-validated');
    divDocumentacion.scrollIntoView({behavior: "smooth"});
    return false
  }

  camposSalud.forEach(function(n) {
    if (n.type == 'radio' && n.checked) {
    inicio[n.name]=n.labels[0].textContent.trim();
    console.log(n.labels[0].textContent.trim())
   } else if (n.type != 'radio') {
    inicio[n.id] = n.value;  
   }
  });
  var vacio = Object.values(inicio).some(function(valor) {
    return valor.trim() === "";
  });

  if (vacio) {
    divSalud.classList.add('was-validated');
    divSalud.scrollIntoView({behavior: "smooth"});
    return false
  }

  //Validacion datos familiares

  camposDatosFam.forEach(function(n) {
    if (n.type == 'radio' && n.checked) {
    inicio[n.name]=n.labels[0].textContent.trim();
    console.log(n.labels[0].textContent.trim())
   } else if (n.type != 'radio') {
    inicio[n.id] = n.value;  
   }
  });
  var vacio = Object.values(inicio).some(function(valor) {
    return valor.trim() === "";
  });

  if (vacio) {
    divDatosFam.classList.add('was-validated');
    divDatosFam.scrollIntoView({behavior: "smooth"});
    return false
  }

  //validacion primaria
  camposDatosE.forEach(function(n) {
    if (n.type == 'radio' && n.checked) {
    inicio[n.name]=n.labels[0].textContent.trim();
    console.log(n.labels[0].textContent.trim())
   } else if (n.type != 'radio') {
    inicio[n.id] = n.value;  
   }
  });
  var vacio = Object.values(inicio).some(function(valor) {
    return valor.trim() === "";
  });

  if (vacio) {
    divDatosE.classList.add('was-validated');
    divDatosE.scrollIntoView({behavior: "smooth"});
    return false
  }

  //validacion secundaria
  camposDatosF.forEach(function(n) {
    if (n.type == 'radio' && n.checked) {
    inicio[n.name]=n.labels[0].textContent.trim();
    console.log(n.labels[0].textContent.trim())
   } else if (n.type != 'radio') {
    inicio[n.id] = n.value;  
   }
  });
  var vacio = Object.values(inicio).some(function(valor) {
    return valor.trim() === "";
  });

  if (vacio) {
    divDatosF.classList.add('was-validated');
    divDatosF.scrollIntoView({behavior: "smooth"});
    return false
  }

  //validacion preparatoria
  camposPrep.forEach(function(n) {
    if (n.type == 'radio' && n.checked) {
    inicio[n.name]=n.labels[0].textContent.trim();
    console.log(n.labels[0].textContent.trim())
   } else if (n.type != 'radio') {
    inicio[n.id] = n.value;  
   }
  });
  var vacio = Object.values(inicio).some(function(valor) {
    return valor.trim() === "";
  });

  if (vacio) {
    divDatosprep.classList.add('was-validated');
    divDatosprep.scrollIntoView({behavior: "smooth"});
    return false
  }
  //validar profesion
  camposProf.forEach(function(n) {
    if (n.type == 'radio' && n.checked) {
    inicio[n.name]=n.labels[0].textContent.trim();
    console.log(n.labels[0].textContent.trim())
   } else if (n.type != 'radio') {
    inicio[n.id] = n.value;  
   }
  });
  var vacio = Object.values(inicio).some(function(valor) {
    return valor.trim() === "";
  });

  if (vacio) {
    divDatosprof.classList.add('was-validated');
    divDatosprof.scrollIntoView({behavior: "smooth"});
    return false
  }

  //validar comercial
  camposComercial.forEach(function(n) {
    if (n.type == 'radio' && n.checked) {
    inicio[n.name]=n.labels[0].textContent.trim();
    console.log(n.labels[0].textContent.trim())
   } else if (n.type != 'radio') {
    inicio[n.id] = n.value;  
   }
  });
  var vacio = Object.values(inicio).some(function(valor) {
    return valor.trim() === "";
  });

  if (vacio) {
    divDatosComercial.classList.add('was-validated');
    divDatosComercial.scrollIntoView({behavior: "smooth"});
    return false
  }

  //calidar estudios que efectua 
  camposEfectua.forEach(function(n) {
    if (n.type == 'radio' && n.checked) {
    inicio[n.name]=n.labels[0].textContent.trim();
    console.log(n.labels[0].textContent.trim())
   } else if (n.type != 'radio') {
    inicio[n.id] = n.value;  
   }
  });
  var vacio = Object.values(inicio).some(function(valor) {
    return valor.trim() === "";
  });

  if (vacio) {
    divDatosEfectua.classList.add('was-validated');
    divDatosEfectua.scrollIntoView({behavior: "smooth"});
    return false
  }

  //conocimiento generales
  camposConocimiento.forEach(function(n) {
    if (n.type == 'radio' && n.checked) {
    inicio[n.name]=n.labels[0].textContent.trim();
    console.log(n.labels[0].textContent.trim())
   } else if (n.type != 'radio') {
    inicio[n.id] = n.value;  
   }
  });
  var vacio = Object.values(inicio).some(function(valor) {
    return valor.trim() === "";
  });

  if (vacio) {
    divDatosConocimiento.classList.add('was-validated');
    divDatosConocimiento.scrollIntoView({behavior: "smooth"});
    return false
  }

  //empleo
  camposEmpleo.forEach(function(n) {
    if (n.type == 'radio' && n.checked) {
    inicio[n.name]=n.labels[0].textContent.trim();
    console.log(n.labels[0].textContent.trim())
   } else if (n.type != 'radio') {
    inicio[n.id] = n.value;  
   }
  });
  var vacio = Object.values(inicio).some(function(valor) {
    return valor.trim() === "";
  });

  if (vacio) {
    divDatosEmpleo.classList.add('was-validated');
    divDatosEmpleo.scrollIntoView({behavior: "smooth"});
    return false
  }

  //referencia personal
  camposrefPer.forEach(function(n) {
    if (n.type == 'radio' && n.checked) {
    inicio[n.name]=n.labels[0].textContent.trim();
    console.log(n.labels[0].textContent.trim())
   } else if (n.type != 'radio') {
    inicio[n.id] = n.value;  
   }
  });
  var vacio = Object.values(inicio).some(function(valor) {
    return valor.trim() === "";
  });

  if (vacio) {
    divDatosrefPer.classList.add('was-validated');
    divDatosrefPer.scrollIntoView({behavior: "smooth"});
    return false
  }

  //datos generales
  camposDatosGenerales.forEach(function(n) {
    if (n.type == 'radio' && n.checked) {
    inicio[n.name]=n.labels[0].textContent.trim();
    console.log(n.labels[0].textContent.trim())
   } else if (n.type != 'radio') {
    inicio[n.id] = n.value;  
   }
  });
  var vacio = Object.values(inicio).some(function(valor) {
    return valor.trim() === "";
  });

  if (vacio) {
    divDatosGenerales.classList.add('was-validated');
    divDatosGenerales.scrollIntoView({behavior: "smooth"});
    return false
  }

  //datos economicos
  camposDatosEconomicos.forEach(function(n) {
    if (n.type == 'radio' && n.checked) {
    inicio[n.name]=n.labels[0].textContent.trim();
    console.log(n.labels[0].textContent.trim())
   } else if (n.type != 'radio') {
    inicio[n.id] = n.value;  
   }
  });
  var vacio = Object.values(inicio).some(function(valor) {
    return valor.trim() === "";
  });

  if (vacio) {
    divDatosEconomicos.classList.add('was-validated');
    divDatosEconomicos.scrollIntoView({behavior: "smooth"});
    return false
  }

  //se almacena en el cache del navegador los datos se json
  localStorage.setItem('camposInicio', JSON.stringify(inicio,null,2));
  comenzarCuentaRegresiva();
  console.log(inicio);
  
});

// Declaramos una variable contador y le asignamos el valor null
var contador = null;

// Definimos una función llamada comenzarCuentaRegresiva
function comenzarCuentaRegresiva() {
  // Declaramos una variable segundos y le asignamos el valor 10
  var segundos = 5;
  // Cambiamos el contenido del elemento con el id "cuenta-regresiva" para que muestre el valor de segundos
  contenidoModal.innerHTML = `Sus datos se mostrarán en ${segundos}`;
  // Creamos un intervalo que se ejecutará cada 1000 milisegundos (1 segundo)
  // y que restará 1 segundo a la variable segundos y actualizará el contenido del elemento con el id "cuenta-regresiva"
  contador = setInterval(function() {
    segundos--;
    contenidoModal.innerHTML = `Sus datos se mostrarán en ${segundos}`;
    // Mostrar el modal
    myModal.show();
    // Si la variable segundos llega a cero, detenemos la cuenta regresiva y redireccionamos a una página llamada "pruebajson.html"
    if (segundos == 0) {
      detenerCuentaRegresiva();
      //redireccionar a la pagina
      window.open('mostrarCurriculum.html', '_blank');
    }
  }, 1000);
}

// Definimos una función llamada detenerCuentaRegresiva que detiene el intervalo creado en la función anterior
function detenerCuentaRegresiva() {
  clearInterval(contador);
}
