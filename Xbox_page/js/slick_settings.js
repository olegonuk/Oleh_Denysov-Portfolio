$(document).ready(function () {
   $('.header__slider').slick({
      dots: true,
      responsive: [
         {
            breakpoint: 575.9,
            settings: {
               arrows: false,
            }
         },
      ]
   });
   $('.exclusive__slider').slick({
      centerMode: true,
      slidesToShow: 5,
      responsive: [

         {
            breakpoint: 1919.9,
            settings: {
               centerMode: true,
               centerPadding: '40px',
               slidesToShow: 4
            }
         },
         {
            breakpoint: 1619.9,
            settings: {
               centerMode: true,
               centerPadding: '40px',
               slidesToShow: 3
            }
         },
         {
            breakpoint: 1199.9,
            settings: {
               centerMode: false,
               centerPadding: '40px',
               slidesToShow: 3
            }
         },
         {
            breakpoint: 991.9,
            settings: {
               arrows: true,
               centerMode: false,
               centerPadding: '40px',
               slidesToShow: 2
            }
         },
         {
            breakpoint: 767.9,
            settings: {
               centerMode: false,
               arrows: true,
               slidesToShow: 1
            }
         },
         {
            breakpoint: 575.9,
            settings: {
               arrows: false,
               centerMode: false,
               centerPadding: '40px',
               slidesToShow: 1
            }
         }
      ]
   });
});



// window.addEventListener('DOMContentLoaded', () => {

//    const slideItems = document.querySelectorAll('.slider__item'),
//       sliderWrapper = document.querySelector('.slider__wrapper'),
//       sliderField = document.querySelector('.slider__inner'),
//       btnSlidePrev = document.querySelector('.slider-prev'),
//       btnSlideNext = document.querySelector('.slider-next'),
//       width = window.getComputedStyle(sliderWrapper).width;

//    let slideIndex = 1;
//    let offset = 0;
//    sliderField.style.width = 100 * slideItems.length + '%';

//    slideItems.forEach(slide => {
//       slide.style.width = width;
//    });

//    btnSlidePrev.addEventListener('click', () => {
//       if (offset == 0) {
//          offset = +width.slice(0, -2) * (slideItems.length - 1);
//       } else {
//          offset -= +width.slice(0, -2);
//       }
//       sliderField.style.transform = `translateX(-${offset}px)`;
//    });
//    btnSlideNext.addEventListener('click', () => {
//       if (offset == +width.slice(0, -2) * (slideItems.length - 1)) {
//          offset = 0;
//       } else {
//          offset += +width.slice(0, -2);
//       }
//       sliderField.style.transform = `translateX(-${offset}px)`;
//    });

//    // showSlideItems(slideIndex);
//    // function showSlideItems(n) {
//    //    if (n > slideItems.length) {
//    //       slideIndex = 1;
//    //    }
//    //    if (n < 1) {
//    //       slideIndex = slideItems.length;
//    //    }

//    //    slideItems.forEach(slide => slide.classList.add('hide'));
//    //    slideItems[slideIndex - 1].classList.remove('hide');
//    // }

//    // function plusSlideItems(n) {
//    //    showSlideItems(slideIndex += n);
//    // }
//    // btnSlidePrev.addEventListener('click', () => {
//    //    plusSlideItems(-1);
//    // });
//    // btnSlideNext.addEventListener('click', () => {
//    //    plusSlideItems(1);
//    // });










// });