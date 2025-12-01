let para1 = document.createElement("p");
para1.innerText = "Hey I'm Red.";
document.querySelector("body").prepend(para1);
para1.classList.add("red");


let h3 = document.createElement("h3");
h3.innerText = "Hey I'm Blue.";
document.querySelector("body").prepend(h3);
h3.classList.add("blue");
console.log(h3.classList);

let div = document.createElement("div");
let h1 = document.createElement("h1");
let para2 = document.createElement("p");

h1.innerText = "Im in a Div.";
para2.innerText = "Me Too";

div.append(h1);
div.append(para2);
div.classList.add("box");

document.querySelector("body").prepend(div);

