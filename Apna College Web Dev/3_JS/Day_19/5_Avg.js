function sum(a,b)
{
    console.log(a+b);
}
sum(2,10);

function calAvg(a,b,c)
{
    let avg = (a+b+c)/3;
    console.log(avg);
}
calAvg(2,4,6);

// Print Table
function printTable(n)
{
    for(let i=n; i<=n*10;i+=n)
    {
        console.log(i);
    }
}
printTable(2);