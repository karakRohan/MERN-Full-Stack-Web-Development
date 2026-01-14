function hello ()
{
    console.log("inside hello function");
    console.log("hello");
}

function demo() {
    console.log("Calling Hello Function");
    hello();
}

console.log("Calling Demo Function");
demo();
console.log("done, bye!"); 