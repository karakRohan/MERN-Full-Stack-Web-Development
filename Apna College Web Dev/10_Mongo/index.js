const mongoose = require('mongoose');

// let url = "https://localhost:8080/users"

// mongoose.connect('mongodb://127.0.0.1:27017/test');

main()
    .then(() => {
        console.log("connection successful");
    })
    .catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number,
});

const User = mongoose.model("User", userSchema);

// User.updateOne({name: "Rony"}, {age: 30})
User.updateOne({age:{$gt:48}}, {age: 55})
.then((res) => {
    console.log(res);   
})
.catch((err) => {
    console.log(err);
});

// User.findById("6486f4f4f0d5c0e1b8a1c123")
// .then((res) => {
//     console.log(res);
// })
// .catch((err) => {
//     console.log(err);
// });

User.insertMany([
    {name: "Tony", email: "Tony123@gmail.com", age: 21},
    {name: "Rony", email: "Rony123@gmail.com", age: 22},
    {name: "Roni", email: "roni123@gmail.com", age: 23},
]).then((res) => {
    console.log(res);
});

// const user1 = new User({
//     name: "Rohan",
//     email: "rohan123@gmail.com",
//     age: 20,
// });

// user1.save();