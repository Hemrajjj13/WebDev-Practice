//Q1
console.log("Q1");

let exprssionSolve = (a, b, c, d) => {
    if (d < 0) {
        d *= -1;
    }
    return (a + b) * c - Math.sqrt(d)
    
};
console.log(exprssionSolve(2, 3, 4, 5));
console.log(exprssionSolve(6, 7, 8, 9));

//Q2


function deepFreeze(obj) {
  const propNames = Object.getOwnPropertyNames(obj);

  for (const name of propNames) {
    const value = obj[name];

    if (value && typeof value === "object") {
      deepFreeze(value);
    }
  }

 
  return Object.freeze(obj);
}
const obj = {
  name: "Alice",
  address: { city: "Paris" }
};

deepFreeze(obj);
console.log(delete(obj.name)) 

//Q3 
let str = "hemraj Surywanshi";

function reapeatedChars(str) {
    let freq = {};
    let maxChar = "";
    let maxCount = 0;
    
    for (let char of str) {
        if (char === " ") continue;
        freq[char] = (freq[char] || 0) + 1;
        
            
        if (freq[char] > maxCount) {
                maxCount = freq[char];
                maxChar = char;
            }
        
    }
    console.log(`Char '${maxChar}' appears ${maxCount} times`)
}

reapeatedChars(str);

//Q4

function withoutSeven() {
    for (let i = 1; i <= 200; i++) {
        let num = i;
        let numStr = num.toString();
        if (numStr.includes(7)) continue; 
        console.log(num);
 
    }
}
// withoutSeven();

// Q5
let obj2 = {
    name: "hemraj",
    age: 22,
    marks: 75,
    avg: function() {
        console.log("Function Is a  FUnction")
    },
    avg2: function() {
        console.log("Function Is a  FUnction")
    }
}
function onlyFunctions(obj) {
    return Object.fromEntries(
        Object.entries(obj).filter(([_, value]) => typeof value === "function")
    );
}

console.log(onlyFunctions(obj2)); 

//Q6
function maxKeysObject(arr) {
    if (arr.length === 0) return null;

    
    let maxObj = arr[0];
    for (let obj of arr) {
        if (Object.keys(obj).length > Object.keys(maxObj).length) {
            maxObj = obj;
        }
    }
    return maxObj;
}


let arr = [
    { a: 1, b: 2 },
    { x: 10, y: 20, z: 30 },
    { p: 5 }
];
console.log(maxKeysObject(arr)); 


//Q7.
function customMap(arr, callback) {
    if (typeof callback !== "function") {
        throw new TypeError("Callback must be a function");
    }
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        result[i] = callback(arr[i], i, arr);
    }
    return result;
}

let numbers = [1, 2, 3, 4];
let doubled = customMap(numbers, num => num * 2);
console.log(doubled); 

//Q8
function reverseWithUnshift(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        result.unshift(arr[i]); 
    }
    return result;
}


console.log(reverseWithUnshift([1, 2, 3, 4]));

function customReverse(arr) {
    let result = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        result[result.length] = arr[i];
    }
    return result;
}


console.log(customReverse([1, 2, 3, 4])); // [4, 3, 2, 1]

//Q9
function validateUser(userObj) {
    for (let key in userObj) {
        let value = userObj[key];
        if (typeof value !== "string" || value.trim() === "") {
            return false;
        }
    }
    return true;
}

console.log(validateUser({ name: "Hemraj", city: "Pune" }));
console.log(validateUser({ name: "Hemraj", age: 22 })); 
console.log(validateUser({ name: "Hemraj", city: "" })); 


//Q10
function generatePrimes(n) {
    let primes = [];
    let num = 2; // start checking from 2

    while (primes.length < n) {
        let isPrime = true;

        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                isPrime = false;
                break;
            }
        }

        if (isPrime) {
            primes.push(num);
        }
        num++;
    }

    return primes;
}

console.log(generatePrimes(100)); 
