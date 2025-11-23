//Q1.
let a = "10"; 
let b = 5; 
console.log("1.", a - b + a);//510

// Q2.
console.log("2.", typeof NaN === "number"); //true

// Q3.
console.log("3 . Modify the content of an array");

//Q4.
console.log("4. both have diffrent memory block assigned, both have diffrent reference address");

//Q5.
console.log("5.", 5 + 3 * 2 ** 2 - 1); //16

//Q6.
console.log("6.", "NaN because x is not defined");
let x; console.log(x + 5);

//Q7.
console.log("7.", "5" * "2" + 3);

//Q8
console.log(`8. const a = 5; a++; it will give because a is defined as constant means we cannot change the value of a or assign new value to a`);

//Q9
console.log("10. value of num is 22");

//Q10
console.log("10.", 'true');

//Q11
console.log("11.", 'EY');

//Q12
console.log("12.", '4');

//Q13 
console.log("13.", 'It will print "cabca"');

//Q14.
console.log("14. false because both are strings but diffrent memory address ");

//Q15
let str1 = "     Apna College        ";
console.log("15.", str1.trim().toUpperCase());

//Q16
let str2 = "Hemraj";
if (str2[2] == str2[2].toLowerCase()) {
    console.log("15.", true);
}

//Q17
let str3 = "hello world";
let splitStr3 = str3.split(' ').reverse();
console.log("17.",splitStr3);

//Q18
let str4 = "Hemraj";
console.log("18.", str4.substring(str4.length-3));

//Q19
let str5 = "Hemraj";
for (let i = 0; i < str5.length; i++) {
    let char = str5[i];
    let isUnique = true;

    for (let j = 0; j < str5.length; j++) {

        if (i !== j && char === str5[j]) {
            isUnique = false;
            break;
        } 
    
    }
    if (isUnique) {
        console.log("19.", char);
        break;
    }
}


//Q20. 

let str6 = "Hemraj Suryawanshi";
let count = 0;

for (let i = 0; i < str6.length; i++) {
    
    if ("aeiou".includes(str6[i].toLowerCase())) {
        count++;
    }
}
console.log("20.", count);

//Q21
let arr=[1,2,3];
let copy=arr;
copy.push(4); 
console.log("21.", arr);

//Q22 
console.log([1,2] == [1,2]);
console.log("22.", false);

//Q23 
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let revArr = [];
let start = 0, end = array.length-1;

while(start < end) {
    revArr[start] = array[end];
    revArr[end] =array[start]
    start++;
    end--;
}
console.log("23.", revArr);

//Q24
console.log("24. SKIP");

//Q25.
let marks=[1,2,3,300,99];
marks.splice(4, 1, 100);
console.log("25.", marks);

//Q26.
let mergeArr = marks.concat(array);

for (let i = 0; i < mergeArr.length; i++) {
    let ele = mergeArr[i];
    for (let j = i+1; j < mergeArr.length; j++) {
        if (ele == mergeArr[j]) {
            mergeArr.splice(j, 1);
        }
    }
}
console.log("26.", mergeArr);

//Q27.
let nums = [12, 34, 3532, 123, 32329, 90];
let firstLargest = 0,  secondLargest = 0;
for (let i = 0; i < nums.length; i++) {
    if (nums[i] > firstLargest) {
        secondLargest = firstLargest;
        firstLargest = nums[i]
    }
    else if (nums[i] > secondLargest) {
        secondLargest = nums[i];
    }
}
console.log("27.", secondLargest);

//Q28
nums.shift();
nums.pop();
console.log("28.", nums);

//Q29 
console.log("29.")
let ab=[[1,2],[3,4],[5,6]];
for (let i = 0; i < ab.length; i++) {
    if (i < ab[i].length) {
        console.log(ab[i][i]);
    } else {
        console.log(ab[i][ab[i].length - 1]);
    }
}

//Q30
let beforeFlatten = [[1,2],[3,4],[5,6]];
let flattened = [];

for (let i = 0; i < beforeFlatten.length; i++) {
    for (let j = 0; j < beforeFlatten[i].length; j++) {
        flattened.push(beforeFlatten[i][j]);
    }
}
console.log("30.", flattened);
