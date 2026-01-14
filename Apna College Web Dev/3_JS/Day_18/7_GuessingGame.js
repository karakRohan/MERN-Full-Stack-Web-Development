const max = prompt("Enter The Max Number ");
console.log(max);

const random = Math.floor(Math.random() * max) + 1;
console.log(random);

let guess = prompt("Guess The Number ");

while (true) {
    if (guess == "quit") {
        console.log("user quit");
        break;
    }

    if (guess == random) {
        console.log("You are Right! Congrats!! Random Number Was", random);
        break;
    }
    else if (guess < random) {
        guess = prompt("Hint : Your guess was too small. please try again");
    }
    else {
        guess = prompt("Hint : Your guess was too large. please try again");
    }

    // else {
    //     guess = prompt("Your Guess Was Wrong. Please try again"); 
    // }
}