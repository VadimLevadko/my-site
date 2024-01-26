var swiper = new Swiper(".swiper-container", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 0,
    stretch: 1,
    depth: 90,
    modifier: 5.5,
    slideShadows: true,
  },
  loop: true,
});

const btn = document.querySelectorAll('.btn-details')

btn.forEach(el => {
  el.addEventListener('click', function() {
    const slide = this.parentElement.parentElement.parentElement
    const chooseDetails = slide.parentElement.firstChild.nextElementSibling
    slide.classList.add('none')
    chooseDetails.classList.remove('none')
  })
})

const menuBg = document.querySelector('.menu-bg')
const open = document.querySelectorAll('.menu-icon')
const close = document.querySelector('.close')

open.forEach(btnOpen => {
  btnOpen.addEventListener('click', () => {
    event.preventDefault()
    menuBg.style.display = 'flex'
    menuBg.style.opacity = 1
  })
})
close.addEventListener('click', () => {
  menuBg.style.display = 'none'
})