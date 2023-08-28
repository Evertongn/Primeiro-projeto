const bancoDeDados = require('../bancoDeDados')
const validarBodyConta = require('../Ferramentas/validarBody')
const nomeOuEmailExiste = require('../Ferramentas/validarNomeEmail')

let id = 1

const criarJogador = (req, res) => {
    const { nome, email } = req.body
    if (validarBodyConta(nome, email)) {
        return res.status(400).json({ mensagem })
    }
    if (nomeOuEmailExiste(nome, email)) {
        return res.status(400).json({ mensagem })
    }
    const novoJogador = {
        id: id,
        nome,
        email,
        time: []
    }
    bancoDeDados.jogadores.push(novoJogador)
    id++
    return res.status(200).json()
}

module.exports = criarJogador