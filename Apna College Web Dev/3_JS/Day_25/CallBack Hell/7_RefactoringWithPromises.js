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

// savetoDb("apna College");