let add = (a, b) => Number(a) + Number(b);
let subtract = (a, b) => (a) - (b);
let multiply = (a, b) => (a) * (b);
let divide = (a, b) => (a) / (b);
let op;
let a;
let result;
let next;

let keyedNumbers = []
let left = []
let right = []

let operate = function(a, op, b, next) {
    if (op === '+') {
        result = add(a, b)
    } else if (op === '-') {
        result = subtract(a, b)
    } else if (op === 'x') {
        result = multiply(a, b)
    } else if (b === 0 && op === '/') {
        return 'Absolutely not.'
    }  else {
        result = divide(a, b)
    }

    op = next
    keyedNumbers = []
    console.log(result)
    right = [result, op]
    console.log(right)

    document.getElementById("display").innerHTML = Math.round(100* result) / 100
    return result
}

// Buttons and their click events
let btnClear = document.querySelector('#clear');

btnClear.addEventListener('click',(event) => {
    keyedNumbers = []
    right = []
    left = []
    op = ''
    result =''
    console.log('clear')
    document.getElementById("display").innerHTML = ''
    console.log(keyedNumbers)
});

let btn0 = document.querySelector('#zero');

btn0.addEventListener('click',(event) => {
    if (op === '/') {
        console.log(op)
        console.log(right)
        document.getElementById("display").innerHTML = 'Try again...'
        return console.log("Try again...(press clear first)")
    } else{keyedNumbers.push(0)
        console.log('clicked 0')
        console.log(keyedNumbers)
        console.log(op)
        document.getElementById("display").innerHTML = keyedNumbers.join('')
    }
});


let btn1 = document.querySelector('#one');

btn1.addEventListener('click',(event) => {
    keyedNumbers.push(1)
    console.log('clicked 1');
    console.log(keyedNumbers)
    document.getElementById("display").innerHTML = keyedNumbers.join('')
});


let btn2 = document.querySelector('#two');

btn2.addEventListener('click',(event) => {
    keyedNumbers.push(2)
    console.log('clicked 2');
    console.log(keyedNumbers)
    document.getElementById("display").innerHTML = keyedNumbers.join('')
});


let btn3 = document.querySelector('#three');

btn3.addEventListener('click',(event) => {
    keyedNumbers.push(3)
    console.log('clicked 3');
    console.log(keyedNumbers)
    document.getElementById("display").innerHTML = keyedNumbers.join('')
});


let btn4 = document.querySelector('#four');

btn4.addEventListener('click',(event) => {
    keyedNumbers.push(4)
    console.log('clicked 4');
    console.log(keyedNumbers)
    document.getElementById("display").innerHTML = keyedNumbers.join('')
});

let btn5 = document.querySelector('#five');

btn5.addEventListener('click',(event) => {
    keyedNumbers.push(5)
    console.log('clicked 5');
    console.log(keyedNumbers)
    document.getElementById("display").innerHTML = keyedNumbers.join('')
});

let btn6 = document.querySelector('#six');

btn6.addEventListener('click',(event) => {
    keyedNumbers.push(6)
    console.log('clicked 6');
    console.log(keyedNumbers)
    console.log(right)
    document.getElementById("display").innerHTML = keyedNumbers.join('')
});

let btn7 = document.querySelector('#seven');

btn7.addEventListener('click',(event) => {
    keyedNumbers.push(7)
    console.log('clicked 7');
    console.log(keyedNumbers)
    console.log(right)
    document.getElementById("display").innerHTML = keyedNumbers.join('')
});

let btn8 = document.querySelector('#eight');

btn8.addEventListener('click',(event) => {
    keyedNumbers.push(8)
    console.log('clicked 8');
    console.log(keyedNumbers)
    console.log(right)
    document.getElementById("display").innerHTML = keyedNumbers.join('')
});

let btn9 = document.querySelector('#nine');

btn9.addEventListener('click',(event) => {
    keyedNumbers.push(9)
    console.log('clicked 9');
    console.log(keyedNumbers)
    console.log(right)
    document.getElementById("display").innerHTML = keyedNumbers.join('')
});


