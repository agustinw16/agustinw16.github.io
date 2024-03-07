var swiper = new Swiper(".slide-content", { //Coloco la clase que es la contenedora de las tarjetas
    slidesPerView: 1, //Cantidad de tarjetas que se mostraran
    spaceBetween: 10, //Espaciado entre las tarjetas
    pagination: {
      el: "#swiper-project .swiper-pagination", //Utilizo un id en cada contenedor del slide porque swiper solo admite un swiper-pagination por instancia
      clickable: true,
    },

    breakpoints: {
      1024: {
        slidesPerView: 2, //Cantidad de tarjetas que se mostraran si la pantalla es mayor a 640px
        spaceBetween: 20,
      },
    },
  });

var swiperGalery = new Swiper(".slide-galery", { //Coloco la clase que es la contenedora de la galeria
    slidesPerView: 1, //Cantidad de imagenes que se mostraran
    spaceBetween: 5, //Espaciado entre las imagenes
    pagination: {
      el: "#swiper-galery .swiper-pagination", //Utilizo un id en cada contenedor del slide porque swiper solo admite un swiper-pagination por instancia
      clickable: true,
    },
  });