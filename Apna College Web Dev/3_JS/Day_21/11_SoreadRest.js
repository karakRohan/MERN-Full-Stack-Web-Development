// function sum (...args){ // arguments
//     for(let i=0; i<args.length; i++){
//         console.log("You Gave Us : ", args[i]);
//     }
// }
// function min(a,b,c,d)
// {
//     console.log(arguments);
//     console.log(arguments.length);
//     arguments.push(1);
// }

// 2nd Method
function sum(...args) {
    return arguments.reduce((sum, el) => sum + el); //arguments[0]
}

function min(msg,...args) {
    console.log(msg);
    return args.reduce((min, el) => {
        if (min > el) {
            return el;
        } else {
            return min;
        }
    });
}