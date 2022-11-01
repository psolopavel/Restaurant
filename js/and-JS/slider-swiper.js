const swiper = new Swiper('.product-slider__slider', {
   // Optional parameters
   // direction: 'gorihontal',
   loop: true,
   spaceBetween: 100,
   // If we need pagination
   // pagination: {
   //    el: '.swiper-pagination',
   // },

   // Navigation arrows
   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
   },

   // And if we need scrollbar
   // scrollbar: {
   //    el: '.swiper-scrollbar',
   // },
});