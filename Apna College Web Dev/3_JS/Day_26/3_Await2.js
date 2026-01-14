h1 = document.querySelector("h1");

function changeColor(color, delay) {
     return new Promise((resolve, reject) => {
        setTimeout(() => {
            let num = Math.floor(Math.random() * 5) + 1;
            if (num > 3) {
                reject("Promise rejected");
            }

            h1.style.color = color;
            console.log(`Color Changed to ${color}!`);
            resolve("Color Changed");
        }, delay);
    });
}

async function demo() {
    try {
        await changeColor("red", 1000);
        await changeColor("orange", 1000);
        await changeColor("blue", 1000);
        changeColor("green", 1000);
    } catch(err) {
        console.log("Error Caught");
        console.log(err);
    }
    
    let a = 5;
    console.log(a);
    console.log("New Number = ", a+3);
}

// call [demo()]