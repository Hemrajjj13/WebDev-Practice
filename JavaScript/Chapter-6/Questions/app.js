//Q1
function prinPoem() {
    console.log("Twinkle Twinkle LIttle Star");
    console.log("how I wander what you are");
}
prinPoem();

//Q2 
function rollADice() {
    let random = Math.floor(Math.random() * 6) + 1;
    // alert(random);
    console.log(random);
}
rollADice();

//Q3
function avgOfThree(a, b, c) {
    let avg = (a + b + c) / 3;
    console.log(avg);
}
avgOfThree(1, 2, 4);
avgOfThree(10, 20, 15);

//Q4
function printTable(n) {
    for (let i = 1; i <= 10; i++) {
        console.log(i * n);
    }
}
// printTable(5);
printTable(73);

//Q5
function sumOfNums(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum = sum + i;
    }
    return sum;
}
console.log(sumOfNums(5));

//Q6
let str = ["Hermaj", "is", "22", "years", "old", "."];
function concatSrtings() {
    let concatStr = '';
    for (let i = 0; i < str.length; i++) {
        concatStr += str[i];
    }
    return concatStr;
}

let s = concatSrtings();
console.log(s);

//Q7
let arr = [99, 67, 34, 45, 50, 78, 90, 10, 20];
let num = 35;
function largeThanNum(num) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > num) {
            console.log(arr[i]);
        }
        
    }
}
largeThanNum(num);

//Q8
let str1 = "abcdabcdefggh";
let ans ='';
function forAns(str1) {
    for (let i = 0; i < str1.length; i++) {
        if (!ans.includes(str1[i])) {
            ans += str1[i];
        }
    }
    console.log(ans);
}
forAns(str1);


//Q9
let country = ["Australia", "Germany", "United States of America"];
function output(country){
    let op = ''
    for (let i = 0; i < country.length; i++) {
        if (op.length < country[i].length) {
            op = country[i];
        }
    }
    console.log(op)
}
output(country);

//Q5 
let start = 5, end = 35;
function randomNum(start = 1, end = 5) {
    let random;

    if (start > end) {
        console.log("Invalid Range");
        return;
    }
    random = Math.floor(Math.random() * end) + 1;
    console.log(random);
}
randomNum(start, end);