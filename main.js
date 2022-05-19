// good example of calc and to lear how to buld a simple one
// https://github.com/mateocode8933/Youtube-tutorials/blob/main/Kalkulator%20Javascript/main.js

let previousNumber = document.querySelector('.previousNumber');
let mathSign = document.querySelector('.mathSign');
let currentNumber = document.querySelector('.currentNumber');

let operator = document.querySelectorAll('.operator')
let number = document.querySelectorAll('.number')
let clear = document.querySelector('.clear')
let equal = document.querySelector('.equal');

//let pnValue = previousNumber.textContent;
//let msValue = mathSign.textContent;
//let cnValue = currentNumber.textContent

let result = "";

function operate(e){
    let value = e.target.innerText;
    let a = Number(currentNumber);
    let b = Number(previousNumber)
    switch(value){
        case "+":
            result = a + b
            console.log(result)
            break;
        case "-":
            result = a + b
            console.log(result)
            break;
    }
}

operator.forEach((btn)=>{
   btn.addEventListener('click',(e)=>{
       if(currentNumber.innerText ==="0") {
           return
       } else {
        mathSign.textContent = e.target.textContent;
        previousNumber.textContent = currentNumber.innerText;
        currentNumber.innerText = "0"
       }
    //mathSign.textContent = e.target.textContent
   } )
});

number.forEach((btn)=>{
    btn.addEventListener('click',(e)=>{
    //     //let fVal = Number(e.target.textContent)
        currentNumber.innerText = currentNumber.innerText + e.target.textContent
    //     //result = fVal
    //     //console.log(result)
     } 
    )})

//clear.addEventListener('click',cons );

equal.addEventListener('click',(e)=>{
    let b = Number(currentNumber.innerText);
    let a = Number(previousNumber.innerText)
    switch(mathSign.textContent){
        case "+":
            result = a + b
            console.log(result)
            currentNumber.innerText = result
            break;
        case "-":
            result = a - b
            console.log(result)
            currentNumber.innerText = result
            break;
        case "X":
            result = a * b
            console.log(result)
            currentNumber.innerText = result
            break;
        case "/":
            result = a / b
            console.log(result)
            currentNumber.innerText = result
            break;
        case "sqr2":
            result = "error"
            console.log(result)
            currentNumber.innerText = result
            break;
        case "2^":
            result = a * a
            console.log(result)
            currentNumber.innerText = result
            break;
        case "%":
            result = "error"
            console.log(result)
            currentNumber.innerText = result
            break;
    } 
} );