console.log('====================================');
console.log("Conditional Sattements");
console.log('====================================');
console.log("if, if else, else if");

let age = 'Hemraj';
if (age >= 18) {
    console.log("You can vote");
} else if (age < 18){
    console.log("You can not vote");
} else {
    console.log('Not a valid age');
}

console.log("Nested if");

let marks = 90;

if (marks >=36) {
    if (marks > 80) {
        console.log("A Grade");
    } else {
        console.log("Pass");
    }
} else {
    console.log("Appear for next attempt");
}

console.log('====================================');
console.log("Switch Statement");
console.log('====================================');

let color = 'green';

switch (color) {
    case "red":
        console.log("STOP");
        break;
    case "yellow":
        console.log("STOP");
        break;
    case "green":
        console.log("STOP");
        break;
    default:
        break;
}