const getPokemonUrl = id => `https://pokeapi.co/api/v2/pokemon/${id}`;
const generatePokemonPromises = () => Array(150).fill().map((_, index) =>
(fetch(getPokemonUrl(index + 1)).then(response => response.json())))

const generateHTML = pokemons => pokemons.reduce((accumulator, {name, id, types}) => {// Reduzir esse array em uma string
    const elementTypes = types.map(typeInfo => typeInfo.type.name);

    accumulator += `
            <li class="card ${elementTypes[0]}">
                <img class="card-image" alt="${name}"  src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png"/>
                <h2 class="card-title">${id}. ${name}</h2>
                <p class="card-subtitle">${elementTypes.join(' | ')}</p>
            </li>
        `
    return accumulator;
}, ''); 

   
const insertPokemonIntoPage = pokemons => {
    const ul = document.querySelector('[data-js="pokedex"]')
    ul.innerHTML = pokemons;
}


const pokemonPromises = generatePokemonPromises();

Promise.all(pokemonPromises) // Esse método gera uma promise
    .then(generateHTML)
    .then(insertPokemonIntoPage)



// Ajak = representa a poissibilidade do nosso código js fazer requisições asíncronas par que dados sejam obtidos sem que a página precise ser recarregada
// Promise é um objeto que representa o sucesso ou a falha de uma operação assíncrona 
// fetch(getPokemonUrl(i)).then(response => response.json()) -> Isso tmb gera uma promise
