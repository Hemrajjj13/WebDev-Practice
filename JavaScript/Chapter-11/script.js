// call stack
function hello() {
    console.log("Inside hello function")
    console.log("hello");
}

function demo() {
    console.log("Calling hello function");
    hello();
}


console.log("Calling demo function");
demo();
console.log("DONE");

