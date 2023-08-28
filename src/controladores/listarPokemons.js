const { listarPokemons } = require('utils-playground')
const listaPokemons = async (req, res) => {
    const { pagina } = req.query
    const listaPokemons = await listarPokemons(pagina ?? 1)
    return res.status(200).json(listaPokemons)
}

module.exports = listaPokemons