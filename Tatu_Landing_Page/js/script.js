let headerNav = document.getElementById('headerNav');
let burgerNav = document.getElementById('burger__nav');
burgerNav.addEventListener('click', openBurgerMenu);
checkOut();

function openBurgerMenu() {
   burgerNav.classList.toggle('active');
   headerNav.classList.toggle('active');
   document.body.classList.toggle('scroll-hidden');
   checkOut();
}
function checkOut() {
   if (document.body.classList.contains('scroll-hidden')) {
      document.ontouchmove = (e) => e.preventDefault();
   } else { document.ontouchmove = (e) => true; }
}

const modalPicture = document.querySelector('.modal__picture');
const zoomBlock = document.querySelectorAll('.zoom_block');
const prewiews = document.querySelectorAll('.gallery__item_block img');
const original = document.querySelector('.modal__img');
const modalText = document.querySelector('.modal__text');

zoomBlock.forEach((zoom) => {
   zoom.addEventListener('click', () => {
      modalPicture.classList.add('open');
      original.classList.add('open');
      const originSrc = zoom.getAttribute('data-src');
      original.src = originSrc;
      const originText = zoom.getAttribute('data-alt');
      modalText.textContent = originText;
   })
})
modalPicture.addEventListener('click', (e) => {
   if (e.target.classList.contains('modal__picture')) {
      modalPicture.classList.remove('open');
      original.classList.remove('open');
   }
})
$(document).ready(function () {
   $('.header__slider').slick({
      arrows: false,
      dots: true,
      infinite: true,
      speed: 3000,
      autoplay: true,
      autoplaySpeed: 4000,
      responsive: [
         {
            breakpoint: 768,
            settings: {
               dots: false,
            }
         }
      ]
   });
   $('.about__slider').slick({
      arrows: false,
      dots: false,
      infinite: true,
      speed: 3000,
      autoplay: true,
      autoplaySpeed: 4000,
   });
   $('#btnScrollUp').fadeOut();
   $(window).scroll(function () {
      if ($(this).scrollTop() > 300) {
         $('#btnScrollUp').fadeIn();
      } else {
         $('#btnScrollUp').fadeOut();
      }
   });
   $('#btnScrollUp').click(function () {
      $('body,html').animate({
         scrollTop: 0
      }, 1000);
      return false;
   });

});

