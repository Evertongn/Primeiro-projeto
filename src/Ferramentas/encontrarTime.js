const { detalharPokemon } = require('utils-playground')

const encontrarTime = async (...idsENomes) => {
    const time = [];

    for (const idOuNome of idsENomes) {
        const pokemonEcontrado = await detalharPokemon(idOuNome);
        const { id, name } = pokemonEcontrado
        time.push(id, name);
    }
    return (time)
}

module.exports = encontrarTime