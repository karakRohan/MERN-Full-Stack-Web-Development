const favMovie = "King";

let guess = prompt("Guess My Favorite Movie");

while((guess != favMovie) && (guess !="quit"))
{
    guess=prompt("Wrong guess. please try again");
}

if(guess == favMovie)
{
    console.log("Congrats!!");
}
else{
    console.log("You Quit");
}