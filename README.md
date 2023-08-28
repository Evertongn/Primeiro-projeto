# Time pokemon
Projeto backend de um time de pokemon utiliznado api rest

Sobre
Api que simula o cadatro de jogares, e cadastro de um time utilizando a api pokemon

## 🚀 Recursos
Estrutura inicial do projeto com o padrão api rest
Rota simples e legível.

### 🛠️ Tecnologias
NodeJS
Express
Typescript

## 📋 Pré-requisitos
npm instalado em sua máquina.
Node instalado em sua máquina.

## 🔧 Instalação
Como instalar
Clone este repositório para qualquer pasta que desejar.
Abra seu terminal na mesma pasta e digite...
npm install
Após algum tempo, todas as dependências necessárias para executar este projeto serão instaladas.

Agora você só precisa iniciar um servidor de desenvolvimento digitando
npm start
Lembre-se de que este projeto não requer um banco de dados.

## Rotas
get('/jogadores', listarJogadores)
post('/jogadores', criarJogador)
put('/jogadores/:id', editarJogador)
delete('/jogadores/:id', deletarjogador)
get('/pokemons', listaPokemons)
get('/pokemon/:idOuNome', detalhePokemon)
post('/jogadores/:id/time', criarTime)
