const img = document.querySelector('.img-meal');
const btnBreakfast = document.querySelector('.breakfast')
const btnLunch = document.querySelector('.lunch')
const btnDinner = document.querySelector('.dinner')
const title = document.querySelector('.title-meal')
const text = document.querySelector('.text-meal')
function setBreakfast(){
    img.src = '/img/Italian-breakfast.jpg'
    title.innerHTML = '<h1>Breakfast</h1>'
    text.innerHTML = '<p>Curabitur malesuada justo a neque dapibus, ut sodales urna volutpat, isus est mattis enim, nec eleifend nisi neque nec ex. Cras non consectetur nibh, non varius sem.</p>'
}
btnBreakfast.addEventListener('click', setBreakfast)

function setLunch(){
    img.src = '/img/Italian-pasta.jpg'
    title.innerHTML = '<h1>Lunch</h1>'
    text.innerHTML = '<p>Duis finibus dapibus neque id tempor. Quisque tempor ipsum nisl. Morbi eget ex nec velit efficitur blandit. Vestibulum fermentum eros non lectus varius, nec finibus est maximus.</p>'
}
btnLunch.addEventListener('click', setLunch)

function setDinner(){
    img.src = '/img/Italian-pizza.jpg'
    title.innerHTML = '<h1>Dinner</h1>'
    text.innerHTML = '<p>Nulla rhoncus a nunc at lacinia. Donec scelerisque nibh id hendrerit porta. Pellentesque nunc enim, malesuada quis mollis quis, pretium id ante.</p>'
}
btnDinner.addEventListener('click', setDinner)