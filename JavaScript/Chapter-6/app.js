function hello() {
    console.log("Hello");
}
// hello();

function printName() {
    console.log("Hemraj Surywanshi");
}
// printName();

function print1to5() {
    for (let i = 0; i <= 5; i++) {
        console.log(i);        
    }
}
// print1to5();

let age = 18;
// isAdult(age);
function isAdult(age = 18) {
    if (age >= 18) {
        console.log("Adult");
    } else if (age < 18) {
        console.log("Not Adult");
    } else {
        console.log("Invlaid  age")
    }
}

//Functions with arguments
let userName = "Hemraj";
function printInfo(name, age) {
    console.log(`${name} is ${age} years old.`);
}
// printInfo(userName, age);

// return keyword
function sum(a , b) {
    return a+b;
}
// let s = sum(sum(78, 78),sum(2, 4));
// console.log(s);
// console.log(sum(3, 5));


//Scope 
let sum1 = 65;
function calSum(a, b) {
    let sum1 = a + b;
    console.log(sum1);
}
// calSum(5, 5);
// console.log(sum1);

//Block scope
if (age >= 18){
    let str = "adult";
    // console.log(str);
}
// console.log(str); -- block scope err

// Lexical Scope
function outerFunc() {
    let x = 5, y = 10;
    innerFunc();//hoisting
    function innerFunc() {
        let a = 25;
        console.log(x + y);
    }
    // console.log(a);
}
// outerFunc(); 

// Function Expressions

const max = function(a, b) {
    if (a == b) {
        console.log(`${a} & ${b} are equals.`)
    } else if (a > b) {
        console.log(`${a} is Greater`);
    } else {
        console.log(`${b} is greater`);
    }
}
// max(45, 45);

// High Order Functions
let greet = function() {
    console.log("Hello world");
}
function multipleGreet(func, n) {
    for (let i  = 0; i < n; i++) {
        func();
    }
}
// multipleGreet(greet, 20);

function oddOrEven(request) {
    if (request == 'odd') {
        let odd = function(n) {
            console.log(!(n % 2 == 0));
        }

        return odd;
    } else if (request == 'even') {
        let even = function(n) {
            console.log(n % 2 == 0);
        }

        return even;
    } else {
        console.log("wrong request");  
    }
}

let request = 'odd';
let func = oddOrEven('even');
// func(50);

//Methods  
const calculator = {
    add: function(a, b) {
        return a+b;
    },
    sub: function(a, b) {
        return a-b;
    },
    mul: function(a, b) {
        return a*b;
    }
}
console.log(calculator);
console.log(calculator.add(5, 6));
console.log(calculator.sub(5, 6));
console.log(calculator.mul(5, 6));