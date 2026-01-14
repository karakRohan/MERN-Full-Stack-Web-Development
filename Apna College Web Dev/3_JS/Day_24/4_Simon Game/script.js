// let gameSeq = [];
// let userSeq = [];

// let btns = ["yellow", "red", "green", "purple"];

// let started = false;
// let level = 0;

// let h2 = document.querySelector("h2");

// document.addEventListener("keypress", function () {
//     // console.log("game started");
//     if (started == false) {
//         console.log("game is started");
//         started = true;

//         levelUp();
//     }
// });

// function gameFlash(btn) {
//     btn.classList.add("flash");
//     setTimeout(function () {
//         btn.classList.remove("flash");
//     }, 250);
// }

// function userFlash(btn) {
//     btn.classList.add("userflash");
//     setTimeout(function () {
//         btn.classList.remove("userflash");
//     }, 250);
// }

// function levelUp() {
//     userSeq = [];
//     level++;
//     h2.innerText = `Level ${level}`;

//     // Ramdom btn choose
//     let randIdx = Math.floor(Math.random() * 3);
//     let randColor = btns[randIdx];
//     let randBtn = document.querySelector(`.${randColor}`);
//     // console.log(randIdx);
//     // console.log(randColor);
//     // console.log(randBtn);
//     gameSeq.push(randColor);
//     console.log(gameSeq);
//     gameFlash(randBtn);
// }

// function checkAns(idx)
// {
//     // console.log("curr level : ", level);
//     // let idx = level-1;

//     if(userSeq[idx] === gameSeq[idx]){
//         if(userSeq.length == gameSeq.length){
//             // levelUp();
//             setTimeout(levelUp, 1000);
//         }
//     } else {
//         h2.innerHTML = `Game Over! Your Score Was <b>${level}</b> <br> Press any key to start.`;
//         document.querySelector("body").style.backgroundColor = "red";
//         setTimeout(function() {
//             document.querySelector("body").style.backgroundColor = "white";
//         }, 150);
//         reset();
//     }
// }

// function btnPress() {
//     // console.log(this);
//     let btn = this;
//     userFlash(btn);
//     userColor = btns.getAttribute("id");
//     // console.log(userColor); 
//     userSeq.push(userColor);

//     checkAns(userSeq.length-1);
// }
// let allBtns = document.querySelectorAll(".btn");
// for (btn of allBtns) {
//     btn.addEventListener("click", btnPress);
// }

// function reset() {
//     started = false;
//     gameSeq = [];
//     userSeq = [];
//     level = 0;
// }



// Srinjoy Code
let gameSeq=[];
let userSeq=[];
let boxes=["red","yellow","green","purple"];

let started=false;
let level=0;

let h2=document.querySelector("h2");
document.addEventListener("keypress",function(event){
    if(event.code=="Enter" && started==false){
        
        console.log("Game Started");
        started=true;

        levelUp(); 
    }
});

function gameFlash(button){//This button is only for taking inputs
    button.classList.add("gameFlash");
    setTimeout(function(){
        button.classList.remove("gameFlash");
    },300);
};
function userFlash(button){//This button is only for taking inputs
    button.classList.add("userFlash");
    setTimeout(function(){
        button.classList.remove("userFlash");
    },300);
};

function levelUp(){
    userSeq=[];
    level++;
    h2.innerText=`Level ${level}`;

    let randIndx=Math.floor(Math.random() * 3);
    let randColor=boxes[randIndx];
    let randBtn=document.querySelector(`.${randColor}`);
    
    gameSeq.push(randColor);
    console.log(gameSeq);
    console.log(userSeq);
    gameFlash(randBtn);
};

function checkBtn(index){
    if(userSeq[index] === gameSeq[index]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp,1000);
        };
    }else{
        h2.innerHTML=`Game Over!Your score is <b>${level}</b> <br>Press enter to start`;
        document.querySelector("body").style.background="red";
        setTimeout(function(){
            document.querySelector("body").style.background="antiquewhite";
        },150);
        reset();
    }
};
function btnPress(){
    let btn=this;
    userFlash(btn);

    let userColor=btn.getAttribute("id");
    userSeq.push(userColor);

    checkBtn(userSeq.length-1);
};
let allBtns=document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
};

function reset(){
    started=false;
    level=0;
    gameSeq=[];
    userSeq=[];
};