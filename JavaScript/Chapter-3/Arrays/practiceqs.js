//Q1.Write a javascript program to get the first n elements of an array. [n can be any positive number]. ex. for array[7, 9, 0, -2] and n = 3 
let nums = [7, 9, 0, -2];
let n = 3;
let numsSlice = nums.slice(0, n);
console.log(numsSlice);

//Q12.Write a javascript program to get the last n elements of an array. [n can be any positive number]. ex. for array[7, 9, 0, -2] and n = 3 

let numSlice = nums.slice(nums.length - n);
console.log(numSlice);


//Q3. Write a JavaScript program to check whether a string is blank or not.
let str = "       ";

if (!str.trim()) {
    console.log("String is Blank");
} else {
    console.log("String is not Blank");
}

//Q4. Write a JavaScript program to test whether the character at a given index is lowercase.
let string = 'Hemraj'; 
let index = 3;
let caseCheck = string[index];
console.log(caseCheck);
if (caseCheck) {
    if (caseCheck === caseCheck.toLowerCase) {
        console.log('Lowercase');
    } else {
        console.log('Uppercase');
    }
}

//Q5. Write a JavaScript program to strip leading and trailing spaces from a string.
let str2 = "        Hemraj  Suryawnashi";
const clean = str2.trim();
console.log(`original string = ${str2}`);
console.log(`string without spaces = ${clean}`);

//Q6. Write a JavaScript program to check if an element exists in an array or not.

let array = ['hello', 'a', 23, 64, 99, -6];
let item = 'Hemraj';

if (array.indexOf(item) != -1) {
    console.log(`item ${item} is present`);
} else if (array.indexOf(item) == -1) {
    console.log(`item ${item} is not present`);
}