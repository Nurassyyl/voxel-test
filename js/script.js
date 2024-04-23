const btnCatalog = document.querySelector(".nav__catalog");
const popupCatalog = document.querySelector(".popup-catalog");
const overlay = document.querySelector(".overlay");
const popupCatalogMain = document.querySelector(".popup-catalog__main");
const catalogClose = document.querySelector(" .catalog-close");
const catalogOpen = document.querySelector(" .catalog-open");
const body = document.querySelector("body");
btnCatalog.addEventListener('click', () => {
  popupCatalog.classList.toggle('popup-catalog__main-active');
  popupCatalog.classList.toggle('popup-catalog-display')
  overlay.classList.toggle('popup-catalog-display')
  popupCatalogMain.classList.toggle('popup-catalog__main-active');
  catalogClose.classList.toggle('catalog-btns')
  catalogOpen.classList.toggle('catalog-close')
})

var swiper = new Swiper(".mySwiper", {
  loop: true,
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
});
var swiper2 = new Swiper(".mySwiper2", {
  loop: true,
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-next",
    prevEl: ".swiper-prev",
  },
  thumbs: {
    swiper: swiper,
  },
});