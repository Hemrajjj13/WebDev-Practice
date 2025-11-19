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