const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      closeElem = document.querySelector('.menu__close');
      
hamburger.addEventListener('click',() => {
    menu.classList.add('active');

});
closeElem.addEventListener('click',() => {
    menu.classList.remove('active');

});

const count = document.querySelectorAll('.stack__ratings-counter'),
    lines = document.querySelectorAll('.stack__ratings-line span');

count.forEach((item, i) => {
    lines[i].style.width = item.innerHTML;

});