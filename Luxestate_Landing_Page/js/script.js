$(document).ready(function () {
   $('#btnScrollUp').fadeOut();
   $('#btnScrollDown').click(function () {
      var n = $(document).height();
      $('html, body').animate({
         scrollTop: n
      }, 2000);
      return false;
   });
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
      }, 2000);
      return false;
   });

   $('.agents__block_items').slick({
      slidesToShow: 3,
      arrows: true,
      dots: true,
      infinite: true,
      speed: 2000,
      easing: 'ease',
      autoplay: true,
      autoplaySpeed: 4000,
      responsive: [
         {
            breakpoint: 1200,
            settings: {
               slidesToShow: 2,
            }
         },
         {
            breakpoint: 578,
            settings: {
               slidesToShow: 1,
               slidesToScroll: 1
            }
         }
      ]
   });
});
let navbarBlock = document.getElementById('navbarBlock');
let btnBurgerNav = document.getElementById('burger__nav');
btnBurgerNav.addEventListener('click', openMenu);

function openMenu() {
   btnBurgerNav.classList.toggle('active');
   navbarBlock.classList.toggle('active');
}

let appartments = document.getElementById('appartments');
let clients = document.getElementById('clients');
let employees = document.getElementById('employees');
let awards = document.getElementById('awards');

let ourcompanyStatistics = document.getElementsByClassName('ourcompany__statistics');
let arr = Array.from(ourcompanyStatistics);


let i = 1;
let j = 1;
let k = 1;
let g = 1;

setInterval(function () {
   displayAppartments(i++);
   if (i > 748) { i = 1; }
}, 6000);

setInterval(function () {
   displayClients(j++);
   if (j > 3854) { j = 1; }
}, 700);

setInterval(function () {
   displayEmployees(k++);
   if (k > 24) { k = 1; }
}, 4000);

setInterval(function () {
   displayAwards(g++);
   if (g > 14) { g = 1; }
}, 1000);

function displayAppartments(i) {
   appartments.innerHTML = i;
}

function displayClients(str) {
   clients.innerHTML = str;
}
function displayEmployees(str) {
   employees.innerHTML = str;
}
function displayAwards(str) {
   awards.innerHTML = str;
}

