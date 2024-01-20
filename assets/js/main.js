 	//cross watch now 
  function setVisibility(id,visibility) {
    document.getElementById(id).style.display=visibility;
   }

   //scrolling off 
$('.menu-button').on('click' , function() {
  $('body').toggleClass('overflow')
})




//  <!-- Initialize Swiper 
  var swiper = new Swiper(".mySwiper", {
   slidesPerView: 1,
   spaceBetween: 30,
   loop: true,
   pagination: {
     el: ".swiper-pagination",
     clickable: true,
   },
   navigation: {
     nextEl: ".slide-next",
     prevEl: ".slide-prev",
   },
 });

 const swiper1 = new Swiper ('.slider1', {
  // centerMode: true,
  // // centerPadding: '10%',
  slidesPerView: 1,//How many images to display
  breakpoints: {//Responsive *Specify from the smallest width
    991: {
      slidesPerView: 4,
    },
    // For 1000px or more
    767: {
      slidesPerView: 3,
    },
    
  },
  //For automatic playback
  // autoplay: {
  //   delay: 3000, //Replaces the next image after 3 seconds
  // },

  loop: true, //Loop when reaching the last image

  //When adding pagination *Match with HTML
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },

  //When adding left and right navigation *Match with HTML
  navigation: {
    nextEl: '.SN',
    prevEl: '.SP',
  }
  
});


//  fancy box

 Fancybox.bind('[data-fancybox]', {
  // Custom options
});












  





$(function(){
  
});