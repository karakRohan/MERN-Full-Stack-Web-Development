function hello ()
{
    console.log("Hello");
}

hello();

function printName()
{
    console.log("Rohan");
    console.log("Karak");
}

function print1to5()
{
    for(let i=1;i<=5;i++)
    {
        console.log(i);
    }
}

function isAdult()
{
    let age = 18;
    if(age>=18)
    {
        console.log("Adult");
    }
    else{
        console.log("Not Adult");
    }
}

// This Part Function Calling
printName();
print1to5();
isAdult();