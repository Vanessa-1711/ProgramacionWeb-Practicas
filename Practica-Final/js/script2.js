function displayFormData() {
  const formData = JSON.parse(localStorage.getItem('formData'));
  const formDataHTML = `
    <p><strong>Nombre:</strong> ${formData.name}</p>
    <p><strong>Email:</strong> ${formData.email}</p>
    <p><strong>Mensaje:</strong> ${formData.message}</p>
  `;
  document.getElementById('form-data').innerHTML = formDataHTML;
}

function exportFormData() {
  const formData = JSON.parse(localStorage.getItem('formData'));
  const formDataJSON = JSON.stringify(formData);
  const filename = 'form-data.json';
  const blob = new Blob([formDataJSON], {type: 'application/json'});
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.download = filename;
  link.href = url;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  window.open(url); 
}

displayFormData();
