let navbar = document.querySelector('.navbar');
let fabars = document.querySelector('.fa-bars');

fabars.onclick = () =>{
    navbar.classList.toggle("active")
};

var swiper = new Swiper(".home-slide", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });


  var swiper = new Swiper(".row", {
    loop: true,
    slidesPerView: 1,
    // centeredSlides: true,
    spaceBetween: 10,
    grabCursor: true,
    freeMode: true,
    clickable:true,
    breakpoints:{
      "0":{
        slidesPerView:1,
        autoplay:{
          delay:700,
          disbleOnInteraction:false,
        },
      },
      "768":{
        slidesPerView:2,
      },
      "1020":{
        slidesPerView:3,
      },
    },
    
    // pagination: {
    //   el: ".swiper-pagination",
    //   clickable: true,
    // },
  });
  // var swiper = new Swiper(".mySwiper", {
  //   slidesPerView: 3,
  //   spaceBetween: 30,
  //   freeMode: true,
  //   pagination: {
  //     el: ".swiper-pagination",
  //     clickable: true,
  //   },
  // });