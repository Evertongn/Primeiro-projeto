const bancoDeDados = require('../bancoDeDados')

const nomeOuEmailExiste = (nome, email) => {
    const nomeOuEmailExiste = bancoDeDados.jogadores.find(jogadores => {
        return jogadores.nome === nome || jogadores.email === email
    })
    if (nomeOuEmailExiste) {
        return mensagem = "Já existe uma conta com o nome ou e-mail informado!"
    }
    return false
}

module.exports = nomeOuEmailExiste
