const pokemonList = document.getElementById('details_pokemons')


function convertPokemonToLi(pokemon) {
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
                    <p><strong>Types :</strong>${pokemon.types.map((type) => `${type}, `).join('')} </p>

                    <p><strong>Abilities :</strong> </p>

                    <p><strong>Base experience :</strong></p>

                    <p><strong>Moves :</strong></p>

                    <p><strong>Weight :</strong></p>
                </div>

            </div>
    `
}


