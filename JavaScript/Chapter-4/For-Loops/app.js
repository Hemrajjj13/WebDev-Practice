//For Loop

for (let i = 0; i <= 5; i++) {
    console.log(i + 1);
}

for (let i = 50; i >= 1; i--) {
    console.log(i + 1);
}


/***************************************/
console.log("To Print Odd Numbers: ");
console.log("Forwards");
for (let i = 1; i <= 15; i += 2) {
    if (i % 2 != 0) {
        console.log(i);
    }
}
console.log("Backwards");
for (let i = 15; i >= 1; i -= 2) {
    if (i % 2 != 0) {
        console.log(i);
    }
}

/***************************************/
console.log("To Print Even Numbers: ");
console.log("Forwards");
for (let i = 2; i <= 10; i += 2) {
    if (i % 2 == 0) {
        console.log(i);
    }
}
console.log("Backwards");
for (let i = 10; i >= 2; i -= 2) {
    if (i % 2 == 0) {
        console.log(i);
    }
}


/***************************************/
// Infinite Loops
/***************************************/
/*
for (let i = 1; i >= 0; i++) {

}
for (let i = 1; i <= 5; i--) {
    
}
for (let i = 1; i++) {
    
}
*/

/***************************************/
// let n = prompt('Enter a number to print its table');
let n = 8;
n = parseInt(n);
console.log(`Table of ${n}`);
for (let i = 1; i <= 10; i++) {
    console.log(i * n);
}
console.log(`Table of ${(n + 5)}`);
for (let i = (n + 5); i <= (n + 5)*10; i = i + (n + 5)) {
    console.log(i);
}

/***************************************/
// Nested For Loop
/***************************************/
for (let i = 1; i <= 10; i++) {
    console.log(`Outer Loop:${i}`);
    for (let j = 1; j <= 5; j++){
        console.log(j);
    }
}