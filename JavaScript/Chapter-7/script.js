// // 'this' in js

// const student = {
//     name: "Hemraj",
//     age: 23,
//     eng: 95,
//     math: 93,
//     phy: 97,
//     getAvg(){
//         console.log(this);
//         let avg  = (this.eng + this.math + this.phy) / 3;
//         console.log(`${this.name} got avg marks = ${avg}`);
//     }
// }
// student.getAvg();
// function getAvg() {
//     console.log(this);
// }
// getAvg();
// // window.prompt("enter something")
// console.log(typeof console);


// // Try & catch
// console.log("hello")
// console.log("hello")
// try {
//     console.log(a);
// } catch(err) {
//     console.error("variable a doesn't exist");
//     console.error("error occured here");
    
// }

// // Miscellaneous Topics
// //1. Arrow functions

// const add = (a, b) => {
//     console.log(a + b);
// }

// add(4, 56);

// const power = (a, b) => a**b; 
// console.log(power(4, 4));

// const hello = () => {
//     console.log("Hemraj");
// }
// hello();
// //implicit return
// const multiply = (a , b) => (a * b);

// let product =  multiply(2, 4);
// console.log(product);


// //setTimeout 
// // setTimeout(function, timeout)
// console.log("Hi There!")

// setTimeout(() => {
//     console.log("Playground");
// }, 100);

// console.log("Welcome to ");

// //setInterval
// //setInterval(function, timeout)
// let id = setInterval(() => {
//     console.log("Hemraj");
// }, 2000);
// console.log(id);

// let id2 = setInterval(() => {
//     console.log("On The Top");
// }, 2000);
// console.log(id2);


// setTimeout(() => {
//     clearInterval(id)
// }, 4000);


// 'this' with Arrow functions

const student2 = {
    name: 'Hemraj',
    marks: 100,
    prop: this, //global scope
    getName: function () {
        return this.name;
    },
    getMarks: () => {
        console.log(this);// parent scope - window
        return student2.marks;
    }
}
console.log(student2.getName());
console.log(student2.getMarks());