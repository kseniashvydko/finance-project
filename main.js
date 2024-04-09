//mobile menu
const menuBtn = document.querySelector('.menu__btn');
const menuMobile = document.querySelector('.menu__mobile');
let mobileLinks = document.getElementsByClassName("link-mobile");

menuBtn.addEventListener('click', () => {
    menuMobile.classList.toggle('menu--open')
})
for (let i = 0; i < mobileLinks.length; i++) {
  mobileLinks[i].onclick = function() {
      menuMobile.classList.toggle('menu--open');
    } 
}


// Открыть модальное окно
jQuery(".open-modal-btn").click (function(e) {
  document.getElementById("my-modal").classList.add("open")
})
jQuery(".open-modal-btn-check").click (function(e) {
  document.getElementById("my-modal-check").classList.add("open")
})
// Закрыть модальное окно
document.getElementById("close-my-modal-btn").addEventListener("click", function() {
  document.getElementById("my-modal").classList.remove("open")
})
document.getElementById("close-my-modal-btn-check").addEventListener("click", function() {
  document.getElementById("my-modal-check").classList.remove("open")
})
// Закрыть модальное окно при нажатии на Esc
window.addEventListener('keydown', (e) => {
  if (e.key === "Escape") {
      document.getElementById("my-modal").classList.remove("open")
  }
});
window.addEventListener('keydown', (e) => {
  if (e.key === "Escape") {
      document.getElementById("my-modal-check").classList.remove("open")
  }
});
// Закрыть модальное окно при клике вне его
document.querySelector("#my-modal .modal__box").addEventListener('click', event => {
  event._isClickWithInModal = true;
});
document.getElementById("my-modal").addEventListener('click', event => {
  if (event._isClickWithInModal) return;
  event.currentTarget.classList.remove('open');
});
document.querySelector("#my-modal-check .modal__box").addEventListener('click', event => {
  event._isClickWithInModal = true;
});
document.getElementById("my-modal-check").addEventListener('click', event => {
  if (event._isClickWithInModal) return;
  event.currentTarget.classList.remove('open');
});
//маска для телефона

$(document).ready(function() {

$(".consultation__form-tel").mask("+7(999) 999-9999");
$("#modal-tel").mask("+7(999) 999-9999");

});


