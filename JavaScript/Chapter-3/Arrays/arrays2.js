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
cars.reverse();
console.log(cars);

// 5. array.slice(start, end(optional))
let carsSlice =  cars.slice(0, 1);
console.log(carsSlice);

//6. array.splice(start, deleteCount, item0....itemN)
let colors = ['red', 'yellow', 'blue', 'orange', 'pink', 'white'];
colors.splice(5, 1, ['orange', 'lime', 'green', 'black']);
console.log(colors);
colors[5].splice(1, 1, 'GRAY');
// colors.splice(0);
console.log(colors);

colors.splice(0, 0, 'Light Blue', 'Dark Blue');//It will only add elements without deleting any element
console.log(colors);

//7. arrays.sort()
colors.sort();
console.log(colors);

let marks = [10, 42, 67, 89, 34100, 99, 100];
console.log(marks.sort());