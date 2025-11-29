// getElementById()
let imgObject = document.getElementById("mainImg");
console.log(imgObject);

// getElementsByClassName()
let smallImages = document.getElementsByClassName("oldImg");
console.log(smallImages);

for (let i = 0; i < smallImages.length; i++) {
    smallImages[i].src = "assets/spiderman_img.png";
    console.log(`value of imge ${i} is changed`);
}

// getElementsByTagName()
document.getElementsByTagName("p");

//  querySelector() / querySelectorAll()

console.log(document.querySelector("p"));
console.log(document.querySelector("#description"));
console.log(document.querySelector(".box"))
console.log(document.querySelectorAll("div a"));

// 