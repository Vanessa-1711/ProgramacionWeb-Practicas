//referencia de pestaña selccionada
const about = document.querySelector(".about");
//referencia de todas las pestañas
const btns = document.querySelectorAll(".tab-btn");
//referencia a contenido de pestañas
const articles = document.querySelectorAll(".content");

const divImg = document.querySelector(".about-img");

//refrencia a imagen seleccionada
const options_img = document.querySelector(".gallery");
//arreglo para guardar las ligas a cada imagen
const gallery={
'1':'img/2.png',
'2':'img/3.png',
'3':'img/4.png',
'4':'img/5.png',
'5':'img/6.png',
'6':'img/7.png',
'7':'img/8.png',
'8':'img/9.png',
'9':'img/10.png',
'10':'img/11.png',
'11':'img/12.png',
'12':'img/13.png',
'13':'img/14.png',
'14':'img/15.png',
'15':'img/16.png'
}
//referencia a el contenido del carrusel
const carrousel= document.querySelector(".carousel-inner");
//arreglo para guardar las referencias a las imagenes de las pestañas
images={'disco':'img/2.png',
'conci': 'img/6.png',
'merca':'img/9.png'};

//cuando se de clic a una pestaña
about.addEventListener("click", function (e) {
  const id = e.target.dataset.id;
  if (id) {
    // remover seleccionado
    btns.forEach(function (btn) {
    btn.classList.remove("active");
  });
    e.target.classList.add("active");
    for (let item of Object.keys(images)){
      if (item==id){
        divImg.innerHTML=`<img src="${images[item]}" alt="" id="imagen" />`
      }
    }
    // ocultar otro articulos
    articles.forEach(function (article) {
      article.classList.remove("active");
    });
    const element = document.getElementById(id);
    element.classList.add("active");
  }
});


//cuando se de clic a una imagen de la galeria
options_img.addEventListener("click", function (e) {
  const id = e.target.dataset.id;
  //se muestra la imagen de la que se seleccionó como activa
  var images=`<div class="carousel-item active " data-bs-interval="10000" >
              <img src="${gallery[id]}" class="d-block w-100 " >
            </div>`
  //se recorre el arreglo de imagenes de la galeria
  for(const key in gallery){
    //se agregan todas las demás imágenes al carrusel
    if (key != id){
      images+=`<div class="carousel-item " data-bs-interval="10000" >
              <img src="${gallery[key]}" class="d-block w-100 " >
            </div>`
    }
    
  }
  //se modificia en contenido del cuerpo del carrusel
  carrousel.innerHTML = images;
});
