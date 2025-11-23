//Q1
let arr = [1, 2, 3, 4, 5, 6, 2, 3];
let num = 3;

for (let i = 0; i < arr.length; i++) {
    if (num == arr[i]) {
        arr.splice(i, 1);
    }
}
console.log(arr);

//Q2
let number = 287152, count = 0;

while (number > 0) {
    number = Math.floor(number / 10);
    count++;
}
console.log(count);


//Q3
let numSum = 287152
let sum = 0;
while (numSum > 0) {
    rem = numSum % 10;
    sum = sum + rem;
    numSum = Math.floor(numSum / 10);
    
}
console.log(sum);


//Q5 
let n = 7;
let fact = 1;
for (let i = 1; i <= n; i++) {
    fact = fact * i;
}
console.log(fact);

//Q6
let array = [1, 2, 3, 4, 5, 6, 89, 76, 23];
let largestNum = 0;

for (let i = 0; i < array.length; i++) {
    if (array[i] > largestNum) {
        largestNum = array[i];
    }
}
console.log(largestNum);