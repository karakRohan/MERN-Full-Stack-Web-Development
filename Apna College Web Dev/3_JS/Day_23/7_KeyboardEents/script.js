// let btn = document.querySelector("button");

// btn.addEventListener("click", function(event){
//     console.log(event);
//     console.log("button clicked");
// });

// btn.addEventListener("dblclick", function(event){
//     console.log(event);
//     console.log("button clicked");
// });

// 2nd Method
let inp = document.querySelector("input");

inp.addEventListener("keydown", function (event) {
    // console.log("key = ",event.key);    
    console.log("code = ", event.code); //ArrowUp(U), ArrowDown(D), ArrowLeft(L), ArrowRight(R)  
    if (event.code == "keyU") {
        console.log("Character Moves up");
    } else if (event.code == "keyD") {
        console.log("Character Moves Down");
    } else if (event.code == "keyL") { 
        console.log("Character Moves Left");
    } else if (event.code == "keyR") {
        console.log("Character Moves Right");
    }
    // console.log("key was pressed");
});

// inp.addEventListener("keyup", function () {
//     console.log("key was released");
// });