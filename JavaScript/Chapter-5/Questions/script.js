//Q1
let max = 6;
let random = Math.floor(Math.random() * max) + 1;
console.log(random);

//Q2
const car = {
    name: ["swift", "breeza", "nexon"],
    model: ["vdi", "zxi", "tata"],
    color: "white"
}
console.log(car.name);
for (carName of car.name) {
    console.log(carName)
}

//Q3
const person = {
    name: "Digvijay",
    age: 22,
    city: "washington"
}

console.log(person);

person.city = "New York";
console.log(person);
