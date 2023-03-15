const menu = [
    {
      id: 1,
      Nombre: "Vanessa Itzaiana",
      ApellidoP: "Garcia ",
      ApellidoM: "Cervantes",
      Email: "vanessa-17@live.com",
      telefono: "8342211814",
      direccion: "Calle Agustin Lopez",
      RFC: "888390284",
      Categoria:"TI"
    },
  ];

// Obtener elemento principal
const sectionCenter = document.querySelector(".tablaClientes");


// mostrar todos los productos al cargar la página
//NOTA: "DOMContentLoaded" permite conocer el momento en el que todos los elementos del DOM, es decir, los elementos HTML de un proyecto, están cargados

diplayTablaItems(menu);


//Items de productos
function diplayTablaItems(tablaItems) {
    let displayTabla = tablaItems.map(function (item) {
      // console.log(item);

      return `<tr >
      <td>${item.id}</td>
      <td>${item.Nombre}</td>
      <td>${item.ApellidoP}</td>
      <td>${item.ApellidoM}</td>
      <td>${item.telefono}</td>
      <td>$${item.Email}</td>
      <td>${item.direccion}</td>
      <td>${item.RFC}</td>
      <td>${item.Categoria}</td>
      </tr>`;
    });
    displayTabla = displayTabla.join("");
    // console.log(displayMenu);
    sectionCenter.innerHTML = displayTabla;
  }