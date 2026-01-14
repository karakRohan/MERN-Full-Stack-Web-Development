// let todo = [];

// let req = prompt("Please Enter your Request");
// // console.log(req);
// while (true) {
//     if (req == "quit") {
//         console.log("Quitting App");
//         break;
//     }

//     if (req == "list") {
//         console.log("----------");
//         for (let i = 0; i < todo.length; i++) {
//             console.log(i, todo[i]);
//         }
//         console.log("----------");
//     }
//     else if (req == "Add") {
//         let task = prompt("Please Enter the task you want to add");
//         todo.push(task);
//         console.log("Task Added");
//     }
//     else if (req == "Delete");
//     {
//         let idx = prompt("Please Enter the task index");
//         todo.splice(idx, 1);
//         console.log("Task Deleted");
//     } else {
//         console.log("wrong request");
//     }

//     req = prompt("Please Enter your Request");
// }





let todo = [];

let req = prompt("Please Enter your Request");

while (true) {
    if (req == "quit") {
        console.log("Quitting App");
        break;
    }

    if (req == "list") {
        console.log("----------");
        for (let i = 0; i < todo.length; i++) {
            console.log(i, todo[i]);
        }
        console.log("----------");
    }
    else if (req == "Add") {
        let task = prompt("Please Enter the task you want to add");
        todo.push(task);
        console.log("Task Added");
    }
    else if (req == "Delete") { // Removed the semicolon here
        let idx = parseInt(prompt("Please Enter the task index")); // Ensure idx is a number
        if (!isNaN(idx) && idx >= 0 && idx < todo.length) {
            todo.splice(idx, 1);
            console.log("Task Deleted");
        } else {
            console.log("Invalid Index");
        }
    }
    else {
        console.log("Wrong request");
    }

    req = prompt("Please Enter your Request");
}
