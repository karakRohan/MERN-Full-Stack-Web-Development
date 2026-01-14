h1 = document.querySelector("h1");

function changeColor(color, delay) {
     return new Promise((resolve, reject) => {
        setTimeout(() => {
            h1.style.color = color;
            resolve("Color Changed");
        }, delay);
    });
}

changeColor("red", 1000)
.then(() => {
    console.log("red Color Was Completed");
    return changeColor("orange",1000);
})
.then(() => {
    console.log("orange Color Was Completed");
    return changeColor("green",1000);
})
.then(() => {
    console.log("green Color Was Completed");
    return changeColor("blue",1000);
})
.then(() => {
    console.log("blue Color Was Completed");
    return changeColor("DeepPink",1000);
})
.then(() => {
    console.log("DeepPink Color Was Completed");
    return changeColor("purple",1000);
})
.then(() => {
    console.log("purple Color Was Completed");
    return changeColor("yellow",1000);
})
.then(() => {
    console.log("yellow Color Was Completed");
});
