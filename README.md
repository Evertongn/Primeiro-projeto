# Time Pokémon - Projeto Backend

## Sobre
Este projeto consiste em uma API que permite o cadastro de jogadores e a criação de times de Pokémon, utilizando a API oficial de Pokémon.

## Recursos 🚀
- Estrutura inicial do projeto seguindo o padrão de uma API REST.
- Rotas simples e de fácil compreensão.

### Tecnologias 🛠️
- NodeJS
- Express
- TypeScript

## Pré-requisitos 📋
- Node.js instalado em sua máquina.
- npm (Node Package Manager) instalado em sua máquina.

## Instalação 🔧
Siga as instruções abaixo para instalar e executar o projeto:

1. Clone este repositório para a pasta de sua escolha.
2. Abra o terminal na pasta do projeto e execute o seguinte comando:

   npm install
   
Isso instalará todas as dependências necessárias para executar o projeto.

4. Após a conclusão da instalação, inicie o servidor de desenvolvimento com o seguinte comando:

    npm run dev
   
## Rotas 🛤️
A API oferece as seguintes rotas:

- GET `/jogadores`: Lista todos os jogadores.
- POST `/jogadores`: Cria um novo jogador.
- PUT `/jogadores/:id`: Edita os dados de um jogador específico.
- DELETE `/jogadores/:id`: Deleta um jogador específico.
- GET `/pokemons`: Lista todos os pokémons disponíveis.
- GET `/pokemon/:idOuNome`: Obtém detalhes de um pokémon com base em seu ID ou nome.
- POST `/jogadores/:id/time`: Cria um time de pokémons para um jogador específico.

