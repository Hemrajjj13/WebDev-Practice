/********************************************/
// Assignment Operators
/********************************************/

let age = 18
age = age + 2;
age += 2;
age

age = age - 2;
age -= 2;
age

age = age * 2;
age *= 2;
age

/********************************************/
// Unary Operators
/********************************************/

age = age + 1;
age += 1;
++age;  // pre-increment
age++;  // post-increment

--age;  // pre-decrement
age--;  // post-decrement 


/********************************************/
// Boolean
/********************************************/

let isAdult = true;
let isTeenager = false;


/********************************************/
// Strings in Js
/********************************************/

let firstName = "Tony ", lastName = 'Stark';
let char = 'a';
let num = '123';
let emp = " ";
emp = "";

let sentence1 = 'This is "Apple"';
let sentence2 = "This is 'Apple'";

// String indices 
// 0 based indexing
let name = "Tony Stark"; 
name[0];
name[1];
name[5];

name.length;
name[name.length-1];
name[name.length-2];
name[name.length-4];

'Hemraj'.length;
'Hemraj'[5]

// concatenation of strings
let fullName = firstName + lastName;


/********************************************/
// null and undefined in Js
/********************************************/

let same; // undefined 

let a = null; // absence of some value
