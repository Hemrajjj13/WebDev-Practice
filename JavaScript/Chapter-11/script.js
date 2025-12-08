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

// callback hell
h1 = document.querySelector("h1");
 
function changeColor(color, delay, nextColorChange) {
    setTimeout(() => {
        h1.style.color = color;
        if (nextColorChange) nextColorChange();
    }, delay);
}

changeColor("red", 1000, () => {
    changeColor("orange", 1000, () => {
        changeColor("yellow", 1000);
    })
})
// callback nesting -> callback hell

