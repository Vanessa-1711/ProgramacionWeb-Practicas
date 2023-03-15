const menu = [
    {
      id: 1,
      title: "buttermilk pancakes",
      price: 15.99,
      desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
    {
      id: 2,
      title: "diner double",
      price: 13.99,
      desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
    },
    {
      id: 3,
      title: "godzilla milkshake",
      price: 6.99,
      desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
    },
    {
      id: 4,
      title: "country delight",
      price: 20.99,
      desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
    },
    {
      id: 5,
      title: "egg attack",
      price: 22.99,
      desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
    },
    {
      id: 6,
      title: "oreo dream",
      price: 18.99,
      desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
    },
    {
      id: 7,
      title: "bacon overflow",
      price: 8.99,
      desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
    },
    {
      id: 8,
      title: "american classic",
      price: 12.99,
      desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
    },
    {
      id: 9,
      title: "quarantine buddy",
      price: 16.99,
      desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
    {
      id: 10,
      title: "bison steak",
      price: 22.99,
      desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
  ];

// Obtener elemento principal
const sectionCenter = document.querySelector(".tablaProductos");


// mostrar todos los productos al cargar la página
//NOTA: "DOMContentLoaded" permite conocer el momento en el que todos los elementos del DOM, es decir, los elementos HTML de un proyecto, están cargados
table= function (){
    diplayTablaItems(menu);
};

//Items de productos
function diplayTablaItems(tablaItems) {
    let displayTabla = tablaItems.map(function (item) {
      // console.log(item);

      return `<tr >
      <td>${item.id}</td>
      <td>${item.title}</td>
      <td>$${item.price}</td>
      <td>${item.desc}</td>
      </tr>`;
    });
    displayTabla = displayTabla.join("");
    // console.log(displayMenu);
    sectionCenter.innerHTML = displayTabla;
  }