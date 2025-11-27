/* ----------- Chapter 1–2 ----------- */


// 1. Write a program to check if a number is even, odd, or zero.
// checkNum(5);
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
// console.log("5" - 2 + 3 + "1");

// 4. Write a program that counts how many digits are in a positive number.

let num =  5673;
let count = 0;
if (num > 0) {
    while (num > 0) {
        num = Math.floor(num / 10);
        count++;
    }
}
// console.log(count);

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
// console.log(removeSpaces("Hello world today")); 

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
// secondLargest([1,3,4,5,6,7,8,99, 87]);

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
// console.log(getUnique([1, 2, 2, 3, 4, 4, 5]));

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

// console.log(mostFrequentChar("hello world"));

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
// arrReverse([1, 2, 2, 3, 4, 4, 5]);



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
// digitSum(231311331, 0)
function digitSum(num, sum) {
    let str =String(num);
    for (let i = 0; i < str.length; i++) {
        sum += Number(str[i]);
    }
    console.log(sum);
}


/* ----------- Chapter 5 (Objects) ----------- */

// 16. Create an object representing a bank account with deposit() and withdraw() methods.
let bankAccount = {
    balance: 0,
    deposit: function(amount) {
        this.balance += amount;
        console.log("Deposited:", amount, "| New Balance:", this.balance);
    },
    withdraw: function(amount) {
        if (amount > this.balance) {
            console.log("Insufficient balance!");
        } else {
            this.balance -= amount;
            console.log("Withdrew:", amount, "| New Balance:", this.balance);
        }
    }
};
// bankAccount.deposit(1000);  
// bankAccount.withdraw(300);  
// bankAccount.withdraw(1000);  

// 17. Write a function that counts how many properties in an object have numeric values.
let data = {
    name: "John",
    age: 25,
    height: 180,
    city: "Paris",
    score: 90,
    active: true
};
// console.log(countNumericValues(data));

function countNumericValues(obj) {
    let count = 0;
    for (let key in obj) {
        if (typeof obj[key] === "number") {
            count++;
        }
    }
    return count;
}

// 18. Create an array of student objects and print the name of the student with the highest marks.
highestMarks()
function highestMarks() {
    let students = [
        { name: "Alice", marks: 85 },
        { name: "Bob", marks: 92 },
        { name: "Charlie", marks: 78 },
        { name: "David", marks: 95 },
        { name: "Eva", marks: 88 }
    ];

    let topStudent = students[0];  // assume first is highest

    for (let i = 1; i < students.length; i++) {
        if (students[i].marks > topStudent.marks) {
            topStudent = students[i];
        }
    }

    console.log("Top student:", topStudent.name);
    console.log("Marks:", topStudent.marks);

}

// 19. Given an object, create a new object with all keys converted to uppercase.

function toUpperKeys(obj) {
  return Object.fromEntries(
    Object.entries(obj).map(([key, value]) => [key.toUpperCase(), value])
  );
}
const uppercased = toUpperKeys({ name: "Alice", age: 25, city: "Paris" });

console.log(uppercased);

// 20. Write a function that returns true if two objects have the same keys and same values.
function objectsEqual(obj1, obj2) {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) return false;

  for (let key of keys1) {
    if (obj1[key] !== obj2[key]) return false;
  }
  return true;
}

/* ----------- Chapter 6 (Functions) ----------- */

// 21. Write a function that returns the largest of three numbers.
// console.log(largestOfThree(10, 20, 35));
function largestOfThree(a, b, c) {
  return Math.max(a, b, c);
}

// 22. Write a function sumRange(n) that returns 1+2+3+...+n.
// console.log(sumRange(10));
function sumRange(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

// 23. Write a function that takes an array and returns the total sum.
// console.log(sumArray([2, 3, 4, 5, 6, 7, 8, 990]))
function sumArray(arr) {
  let total = 0;
  for (let num of arr) {
    total += num;
  }
  return total;
}


// 24. Make a function that prints how many vowels are in a string.
countVowels("HEMRAJ Suryawanshi");
function countVowels(str) {
  let count = 0;
  const vowels = "aeiouAEIOU";
  for (let char of str) {
    if (vowels.includes(char)) count++;
  }
  console.log(count);
}

// 25. Write a function that takes two numbers and returns an object:
    // {sum: ?, diff: ?, product: ?, division: ?}
// console.log(computeValues(10, 5));
function computeValues(a, b) {
  return {
    sum: a + b,
    diff: a - b,
    product: a * b,
    division: a / b
  };
}



/* ----------- Chapter 7 ('this', Arrow Functions, Try/Catch, setTimeout, setInterval) ----------- */

// 26. Create an object with a method that logs the value of this inside it.
const obj = {
  value: 42,
  showThis() {
    console.log(this);
  }
};
// obj.showThis();

// 27. Rewrite a function using an arrow function:
    // function isPositive(n) { return n > 0; }

const isPositive = n => n > 0;
// console.log(isPositive(30));

// 28. Write a function that prints numbers from 1 to 10 with a 1-second delay between each print.
// printNumbers();
function printNumbers() {
  let n = 1;
  const interval = setInterval(() => {
    console.log(n);
    if (n === 10) clearInterval(interval);
    n++;
  }, 1000);
}

// 29. Use try/catch to safely parse a JSON string (valid or invalid).
const jsonStr = '{"name": "Alice", "age": 25}';
function safeParse(jsonStr) {
  try {
    return JSON.parse(jsonStr);
  } catch (error) {
    return null;
  }
}

// 30. Create a countdown timer function that counts down from n to 0 using setInterval.
// countdown(50);
function countdown(n) {
  const interval = setInterval(() => {
    console.log(n);
    if (n === 0) clearInterval(interval);
    n--;
  }, 1000);
}
