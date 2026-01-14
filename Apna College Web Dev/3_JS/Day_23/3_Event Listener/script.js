// let btn = document.querySelector("button");
// console.log(btn);

// let btns = document.querySelectorAll("button");
// for(btn of btns) {
//     btn.onclick = sayHello;
//     btn.onmouseenter = function()
//     {
//         console.log("You Entered a Button");
//     }
//     console.dir(btn);
// }

// console.log() = btn.onclick;

// btn.onclick = function ()
// {
//     // console.log("Button Was Clicked");
//     alert("Button Was Clicked");
// };

// function sayHello()
// {
//     alert("Hello");
// }
// btn.onclick = sayHello;


// video 03 :-
let btns = document.querySelectorAll("button");
for(btn of btns) {
    // btn.onclick = sayHello;
    // btn.onclick = sayName;   
    
    // btn.addEventListener("click",sayHello);
    // btn.addEventListener("click",sayName);
    btn.addEventListener("dblclick", function(){
        console.log("You Double Clicked Me");
    });
}
function sayHello()
{
    alert("Hello");
}
function sayName()
{
    alert("Rohan Karak");
}
