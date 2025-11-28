// Array Methods
// 1. arr.forEach(fun defination)

// let arr1 = [1, 2, 3, 4, 5, 6, 7, 8]

// arr1.forEach(el => {
//     console.log(el)
// });

let students = [{
    name: "Hemraj",
    marks:95,
}, {
    name: "Nischay",
    marks:85,
}, {
    name: "Yash",
    marks:75,
}];

students.forEach(student => {
    console.log(student.marks)
});

let gpa = students.map(el => {
    return el.marks / 10;
});
console.log(gpa)

// 2. arr.map()

let arr3 = [1, 2, 3, 4];

let doubled = arr3.map(el => el * 2);
console.log(doubled);

// 3. arr.filter()

let arr4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 13, 35, 16];

let ans = arr4.filter( (el) => {
    return el > 5; 
});
console.log(ans);

// 4. arr.every 
let arr5 =  [1, 2, 3, 4, 5, 6, 7, 8, 9, 13, 35, 16];

let forEvery = arr5.every( el => {
    return el > 0;
});
console.log(forEvery);

// 4. arr.some
let forSome = arr5.some( el => {
    return el < 5;
})
console.log(forSome)

// 5. arr.reduce((result, ele) => ())
let arr6 =  [2, 3, 4, 5, 6, 7, 8, 9, 13, 35, 16];
let  reducedArray = arr6.reduce( (result, el) => {
    if (result < el) {
        return el;
    }
    return result;
});
console.log(reducedArray);

// Default parameters
function sum(a, b = 5) {
    console.log(a + b);
}
sum(2);

// Spread ...
let numbers = [];
numbers.push(..."Hemraj Suryawanshi");
console.log(numbers);

let arr7 =  [2, 3, 4, 5, 6, 7, 8, 9, 13, 35, 16];
let copyArr7 = [...arr7];

console.log(Math.min(...arr7));

console.log([..."ALL the STARS", ..."Panther Intro"]);

const data = {
    email: "irongolem@gmail.com",
    pass: "abcd"
}

const dataCopy = {...data, id: 123, country: "India", ...arr7};
console.log(dataCopy);

// Rest

function sum(...args) {
    for (let i = 0; args < args.length; i++) {
        console.log(args[i]);
    }
}
console.log(sum(2, 3, 4, 5, 6, 7, 8, 9, 13, 35, 16)); 

// destructuring arrays an objects