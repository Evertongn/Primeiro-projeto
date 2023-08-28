const { detalharPokemon } = require('utils-playground')

const detalhePokemon = async (req, res) => {
    const { idOuNome } = req.params;

    const pokemonEcontrado = await detalharPokemon(idOuNome);

    const { id, name, height, weight, base_experience, forms, abilities, species } = pokemonEcontrado;

    return res.json({ id, name, height, weight, base_experience, forms, abilities, species });

}

module.exports = detalhePokemon