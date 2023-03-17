//Se obtiene la referencia al boton que muestra el modal
var boton = document.getElementById('enviar');
const formulario = document.getElementById("form1");

divInicio = document.getElementById("inicio");
const camposInicio = divInicio.querySelectorAll("input");

divPersonales = document.getElementById("datosp");
const camposPersonales = divPersonales.querySelectorAll("input, select");

divDocumentacion = document.getElementById("documentacion");
const camposDocumentacion = divDocumentacion.querySelectorAll("input");

boton.addEventListener('click', () => {
  var inicio = {};
  camposInicio.forEach(function(n) {
  	if (n.id == 'licenciaS'){
  		if (n.value== 'on'){
  			inicio['Licencia'] = 'Si';
  			return
  		}
  	}
  	if (n.id == 'licenciaN'){
  		if (n.value== 'on'){
  			inicio['Licencia'] = 'Si';
  			return
  		}
  	}
    inicio[n.id] = n.value;

  });

  var vacio = Object.values(inicio).some(function(valor) {
    return valor.trim() === "";
  });

  if (vacio) {
    divInicio.classList.add('was-validated');
    divInicio.scrollIntoView({behavior: "smooth"});
    return false
  }

  camposPersonales.forEach(function(n) {
    inicio[n.id] = n.value;
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
    inicio[n.id] = n.value;
  });

  var vacio = Object.values(inicio).some(function(valor) {
    return valor.trim() === "";
  });

  if (vacio) {
    divDocumentacion.classList.add('was-validated');
    divDocumentacion.scrollIntoView({behavior: "smooth"});
    return false
  }
  localStorage.setItem('camposInicio', JSON.stringify(inicio));
  window.open('mostrarCurriculum.html', '_blank');
  console.log(inicio);
  
});
