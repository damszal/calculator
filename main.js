// good example of calc and to lear how to buld a simple one
// https://github.com/mateocode8933/Youtube-tutorials/blob/main/Kalkulator%20Javascript/main.js


// NEXT TASKS:
// fix the dot and 0.1+0.2 issues


let previousNumber = document.querySelector('.previousNumber');
let mathSign = document.querySelector('.mathSign');
let currentNumber = document.querySelector('.currentNumber');

let operator = document.querySelectorAll('.operator')
let number = document.querySelectorAll('.number')
let clear = document.querySelector('.clear')
let equal = document.querySelector('.equal');

let result = "";

console.log(number);

let showNumber = function(e){
    return currentNumber.innerText = currentNumber.innerText.replace("0","") + e.target.textContent
}

let operate = function(e){
    if(currentNumber.innerText ==="0") {
        return
    } else {
     mathSign.textContent = e.target.textContent;
     previousNumber.textContent = currentNumber.innerText;
     currentNumber.innerText = "0"
}
};

let clearDisplay = function(e) {
    currentNumber.innerText = "0";
    previousNumber.innerText = "0";
    mathSign.innerText = ""
};

let calculateOperations = function(e) {
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
            result = Math.sqrt(a)
            console.log(result)
            currentNumber.innerText = result
            break;
        case "2^":
            result = a * a
            console.log(result)
            currentNumber.innerText = result
            break;
        case "%":
            result = a/100
            console.log(result)
            currentNumber.innerText = result
            break;
    }};

operator.forEach((btn)=>{
   btn.addEventListener('click',operate)
});

number.forEach((btn)=>{
    btn.addEventListener('click', showNumber)
})

clear.addEventListener('click',clearDisplay);

equal.addEventListener('click',calculateOperations);

