
//se ingresan todos los productos
const menu = [
  {
    id: 1,
    title: "Butter",
    category: "BTS",
    price: 601,
    img: "img/butter.jpg",
    desc: `Junto con el CD, los fanáticos recibirán un álbum de fotos, un póster, tarjetas con letras, una tarjeta con fotos instantáneas, un soporte para fotos. `,
  },
  {
    id: 2,
    title: "LOVE YOURSELF: Tear",
    category: "BTS",
    price: 563,
    img: "img/loveYourself.jpg",
    desc: `Love Yourself 'Tear' (Love Yourself 'Tear') es el tercer álbum de estudio de BTS. El álbum fue lanzado el 18 de mayo de 2018. FAKE LOVE sirve como el único líder. El álbum consta de once pistas. `,
  },
  {
    id: 3,
    title: " Skool Luv Affair",
    category: "BTS",
    price: 560,
    img: "img/bts2.jpg",
    desc: `Skool Luv Affair es el segundo EP del grupo surcoreano BTS. El álbum fue publicado el 12 de febrero de 2014.`,
  },
  {
    id: 4,
    title: "BTS - Proof Standard Edition",
    category: "BTS",
    price: 1736,
    img: "img/proof.jpg",
    desc: `“Proof” será un álbum de antología que incluirá tres CD que encarnará la historia de BTS y marcará un inicio a un nuevo capítulo `,
  },
  {
    id: 5,
    title: "TXT The 2nd Album ",
    category: "TXT",
    price: 560,
    img: "img/txt1.jpg",
    desc: `THE CHAOS CHAPTER : FREEZE [ BOY ver. ] CD + Photobook + Sticker Pack + Lyric Book + Behind Book + Photocard + OS Photocard + Poster + Postcard                  `,
  },
  {
    id: 6,
    title: "The World EP.1",
    category: "ATEEZ",
    price: 536,
    img: "img/at1.jpg",
    desc: `Movement - Boxed Set + Bonus Photo Card - Random`,
  },
  {
    id: 7,
    title: "ATEEZ 6Th Mini Album",
    category: "ATEEZ",
    price: 600,
    img: "img/at2.jpg",
    desc: `ERO : FEVER PART.2 [ A ver. ] CD + Photo Booklet + Diary Booklet + Sticker + Post Cards + Photocard `,
  },
  {
    id: 8,
    title: "DR Mini álbum de STRAY KIDS MAXIDENT ",
    category: "STRAY-KIDS",
    price: 982,
    img: "img/sk1.jpg",
    desc: `GO Ver. - Edición limitada) + 1ea Store tarjeta de regalo K-POP sellada`,
  },
  {
    id: 9,
    title: "BORN PINK",
    category: "BLACKPINK",
    price: 690,
    img: "img/bk1.jpg",
    desc: `CD + Photobook + Envelope + Lyrics Paper + Large Photocard + Postcard + Instant Films + Selfie Photocard + 2 Pin Badges + 4 Extra Photocards`,
  },
  {
    id: 10,
    title: "LOVE YOURSELF ANSWER",
    category: "BTS",
    price: 609,
    img: "img/bts3.jpg",
    desc: `BTS Album 2CD + Photobook + Mini Book + Sticker Pack + FREE GIFT / K-POP Sealed.`,
  },
];

// Obtener elemento principal
const sectionCenter = document.querySelector(".tabla");
const btnContainer = document.querySelector(".botones");


// mostrar todos los productos al cargar la página
//NOTA: "DOMContentLoaded" permite conocer el momento en el que todos los elementos del DOM, es decir, los elementos HTML de un proyecto, están cargados
window.addEventListener("DOMContentLoaded", function () {
  mostrarProductos(menu);
  categorias();
});

//Items de productos
function mostrarProductos(menu) {
  var tarjetas = ''
  for (let productos of menu ){
    tarjetas += `<div class="col" >
    <div class="card shadow-sm">
    <img src=${productos.img} alt="" width="100%" height="305" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="900%" fill="#55595c"/><text class ="tituloTarjetas" x="50%" y="50%" fill="#eceeef" dy=".3em">${productos.title}</text>
    <div class="card-body">
    <p class="card-text">${productos.desc}</p>
    <div class="d-flex justify-content-between align-items-center">
        <div class="btn-group">
        <h4 class="price">$${productos.price}</h4>
        </div>
    </div>
    </div>
  </div>
  </div>`;

  }
  //se modificia en contenido de el container
sectionCenter.innerHTML = tarjetas;
}

//filtrado por categoria
function categorias(){
  var categorias=["All"]
  //se guardan las categorias sin repetir 
  for (let producto of menu){
    categorias.push(producto.category)
  }
  categorias = [...new Set(categorias)]; //... convierte el set de vuelta en array
  ;
  //se crean los dropdown-item del filtro
  let drop_item =''
  for (let categoria of categorias){
    drop_item+=`<button type="button"  class="filter-btn filtro" data-id=${categoria}>
    ${categoria}
  </button>`;
  }
  //se modifica el contenido del container del dropdown
  btnContainer.innerHTML = drop_item;

    //se seleccionan todos los dropdown-item
  const drop_filtro = btnContainer.querySelectorAll(".filtro");
  //para cada dropdown-item
  for(let btn of drop_filtro){
    //si se les da clic
    btn.addEventListener("click", function () {
      //se obtiene el nombre del boton
      var categoriaSelec = btn.dataset.id;
      console.log(categoriaSelec)
      //se crea un array con los elementos de la categoria seleccionada 
      var menuFiltrado = []
      for (let producto of menu){
        console.log("DENTRO DEL FOR")
        console.log(categoriaSelec)
        console.log(producto.category)
        if(producto.category == categoriaSelec){
          console.log("Entreeeee")
          menuFiltrado.push(producto)
          console.log(menuFiltrado)

        }
      }
      //se muestran los productos en general o por categoria
      if (categoriaSelec == "All") {
        mostrarProductos(menu);
      } else {
        mostrarProductos(menuFiltrado);
      }
    });
  }

}