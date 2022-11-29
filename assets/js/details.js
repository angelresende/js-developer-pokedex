function detailsPokemon(pokemon) {
    return `
            <div class="col card-pokemon ${pokemon.type}">
                <div class="card-header">
                    <p class="card-back">
                        <a href="/index.html">
                            <i class="fa fa-angle-double-left" style="font-size:36px;"></i>
                        </a>
                    </p>
                    <p class="card-name">${pokemon.name}</p>
                    <p class="card-id"> #${pokemon.number} </p>
                </div>

                <div>
                    <img src="${pokemon.photo}" alt="${pokemon.name}">
                </div>

                <div class="card-details">
                    <p><strong>Types: </strong>${pokemon.types.map((type) => `${type}, `).join('')} </p>

                    <p><strong>Abilities: </strong> ${pokemon.abilities.join(', ')}</p>

                    <p><strong>Moves: </strong> ${pokemon.moves.join(', ')} </p>

                    <p><strong>Weight: </strong> ${pokemon.weight} Kg</p>
                    
                    <p><strong>Height: </strong> ${pokemon.height} Kg</p>
                </div>

            </div>
    `
}

const pokemonId = window.location.search.replace('?id=', '');
detailsPokemonId();

function detailsPokemonId() {
  pokeApi.getPokemon(pokemonId)
    .then(pokemon => {
      const details_pokemons = document.querySelector('.details_pokemons');
      details_pokemons.innerHTML += detailsPokemon(pokemon);
    });
}


