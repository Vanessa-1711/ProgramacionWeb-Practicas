displayFormData()
function displayFormData() {
  //Obtener los campos iniciales del formulario desde LocalStorage
  const camposInicio = JSON.parse(localStorage.getItem('camposInicio'));
  
  //Crear una cadena de texto en formato HTML para mostrar los campos del formulario recibidos
  let camposInicioHTML = "";
  for (let clave in camposInicio) {
    if (camposInicio.hasOwnProperty(clave)) {
      camposInicioHTML += `<p><strong>${clave}</strong>: ${camposInicio[clave]}</p>`;
    }
  }
  
  //Convertir los campos del formulario a una cadena de texto en formato JSON
  const camposInicioJSON = JSON.stringify(camposInicio, null, 2); // 2 es la cantidad de espacios para la sangría
  
  //Actualizar el contenido para mostrar los campos del formulario en formato HTML
  document.getElementById('form-data').innerHTML = camposInicioHTML;
  
  //Actualizar el contenido del elemento HTML para mostrar los campos iniciales del formulario en formato JSON
  document.getElementById('form-data-json').innerHTML = camposInicioJSON.replace(/\n/g, "<br>");
}

function exportFormData() {
  //Obtener los campos iniciales del formulario desde LocalStorage
  const camposInicio = JSON.parse(localStorage.getItem('camposInicio'));
  
  //Convertir los campos iniciales del formulario a una cadena de texto en formato JSON
  const camposInicioJSON = JSON.stringify(camposInicio, null, 2);
  
  //Crear un archivo Blob con la cadena de texto en formato JSON
  const filename = 'form-data.json';
  const blob = new Blob([camposInicioJSON], {type: 'application/json'});
  
  //Crear una URL para descargar el archivo
  const url = URL.createObjectURL(blob);
  
  //Crear un enlace y configurarlo para descargar el archivo
  const link = document.createElement('a');
  link.download = filename;
  link.href = url;
  
  //Agregar el enlace al cuerpo del documento, hacer clic en él para descargar el archivo y eliminar el enlace del cuerpo del documento
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  
  //Abrir una nueva pestaña del navegador para mostrar la URL del archivo descargado
  window.open(url); 
}
