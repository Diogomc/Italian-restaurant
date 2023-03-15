const btn = document.querySelector('.menu__btn');
const container = document.querySelector('.menu__container');
btn.addEventListener('click', ()=>{
    container.classList.toggle('menu-opened')
})


const header = document.querySelector('.container__header');

function setColor(){
    if(window.scrollY != 0){
        header.classList.add('menu-window');
    }else{
        header.classList.remove('menu-window')
    }
}
window.addEventListener('scroll', setColor)