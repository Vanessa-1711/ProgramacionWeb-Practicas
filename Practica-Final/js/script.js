function saveFormData() {
  const inputName = document.getElementById('input-name').value;
  const inputEmail = document.getElementById('input-email').value;
  const inputMessage = document.getElementById('input-message').value;
  
  const formData = {
    name: inputName,
    email: inputEmail,
    message: inputMessage
  };
  
  localStorage.setItem('formData', JSON.stringify(formData));
  
  window.open('formulario-datos.html', '_blank');
}
