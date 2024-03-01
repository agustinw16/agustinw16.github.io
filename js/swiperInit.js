var swiper = new Swiper(".slide-content", { //Coloco la clase que es la contenedora de las tarjetas
    slidesPerView: 1, //Cantidad de tarjetas que se mostraran
    spaceBetween: 10, //Espaciado entre las tarjetas
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    breakpoints: {
      1024: {
        slidesPerView: 2, //Cantidad de tarjetas que se mostraran si la pantalla es mayor a 640px
        spaceBetween: 20,
      },
    },
  });