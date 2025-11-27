//1. Write a function that takes a string and returns another string where all characters at even index are uppercase, and odd index are lowercase.
let str = "Hemraj";
function strEvenCaps(str) {
    let result = '';
    for (let i = 0; i < str.length; i++) {
        let tempResult;
        if (i % 2 === 0) {
            tempResult = str.charAt(i).toUpperCase();       
        }
        else {
            tempResult = str.charAt(i).toLowerCase();
        }   
        result = result.concat(tempResult);
    }
    console.log(result);
}
strEvenCaps(str);

// 2. Write a function that takes an object and prints all keys whose values are arrays.

function objToArr(obj) {
    let keys = Object.keys(obj);
    for (let i = 0; i < keys.length; i++) {
        let val = keys[i];
        if (Array.isArray(obj[val])) {
            console.log(val);
        }
    }
}

let obj = {
  name: ["hemraj"],
  age: 22,
  edu: "B.E.",
  skills: ["JavaScript", "Python"],
  details: { city: "Pune", pin: 411033 }
};
objToArr(obj);

// 3. Create a function that takes an array of numbers and returns a new array containing only numbers greater than the average.
let nums = [10, 20, 30, 400, 500,342]; 

function gtAvg(nums) {
    let greaterThanAvg = [];
    let total = 0;
    nums.forEach(n => {
        total += n;
    } );
    let avg = total / nums.length;
    console.log("Average: ", avg);
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > avg) {
            greaterThanAvg.push(nums[i]);
        }
    }
    console.log(greaterThanAvg);
}
gtAvg(nums);

//4. Write a function that finds the shortest string inside an array of strings.
let arrStr = ["Yash", "Nishcay", "Shubham", "Hemraj"];

console.log(arrStr[0].length);
function shortStr(arr) {
    let minLength = Infinity;
    let str;
    
    for (let i = 0; i < arr.length; i++) {
        let length = arrStr[i].length;
        if (length < minLength) {
            minLength = length;
            str = arrStr[i];
        }
    }
    console.log(minLength, str);
}
shortStr(arrStr);

// 5. Write a function that takes an object and prints only the numeric properties.

function onlyNumeric(obj) {

    let keys = Object.keys(obj);
    for (let i = 0; i < keys.length; i++) {
        let val = keys[i];
        if (typeof (obj[val]) === 'number') {
            console.log(val);
        }
    }
}

onlyNumeric(obj);