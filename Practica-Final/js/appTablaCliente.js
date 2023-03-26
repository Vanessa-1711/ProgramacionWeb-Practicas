const menu = [
    {
      id: 1,
      Nombre: "Vanessa Itzaiana",
      ApellidoP: "Garcia ",
      ApellidoM: "Cervantes",
      Email: "vanessa-17@live.com",
      telefono: "8342211814",
      direccion: "Calle Agustin Lopez",
      rfc: "888390284",
      Categoria:"TI"
    },
    {
      id: 2,
      Nombre: "Sonia Lizbeth",
      ApellidoP: "Muñoz ",
      ApellidoM: "Barrientos",
      Email: "sonia@gmail.com",
      telefono: "8341521614",
      direccion: "Av. de la paz",
      rfc: "2611397452",
      Categoria:"Mantenimiento"
    },
  ];

// Obtener elemento principal
const sectionCenter = document.querySelector(".tablaClientes");


// mostrar todos los productos al cargar la página
diplayTablaItems(menu);


//Items de productos
function diplayTablaItems(tablaItems) {
    let displayTabla = tablaItems.map(function (item) {
      //se retorna los elementos de cada una de las columnas de la tabla
      return `<tr >
      <td>${item.id}</td>
      <td>${item.Nombre}</td>
      <td>${item.ApellidoP}</td>
      <td>${item.ApellidoM}</td>
      <td>${item.telefono}</td>
      <td>${item.Email}</td>
      <td>${item.direccion}</td>
      <td>${item.rfc}</td>
      <td>${item.Categoria}</td>
      </tr>`;
    });
    displayTabla = displayTabla.join("");
    //se muestran los elementos en la tabla
    sectionCenter.innerHTML = displayTabla;
  }