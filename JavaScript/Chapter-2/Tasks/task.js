//Q1. Write a code that will check the traffic lights color and give the output based on color
let color = 'green';

if (color === 'red') {
    console.log("Stop!");
} 

if (color === 'yellow') {
    console.log("Slow down!");
} 

if (color === 'green') {
    console.log("Go away");
} 

//Q2. Create a system to calculate popcorn prices based on the size customer asked for 

let size = "XL";

if (size == "XL") {
    console.log("Price is Rs. 250");
} else if (size == "L") {
    console.log("Price is Rs. 200");
} else if (size == "M") {
    console.log("Price is Rs. 100");
} else if (size == "S") {
    console.log("Price is Rs. 50");
} else {
    console.log("Invalid Size");
}

//Q3. A "good string" a string that starts with the letter & has a length > 3. Write a program to find if string is good or not

let str = "Hemraj";
if ((str.length > 3) && str[0] == 'a') {
    console.log("Good String");
} else {
    console.log("Bad String");
}

//Q3. Use switch statement to print the day of the week using a number variable 'day' with values 1 to 7. (1 = Monday, 2 = Tuesday, & so on)
let day = 5;
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 17:
        console.log("Sunday");
        break;
    default:
        console.log("Enter Valid day between 1 - 7");
        break;
}