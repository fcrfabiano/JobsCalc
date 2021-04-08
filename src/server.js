const express = require('express');
const routes = require('./routes');

// Atribuindo função express à variável server
const server = express();

// Definindo a engine que o site vai usar
server.set('view engine', 'ejs');

// Middleware para configurar rotas estaticas
server.use(express.static("public"));
// Usar o request.body
server.use(express.urlencoded({ extended: true }));
// Usar rotas vindas do routes.js
server.use(routes);

// Servidor ouvindo na porta 3000
server.listen(3000, () => {
    console.log("Servidor On-Line: [localhost:3000]");
});