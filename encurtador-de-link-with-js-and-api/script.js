function encurtarUrl(){
    //Validar se o link existe
    let url = document.getElementById("input-url").value;
    if(!url){
        alert("É preciso inserir uma URL para encurtar");
        return;
    }
   
    // api key
    // 3b8eaa60e34b4b7ea936d94b2b645262
    
    // headers
    let headers = {
        "Content-Type": "application/json",
        "apiKey": "3b8eaa60e34b4b7ea936d94b2b645262"
    }

    // dados:
    let linkRequest = {
        destination: url,
        domain: { fullName: "rebrand.ly" }
    }

    
    fetch("https://api.rebrandly.com/v1/links", {
        method: "POST",
        headers: headers,
        body: JSON.stringify(linkRequest)
    })

        .then(response => response.json())
        .then(json => {
            console.log(json)
            let inputUrl = document.getElementById("input-url");
            inputUrl.value = json.shortUrl;
        })

}



function copiar(){
    let inputUrl = document.getElementById("input-url");
    inputUrl.select();
    inputUrl.setSelectionRange(0, 99999);

    navigator.clipboard.writeText(inputUrl.value);
    
    alert(`URL copiada: ${inputUrl.value}`)
}





