const api = require('express');

const routes = api.Router();

const views = __dirname + "/views/";

const profile = {
    name: "Fabiano",
    avatar: "https://avatars.githubusercontent.com/u/47621123?v=4",
    "monthly-budget": 10000,
    "hours-per-day": 8,
    "days-per-week": 6,
    "vacation-per-year": 4
};

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
    return response.render(views + "profile", { profile });
});

// Exporta as rotas
module.exports = routes;