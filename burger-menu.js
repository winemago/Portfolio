const hamburger = document.getElementById('hamb-container');
const navUL = document.getElementById('nav-ul');

hamburger.addEventListener('click',()=>{
    navUL.classList.toggle('show');
});