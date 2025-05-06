var swiper = new Swiper(".heroSwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    loop:true
  });
  
  var swiper2 = new Swiper(".heroSwiper2", {
    spaceBetween: 30,
    centeredSlides: true,
    // autoplay: {
    //   delay: 3000,
    //   disableOnInteraction: false,
    // },
    loop:true
  });

  var swiper3 = new Swiper(".recommendedSwiper", {
    spaceBetween: 20,
    slidesPerView: 4,
    centeredSlides: false,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    loop:true,
    breakpoints: {
        "@0.00": {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        "@0.75": {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        "@1.00": {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        "@1.50": {
          slidesPerView: 4,
          spaceBetween: 20,
        },
      },
  });

  var swiper4 = new Swiper(".BooksOnSalesSwiper", {
    spaceBetween: 20,
    slidesPerView: 4,
    centeredSlides: false,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    loop:true,
    breakpoints: {
        "@0.00": {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        "@0.75": {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        "@1.00": {
          slidesPerView: 4,
          spaceBetween: 20,
        },
        "@1.50": {
          slidesPerView: 5,
          spaceBetween: 20,
        },
      },
  });

  var swiper6 = new Swiper(".BooksOnSalesSwiper2", {
    spaceBetween: 20,
    slidesPerView: 4,
    centeredSlides: false,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    loop:true,
    breakpoints: {
        "@0.00": {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        "@0.75": {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        "@1.00": {
          slidesPerView: 4,
          spaceBetween: 20,
        },
        "@1.50": {
          slidesPerView: 5,
          spaceBetween: 20,
        },
      },
  });

  var swiper5 = new Swiper(".TestimonialsSwiper", {
    spaceBetween: 20,
    slidesPerView: 4,
    centeredSlides: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    loop:true,
    breakpoints: {
        "@0.00": {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        "@0.75": {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        "@1.00": {
          slidesPerView: 3,
          spaceBetween: 10,
        },
        "@1.50": {
          slidesPerView: 3,
          spaceBetween: 10,
        },
      },
  });


  // ============ Modal ochish ==============

  const modal_btn = document.querySelector(".modal_btn")
  const modal = document.querySelector(".modal")
  const closed = document.querySelector(".closed")

  modal_btn.addEventListener("click", ()=>{
    modal.classList.toggle("open")
  })

  closed.addEventListener("click", ()=>{
    modal.classList.remove("open")
  })

  // ================= Sahifalar almashinuvi =================
  
  const menulinks = document.querySelectorAll(".menu_container .menu_list li a")
  const menu_btn = document.getElementById("menu_btn")
  const menu = document.getElementById("menu")

menulinks.forEach((link)=>{
  link.addEventListener("click", close)
})

