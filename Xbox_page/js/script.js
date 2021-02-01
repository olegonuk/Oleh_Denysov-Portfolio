window.addEventListener('DOMContentLoaded', () => {

   const burgerNav = document.getElementById('burger__nav'),
      menuBody = document.querySelector('.menu__body');

   let isMobile = {
      Android: function () { return navigator.userAgent.match(/Android/i); },
      BlackBerry: function () { return navigator.userAgent.match(/BlackBerry/i); },
      iOS: function () { return navigator.userAgent.match(/iPhone|iPad|iPod/i); },
      Opera: function () { return navigator.userAgent.match(/Opera Mini/i); },
      Windows: function () { return navigator.userAgent.match(/IEMobile/i); },
      any: function () { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); }
   };
   let body = document.querySelector('body');
   if (isMobile.any()) {
      body.classList.add('touch');
      let arrow = document.querySelectorAll('.arrow');
      console.log(arrow)
      for (i = 0; i < arrow.length; i++) {
         let thisLink = arrow[i].previousElementSibling;
         console.log(thisLink)
         let subMenu = arrow[i].nextElementSibling;
         console.log(subMenu)
         let thisArrow = arrow[i];
         console.log(thisArrow)

         thisLink.classList.add('parent');
         arrow[i].addEventListener('click', function () {
            subMenu.classList.toggle('open');
            thisArrow.classList.toggle('active');
         });
      }
   } else {
      body.classList.add('mouse');
   }


   burgerNav.addEventListener('click', () => {
      burgerNav.classList.toggle('active');
      menuBody.classList.toggle('active');
      document.body.classList.toggle('hidden');
   });
   document.body.addEventListener('click', (e) => {
      if (e.target.classList.contains('menu__body')) {
         burgerNav.classList.remove('active');
         menuBody.classList.remove('active');
         document.body.classList.remove('hidden');
      }
   })


});