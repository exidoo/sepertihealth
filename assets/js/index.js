/*==================== SHOW SCROLL UP ====================*/
function scrollUp() {
  const scrollUp = document.getElementById('scroll-up');
  // When the scroll is higher than 200 viewport height, add the show-scroll class to the a tag with the scroll-top class
  if (this.scrollY >= 200) scrollUp.classList.add('show-scroll');
  else scrollUp.classList.remove('show-scroll');
}
window.addEventListener('scroll', scrollUp);



// ========== SWIPER JS ==========
var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 300,
    modifier: 1,
    slideShadows: false,
  },
  pagination: {
    el: ".swiper-pagination",
  },
});

const sr = ScrollReveal({
  distance: '60px',
  duration: 2800,
  // reset: true,
});


/*==================== SCROLL REVEAL ANIMATION ====================*/
sr.reveal(
  `#header, .home_card, .service_content_detail,
         .service_content_detail,
         .choose_content, .choose_benefit,
         .doctor_content, .swiper-wrapper,
         .faq_detail, .faq_card, .appointment, 
         .footer__container`,
  {
    origin: 'top',
    interval: 100,
  }
);

sr.reveal(
  `.home_detail, .about_img_hero
         ,.service_detail,
         .service_btn, .choose-card, .doctor_card,
         .blog_button`,
  {
    origin: 'left',
    interval: 100,
  }
);

sr.reveal(
  `.home_pict, 
         .about,
         .card_service, .img-choose, .doctor_button, 
         .testimonial_cs_title, .ourblog_content, .ourblog_card`,
  {
    origin: 'right',
    interval: 100,
  }
);
