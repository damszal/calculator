let previousNumber = document.querySelector('.previousNumber');
let mathSign = document.querySelector('.mathSign');
let currentNumber = document.querySelector('.currentNumber');

let operator = document.querySelectorAll('.operator')
let number = document.querySelectorAll('.number')
let clear = document.querySelector('.clear')

// console.log(number[0].innerHTML)

function cons(e){
    console.log(e)
}

operator.forEach((btn)=>{
    btn.addEventListener('click',cons )
});

number.forEach((btn)=>{
    btn.addEventListener('click',cons )
});

clear.addEventListener('click',cons );