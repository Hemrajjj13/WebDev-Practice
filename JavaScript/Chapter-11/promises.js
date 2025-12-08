console.log("******** Promises ********");
// Promises - it represents the eventual completion (or failure of an asynchrous operation)

// function svaToDb(data, success, failure) {
//     let internetSpeed = Math.floor(Math.random()*10);

//     if (internetSpeed > 4) {
//         success();
//     } else {
//         failure();
//     }

// }

// saveToDb(
//     "Hemraj Suryawanshi", 
//     () => {
//         console.log("success: your data was saved");
//         svaToDb("Hello world",
//             () => {
//                 console.log("success2: your data2 was saved")
//             },
//             () => {
//                 console.log("failure2: weak connection. data2 not saved");
//             }
//         )
//     }, 
//     () => {
//         console.log("failure: weak connection. data not saved");
//     }
// );

function saveToDb(data) {

    return new Promise((resolve, reject) => {
        let internetSpeed = Math.floor(Math.random()*10) + 1;

        if (internetSpeed > 4) {
            resolve("success: Data saved ");
        } else {
            reject("failed: Data not daved ");
        }
    });
}


// then() & catch()

// saveToDb("Hemraj")
//     .then(() => {
//         console.log("promise was resolved");
//     })
//     .catch(() => {
//         console.error("promise was rejected");
//     })


// promise chaining
saveToDb("Hemraj")
    .then((result) => {
        console.log("data1 saved");
        console.log("result of promise:", result);
        return saveToDb("hello world");
    })
    .then((result) => {
        console.log("data2 saved");
        console.log("result of promise:", result);
        return saveToDb("data 3");
    })
    .then((result) => {
        console.log("data3 saved");
        console.log("result of promise:", result);
    })
    .catch((error) => {
        console.log("promise was rejected");
        console.log("error of promise:", error);
    })