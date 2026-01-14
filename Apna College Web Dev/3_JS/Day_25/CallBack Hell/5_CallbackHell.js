h1 = document.querySelector("h1");

// setTimeout(() =>{
//     h1.style.color = "red";
// },2000);

// setTimeout(() =>{
//     h1.style.color = "orange";
// },3000);

// setTimeout(() =>{
//     h1.style.color = "green";
// },4000);

// 2nd Method
function changeColor(color, delay, nextColorChange) {
    setTimeout(() => {
        h1.style.color = color;
        if(nextColorChange) nextColorChange();
    }, delay);
}

// Callbacks nesting -> callback hell
changeColor("red", 500, () => {
    changeColor("orange", 500, () => {
        changeColor("green", 500, () => {
            changeColor("yellow", 500, () => {
                changeColor("purple", 500, () => {
                    changeColor("blue", 500, () => {
                        changeColor("deeppink", 500);
                    });
                });
            });
        });
    });
});



