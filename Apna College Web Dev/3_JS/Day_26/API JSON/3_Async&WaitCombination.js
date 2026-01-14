let url = "https://catfact.ninja/fact";

async function getFacts() {
    try {
        let response = await fetch(url);
        let data = await response.json();
        console.log(data.fact);

        let response2 = await fetch(url);
        let data2 = await response2.json();
        console.log(data2.fact);
    } catch (err) {
        console.log("error - ", err);
    }

    console.log("bye");

}