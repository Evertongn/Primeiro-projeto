const bancoDeDados = require('../bancoDeDados')
const encontrarJogador = require('../Ferramentas/encontrarJogador')
const jogadorValido = require('../Ferramentas/jogadorValido')
const encontrarTime = require('../Ferramentas/encontrarTime')

const criarTime = async (req, res) => {
    const { idOuNome1, idOuNome2, idOuNome3, idOuNome4, idOuNome5, idOuNome6 } = req.body
    const { id } = req.params
    const jogadorEncontrado = encontrarJogador(id)
    if (jogadorValido(jogadorEncontrado)) {
        return res.status(400).json({ mensagem })
    }
    const time = await encontrarTime(idOuNome1, idOuNome2, idOuNome3, idOuNome4, idOuNome5, idOuNome6)
    bancoDeDados.jogadores[Number(id) - 1].time.push(time)
    return res.json();
}

module.exports = criarTime