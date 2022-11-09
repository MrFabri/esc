const hamburger = document.querySelector('.hamburger');
const closeBtn = document.querySelector('.close');
const menu = document.querySelector("#menu");

hamburger.addEventListener('click', ()=> {
    menu.style.display = 'block';
    hamburger.style.display = 'none';
});
closeBtn.addEventListener('click', ()=> {
    menu.style.display = 'none';
    hamburger.style.display = 'block';
});