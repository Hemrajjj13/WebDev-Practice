/*
let x = ([] == []) //-->false
[1] == [1] //-->false
[] === [] //-->false
[1] === [1] //-->false

 */

// Array References
let arr = ['a', 'b', 'c'];
let arrCopy = arr;

console.log(arr == arrCopy);
console.log(arr === arrCopy);

arr.push('d');
console.log(arr, arrCopy);

arrCopy.pop();
console.log(arr, arrCopy);

let fakeArr = ['a', 'b', 'c'];
console.log(arr = fakeArr);


//Array Consatnts 
const arr1 = [1, 2, 3, 4];
arr.push(4);
console.log(arr1);

/* Here values are not constant arr1(address /  reference) is conctant */

// Nested Arrays 

let arr2 = [1, 2, 3, 4, [1, 2, 3, 4], ['red', 'yellow', 'blue', 'orange', 'pink', 'white']];

console.log(arr2);

console.log(arr2[4]);
console.log(arr2[4].length);