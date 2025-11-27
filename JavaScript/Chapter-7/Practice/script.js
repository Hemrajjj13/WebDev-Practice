//Q1
let squareOf = (n) => n * n;
console.log(squareOf(5));

//Q2

function fiveTimes() {
    let id = setInterval(() => {
        console.log("Hello world ");
    }, 2000);
    setTimeout(() => {
        clearInterval(id);
    }, 10001);
}
fiveTimes();