//Q1. Create a number variable num with some value. Now,print “good” if the number is divisible by 10 and print “bad” if it is not.
let num = 100;
if (num % 10 === 0) {
    console.log("Good Number");
} else {
    console.log("Bad Number");
}


//Q2. Take the user's name & age as input using prompts. Then show an alert saying: name is age years old. 
let userName = prompt("Enter your name:");
let userAge = prompt("Enter your age:");
console.log(`${userName} is ${userAge} years old.`);


/*Q3. Write a switch statement to print the months in a quarter:
Quarter 1: January, February, March
Quarter 2: April, May, June
Quarter 3: July, August, September
Quarter 4: October, November, December */
let quarterValue = 4;
switch (quarterValue) {
    case 1:
        console.log("Quarter 1: January, February, March");
        break;

    case 2:
        console.log("Quarter 2: April, May, June");
        break;

    case 3:
        console.log("Quarter 3: July, August, September");
        break;

    case 4:
        console.log("Quarter 4: October, November, December");
        break;

    default:
        console.log("NOT A QUARTER");
        break;
}


/*Q4. A string is a golden string if:
    it starts with ‘A’ or ‘a’, and
    its length is greater than 5.
    For a given string, print whether it is golden or not. */
let str1 = "Advika";
if (str1.length > 5 && (str1[0] === 'A' || str1[0] === 'a')) {
    console.log("Golden String");
} else {
    console.log("Not a golden String");
}


//Q5. Write a program to find the largest of 3 numbers.
let num1 = 5, num2 = 5, num3 = 10;
if (num1 > num2) {
    if (num1 > num3) {
        console.log(`${num1} is largest`);
    }
} else if (num2 > num3) {
    console.log(`${num2} is Largest`);
} else {
    console.log(`${num3} is Largest`);
}


//Q6. Write a program to check if two numbers have the same last digit.
// Example: 32 and 47852 both end with 2.

let numOne = 332232, numTwo = 47852;

let lastDigit1 = numOne % 10;
let lastDigit2 = numTwo % 10;

console.log(lastDigit1 === lastDigit2);