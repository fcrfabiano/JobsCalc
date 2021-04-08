const api = require('express');

const routes = api.Router();

const basePath = __dirname;

routes.get('/', (request, response) => {
    return response.sendFile(`${basePath}/views/index.html`);
});

module.exports = routes;