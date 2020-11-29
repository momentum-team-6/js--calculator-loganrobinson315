const clearButton = document.querySelector('.clear')
const output = document.querySelector('.output')
const numbers = document.querySelectorAll('.button')
const equals = document.querySelector('.equals')
const functions = document.querySelectorAll('#function')


numbers.forEach(item => {
    item.addEventListener('click', event => { 
        output.innerHTML += item.innerHTML
    })
})

functions.forEach(item => {
    item.addEventListener('click', event => { 
        output.innerHTML += item.innerHTML
    })
})

equals.addEventListener('click', function () {
    output.innerHTML = eval(output.innerHTML)
})

clear.addEventListener('click', function () {
    document.querySelector('#output').innerHTML = ''
})


