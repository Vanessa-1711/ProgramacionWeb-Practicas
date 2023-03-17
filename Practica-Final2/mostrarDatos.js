displayFormData();

function displayFormData() {
  const camposInicio = JSON.parse(localStorage.getItem('camposInicio'));
  console.log(camposInicio)
  let camposInicioHTML = "";
  for (let clave in camposInicio) {
    if (camposInicio.hasOwnProperty(clave)) {
      camposInicioHTML += `<p><strong>${clave}</strong>: ${camposInicio[clave]}</p>`;
    }
  }

  document.getElementById('form-data').innerHTML = camposInicioHTML;
}

function exportFormData() {
  const camposInicio = JSON.parse(localStorage.getItem('camposInicio'));
  const camposInicioJSON = JSON.stringify(camposInicio);
  const filename = 'form-data.json';
  const blob = new Blob([camposInicioJSON], {type: 'application/json'});
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.download = filename;
  link.href = url;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  window.open(url); 
}


