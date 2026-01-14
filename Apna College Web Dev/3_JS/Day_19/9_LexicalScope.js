function outerFunc()
{
    let x = 5;
    let y = 6;
    function innerFunc() // Function Scope 
    {
        // let a = 10;
        console.log(x);
        console.log(y);
    }

    // console.log(a);
    innerFunc();
}