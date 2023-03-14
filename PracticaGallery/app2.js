//referencia de pestaña selccionada
const about = document.querySelector(".about");
//referencia de todas las pestañas
const btns = document.querySelectorAll(".tab-btn");
//referencia a contenido de pestañas
const articles = document.querySelectorAll(".content");

//refrencia a imagen seleccionada
const options_img = document.querySelector(".gallery");
//arreglo para guardar las ligas a cada imagen
const gallery={
'1':'img/ts-1.png',
'2':'img/ts-2.png',
'3':'img/ts-3.png'
}
//referencia a el contenido del carrusel
const carrousel= document.querySelector(".carousel-inner");
//arreglo para guardar las referencias a las imagenes de las pestañas
images={'portafolio':'img/ts-1.png',
'nosotros': 'img/ts-2.png',
'objetivos':'img/ts-3.png'};

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
