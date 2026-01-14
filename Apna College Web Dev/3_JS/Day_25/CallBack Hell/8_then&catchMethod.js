function savetoDb(data) {
    return new Promise((resolve, reject) => {
        let internetSpeed = Math.floor(Math.random() * 10) + 1;
        if (internetSpeed > 4) {
            resolve("Success : Data Was Saved ");
        } else {
            reject("Faliure : weak connection");
        }
    });
}

// 1st Method
// let request = savetoDb("apna College"); //request = promise object
// // console.log(request);
// request.then(() => {
//     console.log("Promise Was Resolved");
//     console.log(request);
// })
// .catch(() => {
//     console.log("Promise Was Rejected");
//     console.log(request);
// });

// 2nd Method
savetoDb("apna College") //request = promise object
    .then(() => {
        console.log("Promise Was Resolved");
    })
    .catch(() => {
        console.log("Promise Was Rejected");
    });