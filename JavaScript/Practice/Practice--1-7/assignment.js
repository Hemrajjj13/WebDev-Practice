/* ----------- Chapter 1–2 ----------- */


// 1. Write a program to check if a number is even, odd, or zero.
checkNum(5);
function checkNum(num) {
    if (num === 0) {
        console.log("Number is Zero");
    } else if (num % 2 == 0) {
        console.log("Number is Even");
    }else if (num % 2 != 0) {
        console.log("Number is Even");
    }
}

// 2. Take a user's name and age using prompt and print: "<name> will turn 100 after <x> years".
// let name = prompt("enter Name");
// let age = prompt("enter age");
// console.log(`${name} will turn 100 after ${100 - age} years`);

// 3. Predict the output:
console.log("5" - 2 + 3 + "1");

// 4. Write a program that counts how many digits are in a positive number.

let num =  5673;
let count = 0;
if (num > 0) {
    while (num > 0) {
        num = Math.floor(num / 10);
        count++;
    }
}
console.log(count);

// 5. Create a calculator using if/else that supports +, -, *, / based on a variable operator.
/*let num1 = Number(prompt("Enter first number:"));
let num2 = Number(prompt("Enter second number:"));
let operator = prompt("Enter operator (+, -, *, /):");

let result = null;

if (operator === "+") {
    result = num1 + num2;
} else if (operator === "-") {
    result = num1 - num2;
} else if (operator === "*") {
    result = num1 * num2;
} else if (operator === "/") {
    result = num1 / num2;
} else {
    result = "Invalid operator!";
}

console.log("Result:", result);
*/




/* ----------- Chapter 3 (Strings + Arrays) ----------- */

// 6. Write a function that removes all spaces from a string (without using replaceAll).
function removeSpaces(str) {
    let result = "";
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== " ") {
            result += str[i];
        }
    }
    return result;
}
console.log(removeSpaces("Hello world today")); 

// 7. Given an array of numbers, print the second largest number.
function secondLargest(array) {
    let largest = -Infinity;
    let second = -Infinity
    for (let i = 0; i < array.length; i++) {
        if (array[i] > largest) {
            second = largest;
            largest = array[i];
        } else if (array[i] > second && array[i] !== largest) {
            second = array[i];
        }
        
    }
    console.log("Second Largest:", second);
}
secondLargest([1,3,4,5,6,7,8,99, 87]);

// 8. Given an array, return a new array containing only unique elements (no sets).
function getUnique(arr) {
    let unique = [];
    for (let i = 0; i < arr.length; i++) {
        if (!unique.includes(arr[i])) {
            unique.push(arr[i]);
        }
    }
    return unique;
}
console.log(getUnique([1, 2, 2, 3, 4, 4, 5]));

// 9. Given a string, return the character that appears the most.

function mostFrequentChar(str) {
    let charCount = {};
    let maxChar = "";
    let maxCount = 0;
    for (let char of str) {
        if (!charCount[char]) {
            charCount[char] = 1;
        } else {
            charCount[char]++;
        }
        if (charCount[char] > maxCount) {
            maxCount = charCount[char];
            maxChar = char;
        }
    }
    return maxChar;
}

console.log(mostFrequentChar("hello world"));

// 10. Reverse an array manually without using reverse().
function arrReverse(array) {
    if (!Array.isArray(array)) {
        console.error("Not An ARRAY");
        return
    }
    let start = 0;
    let end = array.length - 1;
    while (start < end) {
        let temp = array[start];
        array[start] = array[end];
        array[end] = temp;
        start++, end--;
    }
    console.log(array);
}
arrReverse([1, 2, 2, 3, 4, 4, 5]);



/* ----------- Chapter 4 (Loops) ----------- */

// 11. Print all numbers between 1–200 that are divisible by 7 but not by 5.
// checkNums();
function checkNums() {
    for (let i = 1; i <= 200; i++) {
        if (i % 7 === 0 && i % 5 !== 0) {
            console.log(i);
        }
    }
}

// 12. Print the multiplication table of a number in reverse (10 → 1).
// revTable(0)
function revTable(n) {
    if (n < 1) {
        console.error("Invalid NUmber");
        return;
    }
    let table = [];
    for (let i = 10; i > 0; i--) {
        table.push(i * n);
    }
    table.map(n => console.log(n));
} 

// 13. Print all prime numbers between 1 and 100 (simple logic only).
// isprime();
function isprime() {
        for (let num = 2; num <= 100; num++) {
        let isPrime = true;
        for (let i = 2; i < num; i++) {
            if (num % i === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            console.log(num);
        }
    }
}

//  14. Print this pattern:
    // *
    // **
    // ***
    // ****
printPattern(4);
function printPattern(num) {
    let symbol = '*';
    for (let i = 1; i <= num; i++) {
        console.log(symbol.repeat(i));
    }
}

// 15. Print the sum of all digits of a number (e.g., 453 → 12).
digitSum(231311331, 0)
function digitSum(num, sum) {
    let str =String(num);
    for (let i = 0; i < str.length; i++) {
        sum += Number(str[i]);
    }
    console.log(sum);
}