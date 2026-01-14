async function greet() {
    throw "404 page not found";
    return "hello!";
}
greet()
.then((result) => {
    console.log("Promise Was Resolved");
    console.log("Result Was : ", result);
})
.catch((error) => {
    console.log("Promise Was Rejected With Error : ", error);
});

let demo = async () => {
    return 5;
};