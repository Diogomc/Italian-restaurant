const btn = document.querySelector('.menu__btn');
const container = document.querySelector('.menu__container');
btn.addEventListener('click', ()=>{
    container.classList.toggle('menu-opened')
})

