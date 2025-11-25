// 2. Given a nested object of students → return the student with highest marks using a function.

let students = {
    stud1: {name: "Hemraj", marks: 89},
    stud2: {name: "Digvijay", marks: 83},
    stud3: {name: "Yash", marks: 79},
    stud4: {name: "Nischay",  marks: 88}
}

function highestMarks(students) {
    let topStudent = null;
    let highestMarks = -Infinity;

    for (let key in students) {
        if (students[key].marks > highestMarks) {
            highestMarks = students[key].marks;
            topStudent = students[key]
        }
    }
    return topStudent;
}

const topper = highestMarks(students);

// 3. Write a function to deeply clone an object without using structuredClone or JSON methods.
let forClone = {
  name: "hemraj",
  age: 22,
  edu: "B.E.",
  skills: ["JavaScript", "Python"],
  details: { city: "Pune", pin: 411033 }
};


function deepClone(obj) {
    // Handle null or non-object (primitive values)
    if (obj === null || typeof obj !== "object") {
        return obj;
    }
    // Handle Date 
    if (obj instanceof Date) {
        return new Date(obj.getTime());
    }

    // Handle Array 
    if (Array.isArray(obj)) {
        let copy = [];
        for (let i = 0; i < obj.length; i++) {
            copy[i] = deepClone(obj[i]);
        }
        return copy;
    }

    // Handle Object 
    let copy = {}
    for (let key in obj) {
        copy[key] = deepClone(obj[key]);
    }
    return copy;
    
}

let clonedObj = deepClone(forClone);

console.log("Original:", forClone);
console.log("Cloned:", clonedObj);

clonedObj.details.city = "Mumbai";
clonedObj.skills.push("java");

console.log("After Modification");
console.log("Original:", forClone);
console.log("Cloned:", clonedObj);

// 4. Create a function that takes an object and returns an array of all keys whose values are numbers.

let obj = {
  name: "hemraj",
  age: 22,
  edu: "B.E.",
  skills: ["JavaScript", "Python"],
  details: { city: "Pune", pin: 411033 }
};
function objToArray(obj) {
    let result = []
    for (let key in obj) {
        if (typeof obj[key] === "number") {
            result.push(key);
        }
    }
    return result;
}
console.log(objToArray(obj));

// 5. Given an array of objects representing items in a cart, write a function to calculate total bill after discounts.
const cart = [
  { name: "Item A", price: 100, discount: 10 }, // 10% off
  { name: "Item B", price: 200, discount: 20 }, // 20% off
  { name: "Item C", price: 50,  discount: 0  }  // no discount
];
function calcTotalBill(cart) {
    return cart.reduce((total, item) => {
        const discountPrice = item.price - (item.price  * item.discount / 100);
        return total + discountPrice;
    }, 0);
}

const total = calcTotalBill(cart);
console.log("Total Bill:", Math.round(total));

// 6. Write a function that takes two objects and returns true if they have identical key-value pairs, false otherwise.
function areObjectsEqual(obj1, obj2) {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) {
    return false;
  }
  for (let key of keys1) {
    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }

  return true;
}

let objA = { name: "hemraj", age: 22, edu: "B.E." };
let objB = { name: "hemraj", age: 22, edu: "B.E." };
let objC = { name: "hemraj", age: 22, edu: "M.E." };

console.log(areObjectsEqual(objA, objB)); // true
console.log(areObjectsEqual(objA, objC)); // false

// 
console.log([1] + [2,3] - "1");
console.log(5 + 3 * 2 ** 2 - 10 / 2);