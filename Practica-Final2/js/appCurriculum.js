$(document).ready(function() {
    // Al cargar la página, se inicia el temporizador
    var tiempoRestante = 10; // segundos
    var intervalo = setInterval(function() {
      tiempoRestante--;
      $('#contador').text(tiempoRestante);
      if (tiempoRestante == 0) {
        clearInterval(intervalo);
        $('#miModal').modal('hide');
      }
    }, 1000);
  });