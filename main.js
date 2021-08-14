const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}

/*mudar o header da página quando der o scroll*/
const header = document.querySelector('#header')
const navHeight = header.offsetHeight

window.addEventListener('scroll', function () {
  if (window.scrollY >= navHeight) {
    header.classList.add('scroll')
  } else {
    header.classList.remove('scroll')
  }
})


/* TESTIMONIALS CAROUSEL SLIDER SWIPER*/
const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1, /*QUANTOS SLIDES EU QUERO VER*/
  pagination:{
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true
})

/* SCROLLREVEAL - MOSTRAR ELEMENTOS QUANDO DER SCROLL NA PÁGINA*/

  /*funções são escritas com letra maiúscula - ScrollReveal Swiper*/

const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
})

scrollReveal.reveal(
  `#home .text, #home .image,
  #about .image, #about .text,
  #services header, #services .card,
  #testimonials header, #testimonials .testimonials
  #contact .text, #contact .links,
  footer .brand, footer .social
  `, 
  {interval :100})

/*botão voltar para o topo*/
/*constantes são escritas em camelcase*/

const backToTopButton = document.querySelector('.back-to-top')
window.addEventListener('scroll', function(){
  if (window.scrollY >= 560) {
    backToTopButton.classList.add('show')
  }else {
    backToTopButton.classList.remove('show')
  }
})

