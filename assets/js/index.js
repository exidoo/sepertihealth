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
  `      .header_content,.navbar,.home_content,
         .about_us_content,.service_content,.choose,
         .doctor,.testimonial_cs,.ourblog,.faq_content,
         .apointment_content,.footer__container`,
  {
    origin: 'top',
  }
);
