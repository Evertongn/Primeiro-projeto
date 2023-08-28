const express = require('express')

const rotas = express()

const listarJogadores = require('./controlares/listarJogadores')
const criarJogador = require('./controlares/criarJogador')
const editarJogador = require('./controlares/editarJogador')
const deletarjogador = require('./controlares/deletarjogador')
const listaPokemons = require('./controlares/listarPokemons')
const detalhePokemon = require('./controlares/detalharPokemon')
const criarTime = require('./controlares/criarTime')


rotas.get('/jogadores', listarJogadores)
rotas.post('/jogadores', criarJogador)
rotas.put('/jogadores/:id', editarJogador)
rotas.delete('/jogadores/:id', deletarjogador)
rotas.get('/pokemons', listaPokemons)
rotas.get('/pokemon/:idOuNome', detalhePokemon)
rotas.post('/jogadores/:id/time', criarTime)

module.exports = rotas