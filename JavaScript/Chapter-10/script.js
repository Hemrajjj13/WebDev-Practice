// let btn = document.querySelector('button');
// console.log(btn);

// // btn.onclick = sayHello;

// btn.addEventListener('click', sayHello)
// function sayHello() {
//     alert("Hello");
// }

// let a = document.querySelector('a');

// a.addEventListener('click', function() {
//     console.log("Callback")
// })

// console.log("HEllo")

let form = document.querySelector("form");

form.addEventListener("submit", (event) => {
    event.preventDefault();
//     // alert("form submitted");

//     let input = document.querySelector("input");
//     console.log(input.value);
});

let input = document.querySelector("input");

input.addEventListener("change", function () {
    console.log("input changed");
    console.log("final value =", this.value);
})
