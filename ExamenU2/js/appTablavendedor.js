//se ingresan los pedidos
const menu = [
    {
      Usuario: "Vanesa-1711",
      Nombre: "Vanessa Garcia",
      NombreProducto: "BTS - Proof Standard Edition",
      desc: `Proof” será un álbum de antología que incluirá tres CD que encarnará la historia de BTS y marcará un inicio a un nuevo capítulo`,
      precio: 1736 ,
      fecha: "20-Marzo-2023"        
    },
    {
        Usuario: "Sonia-1711",
        Nombre: "Sonia Muñoz",
        NombreProducto: "BTS - Proof Standard Edition",
        desc: `Proof” será un álbum de antología que incluirá tres CD que encarnará la historia de BTS y marcará un inicio a un nuevo capítulo`,
        precio: 1736 ,
        fecha: "20-Marzo-2023"        
      },
    {
        Usuario: "Nubia-1711",
        Nombre: "Nubia Cantu",
        NombreProducto: "LOVE YOURSELF: Tear",
        desc: `Love Yourself 'Tear' (Love Yourself 'Tear') es el tercer álbum de estudio de BTS. El álbum fue lanzado el 18 de mayo de 2018. FAKE LOVE sirve como el único líder. El álbum consta de once pistas.`,
        precio: 563 ,
        fecha: "06-Marzo-2023"        
    },
    {
      Usuario: "Lorena-1711",
      Nombre: "Lorena Romero",
      NombreProducto: "Skool Luv Affair",
      desc: `Skool Luv Affair es el segundo EP del grupo surcoreano BTS. El álbum fue publicado el 12 de febrero de 2014.`,
      precio: 560 ,
      fecha: "15-Febrero-2023"        
   },
    
    {
      Usuario: "Lucero-1711",
      Nombre: "Lucero Piña",
      NombreProducto: "The World EP.1",
      desc: `Movement - Boxed Set + Bonus Photo Card - Random`,
      precio: 536 ,
      fecha: "20-Febrero-2023"        
    },

  {
    Usuario: "Vanesa-1711",
    Nombre: "Vanessa Garcia",
    NombreProducto: "BTS - Proof Standard Edition",
    desc: `Proof” será un álbum de antología que incluirá tres CD que encarnará la historia de BTS y marcará un inicio a un nuevo capítulo`,
    precio: 1736 ,
    fecha: "20-Marzo-2023"        
  },
  {
      Usuario: "Sonia-1711",
      Nombre: "Sonia Muñoz",
      NombreProducto: "BTS - Proof Standard Edition",
      desc: `Proof” será un álbum de antología que incluirá tres CD que encarnará la historia de BTS y marcará un inicio a un nuevo capítulo`,
      precio: 1736 ,
      fecha: "20-Marzo-2023"        
    },
  {
      Usuario: "Nubia-1711",
      Nombre: "Nubia Cantu",
      NombreProducto: "LOVE YOURSELF: Tear",
      desc: `Love Yourself 'Tear' (Love Yourself 'Tear') es el tercer álbum de estudio de BTS. El álbum fue lanzado el 18 de mayo de 2018. FAKE LOVE sirve como el único líder. El álbum consta de once pistas.`,
      precio: 563 ,
      fecha: "06-Marzo-2023"        
  },
  {
    Usuario: "Lorena-1711",
    Nombre: "Lorena Romero",
    NombreProducto: "Skool Luv Affair",
    desc: `Skool Luv Affair es el segundo EP del grupo surcoreano BTS. El álbum fue publicado el 12 de febrero de 2014.`,
    precio: 560 ,
    fecha: "15-Febrero-2023"        
},
  
  {
    Usuario: "Lucero-1711",
    Nombre: "Lucero Piña",
    NombreProducto: "The World EP.1",
    desc: `Movement - Boxed Set + Bonus Photo Card - Random`,
    precio: 536 ,
    fecha: "20-Febrero-2023"        
},
    
  ];

// Obtener elemento principal
const sectionCenter = document.querySelector(".tablaProductos");


// mostrar todos los productos al cargar la página
//NOTA: "DOMContentLoaded" permite conocer el momento en el que todos los elementos del DOM, es decir, los elementos HTML de un proyecto, están cargados
diplayTablaItems(menu);

//Items de productos
function diplayTablaItems(tablaItems) {
    let displayTabla = tablaItems.map(function (item) {
      // se agrega con js las columnas de la tabla

      return `<tr >
      <td>${item.Usuario}</td>
      <td>${item.Nombre}</td>
      <td>${item.NombreProducto}</td>
      <td>${item.desc}</td>
      <td>$ ${item.precio}</td>
      <td>${item.fecha}</td>
      </tr>`;
    });
    displayTabla = displayTabla.join("");
    // se desplegan en la tabla
    sectionCenter.innerHTML = displayTabla;
  }