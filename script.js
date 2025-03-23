let add = (a, b) => a + b;
let subtract = (a, b) => (a) - (b);
let multiply = (a, b) => (a) * (b);
let divide = (a, b) => (a) / (b);

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
}

// console.log(operate(5, '/', 2))

// console.log(add(5, 8))
// console.log(subtract(10, 7))