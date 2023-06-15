const pokedex = [
    {id: 1, name: 'Bulbizarre', evolution: 2, type: 'plante'},
    {id: 2, name: 'Herbizarre', evolution: 3, type: 'plante'},
    {id: 3, name: 'Florizarre', evolution: -1, type: 'plante'},
    {id: 4, name: 'Salamèche', evolution: 5, type: 'feu'},
    {id: 5, name: 'Reptincel', evolution: 6, type: 'feu'},
    {id: 6, name: 'Dracaufeu', evolution: -1, type: 'feu'},
    {id: 7, name: 'Carapuce', evolution: 8, type: 'eau'},
    {id: 8, name: 'Carabaffe', evolution: 9, type: 'eau'},
    {id: 9, name: 'Tortank', evolution: -1, type: 'eau'},
];

const countPokemonsFromType = (typesearch) => {
    let count = 0;
    for (let i = 0 ; i < pokedex.length ; i++) {
        if (pokedex[i].type === typesearch) {
            count++
        }

    }
    return count
}

const getPokemonsFromType = (typesearch) => {
    const array = []
    for (let i = 0 ; i < pokedex.length ; i++) {
        if (pokedex[i].type === typesearch) {
            array.push(pokedex[i])
        }

    }
    return array
}

const getPokemonFromName = (pokename) => {
    let returnpoke = ''
    for (let i = 0 ; i < pokedex.length ; i++) {
        if (pokedex[i].name === pokename) {
            returnpoke = pokedex[i]
        }

    }
    return returnpoke
}

const getPokemonEvolution = (pokename) => {
    let returnevo = ''
        if (getPokemonFromName(pokename).evolution !== -1) {
            returnevo = [getPokemonFromName(pokename).id+1]
        }
    return returnevo
}

console.log(getPokemonEvolution('Herbizarre'))
