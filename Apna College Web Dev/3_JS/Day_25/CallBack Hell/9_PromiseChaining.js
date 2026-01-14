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

//1st Method
// savetoDb("apna College") 
//     .then(() => {
//         console.log("data1 saved");
//         savetoDb("helloworld").then(() => {
//             console.log("data1 saved");
//         })
//     })
//     .catch(() => {
//         console.log("Promise Was Rejected");
//     });

// 2nd Method

savetoDb("apna College") 
    .then(() => {
        console.log("data1 saved");
        return savetoDb("helloworld");
    })
    .then(() => {
        console.log("data2 saved");
        return savetoDb("shradha");
    })
    .then(() => {
        console.log("data3 saved");
    })
    .catch(() => {
        console.log("Promise Was Rejected");
    });