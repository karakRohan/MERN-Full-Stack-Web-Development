const express = require("express");
const app = express();

// console.dir(app);

let port = 8080; // Another Port 3000

app.listen(port, () => {
    console.log(`app is listening on port ${port}`);
});

app.get("/", (req, res) => {
    res.send("Hello I am Root");
});

app.get("/:username/:id", (req, res) => {
    // console.log(req.params);
    let{ username, id } = req.params;
    let htmlStr = `<h1>welcome to the page of @${username}!</h1>`
    // res.send(`welcome to the page of @${username}.`);
    res.send(htmlStr);
});

app.get("/search",(req,res) =>{
    // console.log(req.query);
    // res.send("no result");
    let { q } = req.query;
    if(!q) {
        res.send("<h1>Nothing Search</h1>");
    }
    res.send(<h1>`Search result : ${q}`</h1>);
});

// app.get("/apple", (req, res) => {
//     res.send("you contacted apple path");
// });

// app.get("/orange", (req, res) => {
//     res.send("you contacted orange path");
// });

// app.get("*",(req, res) => {
//     res.send("This Page Does Not Exist");
// });

// app.post("/", (req, res) => {
//     res.send("you sent a post request to root");
// });

////////
// app.use((req, res) => {
//     // console.log(req); 
//     console.log("Request Received");
//     // res.send("This Is a Basic Response");

//     // res.send({
//     //     name: "apple",
//     //     color: "red",
//     // });

//     let code = "<h1>Fruits</h1> <ul><li>apple</li><li>Orange</li></ul>";
//     res.send(code);
// });
///////