const calculator = document.querySelector('.calculator-container')
// const operationButtons = document.querySelectorAll('[data-operation]')
// const equalsButton = document.querySelector('[data-equals]')


calculator.addEventListener('click', function (event) {
    console.log(event)
    console.log(event.target)
    console.log(event.target.innerText)
    const display = document.querySelector('#output')
    display.innerHTML = event.target.innerText
    
})
// console.log('hello')
// 
window.alert('Hello, welcome to my calculator!')

document.querySelector('.clear').addEventListener('click', function (event) {
    const display = document.querySelector('#output')
    display.innerHTML = event.target.innerHTML= ""
})


