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

const popupAbout = document.querySelector(".popup-about");
const popupBlog = document.querySelector(".popup-blog");
const popupAboutId = document.getElementById('nav-menu__item-about');
const popupBlogId = document.getElementById('nav-menu__item-blog');

popupAboutId.addEventListener('click', () => {
  popupAbout.classList.toggle('popup-about__active');
})

popupBlogId.addEventListener('click', () => {
  popupBlog.classList.toggle('popup-about__active');
})

var swiper = new Swiper(".mySwiper", {
  loop: true,
  spaceBetween: 5,
  slidesPerView: 5,
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