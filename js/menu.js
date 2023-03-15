const btnNormal = document.querySelector('.btn-normal');
const btnVegeterian = document.querySelector('.btn-vegeterian');
const menuNormal = document.querySelector('.menu-normal');
const title = document.querySelector('.menu-normal-title')


function setNormal(){
    menuNormal.classList.remove('menu-normal')
    menuNormal.classList.add('normal-menu-open')
    title.innerHTML = 'Our Normal Food'
    title.style.display = 'block'
}




btnNormal.addEventListener('click', setNormal)
