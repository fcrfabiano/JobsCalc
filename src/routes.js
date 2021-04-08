const api = require('express');

const routes = api.Router();

const views = __dirname + "/views/";

routes.get('/', (request, response) => {
    return response.render(views + "index");
});

routes.get('/job', (request, response) => {
    return response.render(views + "job");
});

routes.get('/job/edit', (request, response) => {
    return response.render(views + "job-edit");
});

routes.get('/profile', (request, response) => {
    return response.render(views + "profile");
});

// Exporta as rotas
module.exports = routes;