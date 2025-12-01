/*********************  ACCESSING ELEMENTS  **********************/

// getElementById()
let img = document.getElementById("mainImg");
console.log(img);

// getElementsByClassName()
let smallImages = document.getElementsByClassName("oldImg");
console.log(smallImages);

// getElementsByTagName()
let allParagraphs = document.getElementsByTagName("p");

// querySelector / querySelectorAll
let paraG = document.querySelector("p");
console.log(document.querySelector("#description"));
console.log(document.querySelector(".box"));
console.log(document.querySelectorAll("div a"));


/*********************  MANIPULATING CONTENT  **********************/

console.log(paraG.textContent);
console.log(paraG.innerText);
console.log(paraG.innerHTML);


/*********************  MANIPULATING ATTRIBUTES  **********************/

console.log(img.getAttribute("id"));
// img.setAttribute("src", "assets/creation_2.jpeg");


/*********************  MANIPULATING STYLES  **********************/

img.style.border = "3px solid purple";

let links = document.querySelectorAll(".box a");
for (let link of links) {
    link.style.color = "crimson";
}


/*********************  CLASSLIST (ADD / REMOVE / TOGGLE)  **********************/

console.log(img.classList);

let heading = document.querySelector("h1");
heading.classList.add("red");

console.log(heading.classList);
console.log(heading.classList.contains("red"));

heading.classList.toggle("red");

let box = document.querySelector(".box");
box.classList.toggle("yellowBg");


/*********************  NAVIGATION (PARENT / CHILDREN)  **********************/

let h4 = document.querySelector("h4");
console.log(h4.parentElement);
console.log(box.children);
console.log(box.childElementCount);


/*********************  ADDING ELEMENTS  **********************/

let newP = document.createElement("p");
newP.innerText = "Hi, I am newP.";

box.appendChild(newP);
box.prepend(newP);

let btn = document.createElement("button");
btn.innerText = "Click Me";

box.appendChild(btn);
newP.append(" this is new text");

let firstPara = document.querySelector("p");
firstPara.insertAdjacentElement("afterbegin", btn);


/*********************  REMOVING ELEMENTS  **********************/

let h2 = document.querySelector("h2");
if (h2) {
    h2.remove(); // Safely remove if it exists
}
