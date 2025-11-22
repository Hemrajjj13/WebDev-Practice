// While Loops 
console.log("While Loops");
console.log('');


console.log("Forwards");
let i = 2; // intialisation

while (i <= 20) { //condition
    console.log(i);
    i += 2;    // updation
}

console.log("Backwards");
let j = 5; // intialisation

while (j >= 1) { //condition
    console.log(j);
    j--;    // updation
}


/*
// Favourite movie guess game
console.log("Favourite Movie");

const favMovie = "Avatar";
let guess = prompt("Enter movie name");
while ((guess != favMovie)) {
    if (guess == "quit") {
        console.log("thank you for playing");
        break;
    }
    guess = prompt("Wrong guess please try again");
}
if (guess == favMovie) {
    console.log("Correct Guess");
}
*/


console.log('')
// break keyword
console.log('Break yword use in loops')
let k = 1;

while (k <= 10) {
    if (k == 5) {
        break;
    }
    console.log(k);
    k++;
}

// Loops With arrays 
let fruits = ["mango", "apple", "banana", "litchi", "orange"];
fruits.push('Pineapple');
for (let i = fruits.length; i >= 0; i--) {
    console.log(fruits[i]);
}

// Loops With Nested arrays 
let heroes = [["ironman", "spiderman", "thor"], ["superman", "batman", "flash"]];

for (let i = 0; i < heroes.length; i++) {
    console.log(`List #${i+1}`, i, heroes[i], heroes[i].length);

    for (let j = 0; j < heroes[i].length; j++) {
        console.log(`j=${j}, ${heroes[i][j]}`);
    }
}
