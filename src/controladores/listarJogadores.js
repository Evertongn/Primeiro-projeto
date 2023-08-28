const bancoDeDados = require('../bancoDeDados')


const listarJogadores = (req, res) => {
    return res.status(200).json(bancoDeDados)
}

module.exports = listarJogadores