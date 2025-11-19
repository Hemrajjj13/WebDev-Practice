console.log("Hello From Hemraj");

let a = 10, b = 5;
sum = a + b;
console.log('Sum:', sum);


/****************************************/
console.log("****** Template Literals ******");
/****************************************/
let penPrice = 10;
let pencilPrice = 5;
let output = `The total price is : ${penPrice + pencilPrice} Rupees.`;
console.log(output);


/****************************************/
console.log("****** Arithmatic Operators ******");
/****************************************/
let num1 = 35, num2 = 15;
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a ** b);
console.log(a % b);


/****************************************/
console.log("****** Unary Operators ******");
/****************************************/
console.log(a++);
console.log(++a);

console.log(b--);
console.log(--b);


/****************************************/
console.log("****** Comparison Operators ******");
/****************************************/
let num3 = 10, num4 = 14;
console.log(`10 > 14: ${num3 > num4}`);
console.log(`10 < 14: ${num3 < num4}`);
console.log(`10 >= 14: ${num3 >= num4}`);
console.log(`10 <= 14: ${num3 <= num4}`);
console.log(`10 != 14: ${num3 != num4}`);
console.log(`'14' == 14: ${'14' == num4}`);
console.log(`'14' === 14: ${'14' == num4}`);


console.log('====================================');
console.log("Logical Operators");
console.log('====================================');

console.log("&& : AND");
if(5 > 3 && 3 < 5) {
    console.log("Successful")
}

console.log("|| : OR");
if(5 > 3 || 3 > 5) {
    console.log("Successful")
}

console.log("! : NOT");
if (!5<3) {
    console.log("true");
    
}
