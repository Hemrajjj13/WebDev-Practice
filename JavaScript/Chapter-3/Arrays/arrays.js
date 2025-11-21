/********************************************/
// Arrays Data Structures
/********************************************/
let students = ['Hemraj', 'Digvijay', 'Nischay'];
console.log(students[0]);
console.log(students[1].length);
console.log(students);
console.log(students.length);
console.log(typeof students);

let nums = [1, 2, 3, 4, 5];
console.log(nums);

let info = [1, 'Hemraj', 23, true, 6.97, nums];
console.log(info);

let emptyArr = [];
console.log(emptyArr);

//  Arrays are mutable
let fruits = ['mango', 'banana', 'apple'];
fruits[0] = 'pineapple';
console.log(fruits);
fruits[10] = 'papaya';
console.log(fruits);

/********************************************/
// Arrays Methods
/********************************************/
let cars = ['audi', 'bmw', 'maruti', 'xuv'];
console.log(cars);
cars.push('toyota', 'benz');
console.log(cars);
cars.pop();
console.log(cars);

cars.unshift('ferrari');
cars.unshift('mahindra');
console.log(cars);
cars.shift();
console.log(cars);