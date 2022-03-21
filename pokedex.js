const fetchPokemon = () => {
    const pokeNameInput = document.getElementById("pokeName");
    let pokeName = pokeNameInput.value;
    pokeName = pokeName.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
    fetch(url).then((res) => {
        if (res.status != "200") {
            console.log(res);
            pokeImage("pokemon-sad.gif")
        }
        else {
            return res.json();
        }
    }).then((data) => {
        if (data) {
            console.log(data);
            
            let pokeImg = data.sprites.front_default;
            let pokeName1 = data.species.name;
            let pokeTipo = data.types[0].type.name;
            let pokeMovi = data.moves[2].move.name;
            let titulos = ""
            //aqui obtengo todas las estadisticas del pokemon de una sola consulta
            for(X in data.stats){
                titulos =  titulos + data.stats[X].stat.name +`<br>`+data.stats[X].base_stat+`<br>`

                const itemList = `<p>${titulos}</p>`;

                document.getElementById("statMain").innerHTML = itemList ;

            }
            pokeNam(pokeName1);
            pokeImage(pokeImg);
            pokeTyp(pokeTipo);
            pokeMov(pokeMovi);            
        }
    });
}



const pokeImage = (url) => {
    const pokePhoto = document.getElementById("pokeImg");
    pokePhoto.src = url;
}

const pokeNam = (url) =>{
    const pokeNom = document.getElementById("pokeNombr");
    pokeNom.innerHTML = url;
}

const pokeTyp = (url) =>{
    const pokeTip = document.getElementById("pokeTipo");
    pokeTip.innerHTML = url;
}
const pokeMov = (url) =>{
    const statMov = document.getElementById("pokeMove");
    statMov.innerHTML = url;
}

