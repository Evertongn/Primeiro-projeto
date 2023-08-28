const bancoDeDados = require('../bancoDeDados')
const encontrarJogador = require('../Ferramentas/encontrarJogador')
const validarBodyConta = require('../Ferramentas/validarBody')
const nomeOuEmailExiste = require('../Ferramentas/validarNomeEmail')
const jogadorValido = require('../Ferramentas/jogadorValido')

const editarJogador = (req, res) => {
    const { nome, email } = req.body
    const { id } = req.params
    if (validarBodyConta(nome, email)) {
        return res.status(400).json({ mensagem })
    }
    if (nomeOuEmailExiste(nome, email)) {
        return res.status(400).json({ mensagem })
    }
    const jogadorEncontrado = encontrarJogador(id)
    if (jogadorValido(jogadorEncontrado)) {
        return res.status(400).json({ mensagem })
    }
    const novaConta = {
        id: jogadorEncontrado.id,
        nome,
        email
    }
    bancoDeDados.jogadores[Number(id) - 1] = novaConta
    return res.status(200).json()
}

module.exports = editarJogador