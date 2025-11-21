// 1. arr.indexof();

let primary = ['red', 'yellow', 'blue'];
console.log(primary.indexOf('yellow'));
console.log(primary.indexOf('green'));

// 2. arr.icludes 

console.log(primary.includes('yellow'));
console.log(primary.includes('green'));

// 3. arr1.concat(arr2)
let cars = ['benz', 'mahindra', 'tata', 'toyota', 'bmw'];

let merge1 = cars.concat(primary);
console.log(merge1);

let merge2 = primary.concat(primary);
console.log(merge2);

let merge3 = primary.concat(cars);
console.log(merge3);

//4.  arr.reverse()
console.log(cars.reverse());
