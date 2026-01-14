function multipleGreet(func, count) // Higher Order Function
{
    for (let i = 1; i <= count; i++) {
        func();
    }
}
let greet = function () {
    console.log("Hello");
}

multipleGreet(greet,100);
multipleGreet(function () { console.log("Namaste") }, 1000);