let btn = document.querySelector('button');
console.log(btn);

// btn.onclick = sayHello;

btn.addEventListener('click', sayHello)
function sayHello() {
    alert("Hello");
}

let a = document.querySelector('a');

a.addEventListener('click', function() {
    console.log("Callback")
})

console.log("HEllo")