// Declaramos una variable contador y le asignamos el valor null
var contador = null;

// Definimos una función llamada comenzarCuentaRegresiva
function comenzarCuentaRegresiva() {
  // Declaramos una variable segundos y le asignamos el valor 10
  var segundos = 10;
  // Cambiamos el contenido del elemento con el id "cuenta-regresiva" para que muestre el valor de segundos
  document.getElementById("cuenta-regresiva").innerHTML = segundos;

  // Creamos un intervalo que se ejecutará cada 1000 milisegundos (1 segundo)
  // y que restará 1 segundo a la variable segundos y actualizará el contenido del elemento con el id "cuenta-regresiva"
  contador = setInterval(function() {
    segundos--;
    document.getElementById("cuenta-regresiva").innerHTML = segundos;

    // Si la variable segundos llega a cero, detenemos la cuenta regresiva y redireccionamos a una página llamada "pruebajson.html"
    if (segundos == 0) {
      detenerCuentaRegresiva();
      window.location.href = "pruebajson.html";
    }
  }, 1000);
}

// Definimos una función llamada detenerCuentaRegresiva que detiene el intervalo creado en la función anterior
function detenerCuentaRegresiva() {
  clearInterval(contador);
}
