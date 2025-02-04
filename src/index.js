

const pokemonListUL = document.querySelector(".cards")

function renderPokemon(){
    pokemonListUL.innerHTML = ""

    for(let i = 0; i < data.length; i++){
        const pokemon = data[i]
        const pokemonLi = document.createElement("li")
        pokemonLi.setAttribute('class', 'card')

        const cardTitle = document.createElement('h2')
        cardTitle.setAttribute('class', 'card--title')
        cardTitle.innerHTML = pokemon.name
        pokemonLi.appendChild(cardTitle)

        const cardImage = document.createElement('img')
        cardImage.setAttribute('class', 'card--img')
        cardImage.setAttribute('width', '250')
        cardImage.setAttribute('src', pokemon.sprites.other['official-artwork'].front_default)
        pokemonLi.appendChild(cardImage)

       const cardText = document.createElement('ul')
       cardText.setAttribute('class', 'card--text')
       pokemonLi.appendChild(cardText)

       const cardHp = document.createElement('li')
       cardHp.setAttribute('class', 'card--attribute-text');
       cardHp.innerHTML = 'HP: ' + pokemon.stats[0].base_stat
       cardText.appendChild(cardHp)

       const cardAttack = document.createElement('li')
       cardAttack.setAttribute('class', 'card--attribute-text');
       cardAttack.innerHTML = 'ATTACK: ' + pokemon.stats[1].base_stat
       cardText.appendChild(cardAttack)

       const cardDefence = document.createElement('li')
       cardDefence.setAttribute('class', 'card--attribute-text');
       cardDefence.innerHTML = 'DEFENSE: ' + pokemon.stats[2].base_stat
       cardText.appendChild(cardDefence)

       const cardSpecialAttack = document.createElement('li')
       cardSpecialAttack.setAttribute('class', 'card--attribute-text');
       cardSpecialAttack.innerHTML = 'SPECIAL-ATTACK: ' + pokemon.stats[3].base_stat
       cardText.appendChild(cardSpecialAttack)

       const cardSpecialDefence = document.createElement('li')
       cardSpecialDefence.setAttribute('class', 'card--attribute-text');
       cardSpecialDefence.innerHTML = 'SPECIAL-DEFENCE: ' + pokemon.stats[4].base_stat
       cardText.appendChild(cardSpecialDefence)

       const cardSpeed = document.createElement('li')
       cardSpeed.setAttribute('class', 'card--attribute-text');
       cardSpeed.innerHTML = 'SPEED: ' + pokemon.stats[5].base_stat
       cardText.appendChild(cardSpeed)

       const cardPokemonGames = document.createElement('li')
       cardPokemonGames.setAttribute('class', 'card--attribute--text')
       cardPokemonGames.innerHTML = 'Appeared in game: '
       
       for(let j = 0; j < pokemon.game_indices.length; j++){
        cardPokemonGames.innerHTML += pokemon.game_indices[j].version.name
        if(j !=pokemon.game_indices.length-1){
            cardPokemonGames.innerHTML += ", "
        }
       }
       cardText.appendChild(cardPokemonGames)

        const img = document.getElementsByName(".png")
        const imageSources = pokemon.sprites;
        for(let j = 0; j < pokemon.sprites.length; j++){
            imageSources [j] = pokemon.sprites[j]
        }
        
        let index = 0;
        let travel;

        const startTravel = () => {
          travel = setInterval(() => {
            ++index;
      
            console.log(index);
            if (index < 0 || index === imageSources.length) index = 0;
            img.src = imageSources[index];
          }, 6000);
        };
      
        const changeImage1 = () => {
          if (index === 0) index = imageSources.length;
      
          clearInterval(travel);
          img.src = imageSources[--index];
          startTravel();
        }
      
        const changeImage2 = () => {
          if (index === imageSources.length - 1) index = -1;
      
          clearInterval(travel);
          img.src = imageSources[++index];
          startTravel();
        }
      
        startTravel();
      
       
       

       pokemonListUL.appendChild(pokemonLi)
    }

}



function main(){
    renderPokemon()
}

main()