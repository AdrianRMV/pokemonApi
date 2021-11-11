console.log("Iniciando...");
const response = axios.get("https://pokeapi.co/api/v2/pokemon/pikachu");
response.then((response) => {
  console.log(response);
  console.log("Termino correctamente");
}).catch((error) => {
  console.log(error.response);
  console.log("Termino con errores");
}).then(() => {
  console.log("Finalizó");
});
const button = document.querySelector("#buscar");
button.addEventListener("click", () => {
    
    const  input = document.querySelector("#input-pokemones");
    // input.value.style.text-transform="lowecase";
    console.log(input.value);
    axios({
        // Con el metodo get se obtiene la informacion de una url, en este caso del pokemon
        method: "GET",
        url: "https://pokeapi.co/api/v2/pokemon/" + input.value,
    }).then(res => {

        // Se obtiene la imagen del pokemon
        const  url_imgaen = res.data.sprites.front_shiny;
        const  divImages = document.querySelector(".poke-images");

        // Verifica que no haya un pokemon ya en la pagina
        (divImages.childElementCount > 0) ? divImages.innerHTML = "" : divImages.innerHTML = "";

        // Se obtiene el nombre del pokemon
       const  namePokemon = res.data.name; 
        const  divName = document.querySelector(".titulo-pokemon");

        // Verifica que no haya un nombre de pokemon en pantalla
        (divName.childElementCount > 0) ? divName.innerHTML = "" : divName.innerHTML = "";

        // Crea la etiqueta h2 dentro del div con el nombre del pokemon
        const  nameP = document.createElement("h2");
        nameP.innerText = namePokemon;
        nameP.style.position = "relative";
        divName.appendChild(nameP);

        // Crea la imagen dentro del div con la imagen del pokemon
        const  img = document.createElement("img");
        img.src = url_imgaen;
        img.style.width = "700px";
        divImages.appendChild(img);
        input.value = "";

        // Si el usuario manda espacios vacios o no escribe nada manda un error
    }).catch(err => {
        console.log(err);
        alert("Nombre equivocado, intenta de nuevo");
    });
});