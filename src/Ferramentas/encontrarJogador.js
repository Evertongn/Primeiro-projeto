const bancoDeDados = require('../bancoDeDados')

const encontrarJogador = (id) => {
    const encontrarJogador = bancoDeDados.jogadores.find(conta => {
        return conta.id === Number(id)
    })
    if (!encontrarJogador) {
        return
    }
    return encontrarJogador
}

module.exports = encontrarJogador

