let add = (a, b) => a + b;
let subtract = (a, b) => (a) - (b);
let multiply = (a, b) => (a) * (b);
let divide = (a, b) => (a) / (b);
let op;
let a;

let keyedNumbers = []
let left = []
let right = []

// Buttons and their click events
let btnClear = document.querySelector('#clear');

btnClear.addEventListener('click',(event) => {
    keyedNumbers = []
    right = []
    left = []
    op = ''
    console.log('clear')
    console.log(keyedNumbers)
});

let btn0 = document.querySelector('#zero');

btn0.addEventListener('click',(event) => {
    keyedNumbers.push(0)
    console.log('clicked 0');
    console.log(keyedNumbers)
});


let btn1 = document.querySelector('#one');

btn1.addEventListener('click',(event) => {
    keyedNumbers.push(1)
    console.log('clicked 1');
    console.log(keyedNumbers)
});


let btn2 = document.querySelector('#two');

btn2.addEventListener('click',(event) => {
    keyedNumbers.push(2)
    console.log('clicked 2');
    console.log(keyedNumbers)
});


let btn3 = document.querySelector('#three');

btn3.addEventListener('click',(event) => {
    keyedNumbers.push(3)
    console.log('clicked 3');
    console.log(keyedNumbers)
});


let btn4 = document.querySelector('#four');

btn4.addEventListener('click',(event) => {
    keyedNumbers.push(4)
    console.log('clicked 4');
    console.log(keyedNumbers)
});

let btn5 = document.querySelector('#five');

btn5.addEventListener('click',(event) => {
    keyedNumbers.push(5)
    console.log('clicked 5');
    console.log(keyedNumbers)
});

let btnSub = document.querySelector('#subtract');

btnSub.addEventListener('click',(event) => {
    op = '-'

    if (keyedNumbers.length < 1){
        console.log('woops')
        return false
    }

    if (right[1] === '+' || right[1] === '-' || right[1] === 'x'|| right[1] === '/') {
        let b = keyedNumbers.join('')
        keyedNumbers = []
        a = (a) - (b);
        right = [a, op]
        console.log(a)
        return right = [a, op]
    } else {
        a = keyedNumbers.join('')
        keyedNumbers = []
        right = [a, op]
        console.log(right)
        return right
    } 
});

let btnMul = document.querySelector('#multiply');

btnMul.addEventListener('click',(event) => {
    op = 'x'

    if (keyedNumbers.length < 1){
        console.log('woops')
        return false
    }

    if (right[1] === '+' || right[1] === '-' || right[1] === 'x'|| right[1] === '/') {
        let b = keyedNumbers.join('')
        keyedNumbers = []
        a = (a) * b;
        right = [a, op]
        console.log(a)
        return right
    } else {
        a = keyedNumbers.join('')
        keyedNumbers = []
        right = [a, op]
        console.log(right)
        return right
    } 
});


//Equals
let btnequ = document.querySelector('#equal');

btnequ.addEventListener('click',(event) => {
    b = keyedNumbers.join('')

    if (right[1] === '+') {
        console.log(right[0] + b)
    }else if (right[1] === '-') {
        console.log((right[0]) - (b))
    } else {
        console.log(right[0] * b)
    }
    
    console.log('clicked equals');
});


//Test
// let testOp = function(x) {
//     x
// }


/*Operate function 
If a second operator gets pushed before the equals then that needs to call the function and the answer needs to be a.
This could replace the entire array (x from above).
Equals also calls the function
*/
let operate = function(a, op, b) {
    let subTotal = 0
    if (op === '+') {
        a = add(a, b)
    } else if (op === '-') {
        a = subtract(a, b)
    } else if (op === '*') {
        a = multiply(a, b)
    } else if (b === 0 && op === '/') {
        return 'Absolutely not.'
    }
     else {
        a = divide(a, b)
    }

    console.log(a)

    return a
}

// console.log(operate(5, '/', 2))

// console.log(add(5, 8))
// console.log(subtract(10, 7))