const express = require('express');
const routes = require('./routes');

// Atribuindo função express à variável server
const server = express();

// Middleware para configurar rotas estaticas
server.use(express.static("public"));
// Usar rotas vindas do routes.js
server.use(routes);
// Usar JSON para tratar as request/response
server.use(express.json());
// Servidor ouvindo na porta 3000
server.listen(3000, () => {
    console.log("Servidor On-Line: [localhost:3000]");
});