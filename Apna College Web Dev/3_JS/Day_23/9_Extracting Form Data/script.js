// let form = document.querySelector("form");

// form.addEventListener("submit",function(event){
//     event.preventDefault();

//     let inp = document.querySelector("input");
//     console.dir(inp); 
//     console.log(inp.value); 
// });

// 2nd Method
// let form = document.querySelector("form");

// form.addEventListener("submit",function(event){
//     event.preventDefault();

//     let user = document.querySelector("#user");
//     let pass = document.querySelector("#pass");
    
//     console.log(user.value); 
//     console.log(pass.value); 

//     alert(`Hi ${user.value}, your password is set to ${pass.value}`);
// }); 

// 3rd Method
// let form = document.querySelector("form");

// form.addEventListener("submit",function(event){
//     event.preventDefault();
//     console.dir(form);
// });

// 4th Method
let form = document.querySelector("form");

form.addEventListener("submit",function(event){
    event.preventDefault();

    let user = this.elements[0];//form.elements[0]
    let pass = this.elements[0];
    
    console.log(user.value); 
    console.log(pass.value); 

    alert(`Hi ${user.value}, your password is set to ${pass.value}`);
});