const btnService = document.getElementById("btn_service");
const formService = document.getElementById("form-service");

btnService.addEventListener("click", NouveauService);

function NouveauService(){

    let dataForm = new FormData(formService)

    
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
        "nom": dataForm.get("Titre"),
        "description": dataForm.get("description"),
        
    });
    const requestOptions = {
    method: "POST",
    body: raw,
    redirect: "follow"
    };

    fetch(apiUrl+"service/new", requestOptions)
        .then((response) => {
            window.location.replace("/FrontEnd/accueil");
        })
        .then((result) => console.log(result))
        .catch((error) => console.error(error));
}



const ulElement = document.querySelector("ul");
fetch("http://127.0.0.1:8000/api/service/18").then((response) => {
    return response.json();

}).then((services) =>{
    console.log(services);
    for (const service of services){
        const liElement = document.createElement("li");
        liElement.innerText = service.nom ;
        ulElement.appendChild(liElement);
    }
});