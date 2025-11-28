// Q1
let nums = [10, 20, 30, 40, 50];
let ans1 = nums.every((ele) => ele % 10 == 0);
console.log(ans1);

// Q2
let arr =  [2, 3, 4, 5, 6, 7, 8, 9, 13, 35, 16];
getMin(arr);
function getMin(arr) {
    let  minElement = arr.reduce( (result, el) => {
        if (result < el) {
            return result;
        }
        return el;
    });
    console.log(minElement);
}

// Q1
let avgSal = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    return avg = (sum / arr.length);
}
console.log(avgSal(arr));

// Q2 
let newArray = arr.map((ele) => {
    return ele += 5;
});
console.log(newArray);

// Q3
let strArray = ["hemraj", "digvijay", "yash", "nishchay"];
let newStr = strArray.map( (str) => {
    return str.toUpperCase();
});
console.log(newStr)