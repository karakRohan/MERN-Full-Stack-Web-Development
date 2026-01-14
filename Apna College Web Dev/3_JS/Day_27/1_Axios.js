let btn = document.querySelector("button")

btn.addEventListener("click", async () => {
    // console.log("Button Was Clicked");
    let fact = await getFacts();
    console.log(fact); 
    let p = document.querySelector("#result");
    p.innerText = fact;
});



let url = "https://catfact.ninja/fact";


async function getFacts() {
        try {
            let response = await axios.get(url);
            return response.data.fact ;    
        } catch (err) {
            console.log("error - ", err);
            return "No fact found"
        }  
    }   