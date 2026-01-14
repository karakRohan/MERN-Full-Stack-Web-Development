const student = {
    name:"karan",
    age: 14,
    class:9,
    subject: ["Hindi","English","Math","Science"],
    username : "karan@123",
    password : "abcd",
}

let {username : user,password : secret, city :place = "Kolkata"} = student;
// let password = student.password