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

 
savetoDb("apna College") 
    .then((result) => {
        console.log("data1 saved");
        console.log("Result Of Promise : ",result);
        return savetoDb("helloworld");
    })
    .then((result) => {
        console.log("data2 saved");
        console.log("Result Of Promise : ",result);
        return savetoDb("shradha");
    })
    .then((result) => {
        console.log("data3 saved");
        console.log("Result Of Promise : ",result);
    })
    .catch((error) => {
        console.log("Promise Was Rejected");
        console.log("Error Of Promise : ",error);
    });