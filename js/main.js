const text = document.querySelector('.text-meal')
const button = document.querySelectorAll('.btn-meals')
const img = document.querySelector('.img-meal')
const imgs = [
    '/img/Italian-breakfast.jpg',
    '/img/Italian-pasta.jpg',
    '/img/Italian-pizza.jpg'
] 
const littleText = [
    '<h1>Breakfast</h1><p>Curabitur malesuada justo a neque dapibus, ut sodales urna volutpat, isus est mattis enim, nec eleifend nisi neque nec ex. Cras non consectetur nibh, non varius sem.</p>',
    '<h1>Lunch</h1><p>Duis finibus dapibus neque id tempor. Quisque tempor ipsum nisl. Morbi eget ex nec velit efficitur blandit. Vestibulum fermentum eros non lectus varius, nec finibus est maximus.</p>',
    '<h1>Dinner</h1><p>Nulla rhoncus a nunc at lacinia. Donec scelerisque nibh id hendrerit porta. Pellentesque nunc enim, malesuada quis mollis quis, pretium id ante.</p>'
]


button.forEach((element, index)=>{
    let index1 = index;
    element.addEventListener('click',(index)=>{
        text.innerHTML = `${littleText[index1]}`
        img.setAttribute('src', `${imgs[index1]}`)
    })
})
