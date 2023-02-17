const btn = document.querySelector('.menu__btn');
const container = document.querySelector('.menu__container');
const header = document.querySelector('.container__header');
const rainbow = document.querySelector('.scroll')

btn.addEventListener('click', ()=>{
    container.classList.toggle('menu-opened')
})

rainbow.addEventListener('click',()=>{
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
})
function setColor(){
    if(window.scrollY != 0){
        header.classList.add('menu-window');
        rainbow.style.display = 'block'
    }else{
        header.classList.remove('menu-window')
        rainbow.style.display = 'none'
    }
}
window.addEventListener('scroll', setColor)