let btnAdd = document.querySelector('#sum');

btnAdd.addEventListener('click',(event) => {
    op = '+'

    if (keyedNumbers.length < 1){
        console.log('woops')
        document.getElementById("display").innerHTML = 'woops'
        return false
    }

    if (right[1] === '+') {
        let b = keyedNumbers.join('')
        keyedNumbers = []
        add(a, b);
        right = [a, op]
        console.log(a)
        document.getElementById("display").innerHTML = Math.round(100 * a) / 100
        return right = [a, op]
    } 
    else if (right[1] === '-' || right[1] === 'x'|| right[1] === '/') {
        b = keyedNumbers.join('')
        a = right[0]
        op = right[1]
        next = '+'
        operate(a, op, b, next)
    }
    else {
        a = keyedNumbers.join('')
        keyedNumbers = []
        right = [a, op]
        console.log(right)
        return right
    } 
});


let btnSub = document.querySelector('#subtract');

btnSub.addEventListener('click',(event) => {
    op = '-'

    if (keyedNumbers.length < 1){
        console.log('woops')
        document.getElementById("display").innerHTML = 'woops'
        return false
    }

    if (right[1] === '-') {
        let b = keyedNumbers.join('')
        keyedNumbers = []
        a = (a) - (b);
        right = [a, op]
        console.log(a)
        document.getElementById("display").innerHTML = Math.round(100 * a) / 100
        return right = [a, op]
    } 
    else if (right[1] === '+' || right[1] === 'x'|| right[1] === '/') {
        b = keyedNumbers.join('')
        a = right[0]
        op = right[1]
        next = '-'
        operate(a, op, b, next)
    }
    else {
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
        document.getElementById("display").innerHTML = 'woops'
        return false
    }

    if (right[1] === 'x') {
        let b = keyedNumbers.join('')
        keyedNumbers = []
        a = (a) * (b);
        right = [a, op]
        console.log(a)
        document.getElementById("display").innerHTML = Math.round(100 * a) / 100
        return right = [a, op]
    } 
    else if (right[1] === '+' || right[1] === '-'|| right[1] === '/') {
        b = keyedNumbers.join('')
        a = right[0]
        op = right[1]
        next = 'x'
        operate(a, op, b, next)
    }
     else {
        a = keyedNumbers.join('')
        keyedNumbers = []
        right = [a, op]
        console.log(right)
        return right
    } 
});


let btnDiv = document.querySelector('#divide');

btnDiv.addEventListener('click',(event) => {
    op = '/'

    if (keyedNumbers.length < 1){
        console.log('woops')
        document.getElementById("display").innerHTML = 'woops'
        return false
    }

    if (right[1] === '/') {
        let b = keyedNumbers.join('')
        keyedNumbers = []
        a = (a) / (b);
        right = [a, op]
        console.log(a)
        document.getElementById("display").innerHTML = Math.round(100 * a) / 100
        return right = [a, op]
    } 
    else if (right[1] === '+' || right[1] === '-'|| right[1] === 'x') {
        b = keyedNumbers.join('')
        a = right[0]
        op = right[1]
        next = '/'
        operate(a, op, b, next)
    }
     else {
        a = keyedNumbers.join('')
        keyedNumbers = []
        right = [a, op]
        console.log(right)
        return right
    } 
});


/*Operate function 
If a second operator gets pushed before the equals then that needs to call the function and the answer needs to be a.
This could replace the entire array (x from above).
Equals also calls the function
*/


//Equals
let btnequ = document.querySelector('#equal');

btnequ.addEventListener('click',(event) => {
    b = keyedNumbers.join('')
    a = right[0]
    op = right[1]

    operate(a, op, b)
    
    keyedNumbers = []
    right = []
    left = []
    op = ''

    console.log('clicked equals');
    console.log(result)
    document.getElementById("display").innerHTML = Math.round(100 * result) / 100

    result = ''
});
