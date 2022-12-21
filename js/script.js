var swiper = new Swiper(".swiper-container", {
    
  /*cards effect*/
    // effect: "cards",
    // grabCursor: true,


  /*effect coverflow*/
  
    effect: "coverflow",
      grabCuarsor: true,
      centeredSlides: true,
      // slidesPerView: 1,
      slidesPerView: "auto",
      coverflowEffect:{
        rotate:50,
        stretch:0,
        depth:100,
        modifier:1,
        slideshadows:true
      },
      loop: true,
      lazy:true,
      zoom:true,
      autoplay:{
        delay:2000,
      },

  // loopFillGroupWithBlank: true,


/*effect of slide*/

    // effect: "fade",
    // effect: "cube",
    // cubeEffect: {
    //     shadow: true,
    //     slideShadows: true,
    //     shadowOffset: 20,
    //     shadowScale: 0.94,
    // },


    // grid:{
    //     rows:2,
    // },
    // coverflowEffect: {
    //   rotate: 20,
    //   stretch: 0,
    //   depth: 350,
    //   modifier: 1,
    //   slideShadows: true
    // },

  // direction:"vertical",
  // slidesPreview:1,
  // spaceBetween:30,
  // mouseWheel:true,

    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
    },

      //  give to number of pagenation
          //   type: "fraction",
      //       clickable: true,
      //     },

    // navigation: {
    //     nextEl: ".swiper-button-next",
    //     prevEl: ".swiper-button-prev",
    //   },

    keyboard: {
      enabled: true,
    },

    /*navigate  merge slider*/
    // thumbs: {
    //   swiper: swiper,
    // },


     
  });
  













//   pagenation customElements 
//   renderBullet: function (index, className) {
//     return '<span class="' + className + '">' + (index + 1) + "</span>";
//   },