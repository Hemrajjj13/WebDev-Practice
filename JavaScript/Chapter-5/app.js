// Creating Object Literals
const student = {
    name: "Hemraj",
    age: 23,
    marks: 89
};
console.log(student);

const item = {
    price: 10.99,
    discount: 50,
    colors: ["red", "pink"]
}
console.log(item);

// Thread / Twitter Post 
// Create an object literal for properties of Thread / Twitter Post which include  -- username -- content -- likes -- reposts -- tags
let post = {
    username: "@hemrajjj13",
    content: "This is my #FirstPost",
    likes: 150,
    reposts: 5,
    tags: ["@hemraj", "@ApnaCollege"]
}
console.log(post)

//Get Values
console.log(student["age"]);
console.log(student.name);

const obj = {
    1: "a",
    2: "b",
    true: "c",
    null: "d",
    undefined: "e"
}
console.log(obj.null);
console.log(obj.undefined);
console.log(obj.true);
console.log(obj["1"]);

// Add / Update Values 
// Change the city ot mumbai -- Add a new property, gender: 'male' --  change marks to "a"

const student1 = {
    name: "Hemraj",
    age: 23,
    marks: 94.4,
    city: "Delhi"
};

student1.city = "Mumbai";
student1.gender = "Male";
student1.marks = 'A';
delete student1.age;
console.log(student1);

// Nested Objects
const classInfo = {
    aman: {
        grade: 'A+',
        city: "Delhi"
    },
    shraddha: {
        grade: 'O',
        city: "Pune"
    },
    karan: {
        grade: 'A',
        city: "Mumbai"
    }
};
console.log(classInfo);
console.log(classInfo.shraddha);
console.log(classInfo.aman.city);

// Array of Objects
const classInformation = [
    {
        name: "aman",
        grade: 'A+',
        city: "Delhi"
    },
    {
        name: "shraddha",
        grade: 'O',
        city: "Pune"
    },
    {
        name: "karan",
        grade: 'A',
        city: "Mumbai"
    }
];
console.log(classInformation);
console.log(classInformation[0]);
console.log(classInformation[0].name);

// Math Object
let n = -12
Math.abs(n);
Math.pow(n, n);
Math.floor(n);
Math.ceil(n);
Math.random();

// Random Objects

let randomNum;
randomNum = Math.floor(Math.random() * 10) + 1;

console.log(randomNum);

// Guessing Game
let max = prompt("enter the max number");
console.log(max);

const random = Math.floor(Math.random() * max) + 1;

let guess = prompt("guess the number");
while (true) {
    if (guess == 'quit') {
        console.log("user quit");
        break;
    }

    if (guess == random) {
        console.log("you are right, congrats !!", random);
        break;
    } else if (guess < random) {
        console.log("hint: your guess was to small, try again");
        guess = prompt("your guess was wrong. please try again!");
    } else if (guess > random) {
        console.log("hint: your guess was to large, try again");
        guess = prompt("your guess was wrong. please try again!");
    }
}

