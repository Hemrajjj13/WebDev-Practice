/*****************************************/
// String Methods
/*****************************************/

//1. .trim() -- removes whitespaces
let msg = "    hello        ";
console.log(msg);
console.log(msg.trim());
// let password =  prompt("Enter password");
// console.log(password.trim());

// 2. str.toUppercase() & str.toLowerCase()
let myName = "Hemraj Suryawanshi";
console.log(myName.toUpperCase());
console.log(myName.toLowerCase());

/*****************************************/
// String Methods with arguments
/*****************************************/

// 1. str.indexOf('x') -- Gives first occurence
let str = "Hemraj";
console.log(str.indexOf("raj"));
console.log(str.indexOf('H'));

// 2. Method Chaining
let newMsg = msg.trim();
console.log("after trim: ", newMsg);
newMsg = newMsg.toUpperCase();
console.log("after uppercase: ", newMsg);

let newMsg1 = msg.trim().toUpperCase();
console.log("Method chaining: ", newMsg1);

// 3. str.slice();
let str1 = "Hello";
console.log(str1.slice(0, 4));
console.log(str1.slice(4));
console.log(str1.slice(-3));

// 4. str1.replace('x', 'y')
console.log(str1.replace('ello', 'ii'));

// 5. str1.repeat(3)
console.log(str1.repeat(4));