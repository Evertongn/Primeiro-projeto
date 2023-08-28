const bancoDeDados = require('../bancoDeDados')
const encontrarJogador = require('../Ferramentas/encontrarJogador')
const jogadorValido = require('../Ferramentas/jogadorValido')

const deletarjogador = (req, res) => {
    const { id } = req.params
    const contaEncontrada = encontrarJogador(id)
    if (jogadorValido(contaEncontrada)) {
        return res.status(400).json({ mensagem })
    }
    const indexDaConta = bancoDeDados.jogadores.indexOf(contaEncontrada)
    bancoDeDados.jogadores.splice(indexDaConta, 1)
    return res.status(200).json()

}

module.exports = deletarjogador