function savetoDb(data, success, failure) {
    let internetSpeed = Math.floor(Math.random() * 10) + 1;
    if (internetSpeed > 4) {
        success();
    } else {
        failure();
    }
}

savetoDb(
    "Apna College",
    () => {
        console.log("Success : Your Data Was Saved ");
        savetoDb(
            "Hello World",
            () => {
                console.log("Success2 : data2 saved");
                savetoDb(
                    "Shradha",
                    () => {
                        console.log("Success3 : data3 saved");
                    },
                    () => {
                        console.log("faliure3 : weak connection");
                    }
                );
            },
            () => {
                console.log("faliure2 : weak connection");
            }
        );
    },
    () => {
        console.log("Faliure : Weak Connection. Data not Saved");
    }
);