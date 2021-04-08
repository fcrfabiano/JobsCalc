const api = require('express');

const routes = api.Router();

const views = __dirname + "/views/";

const profile = {
    name: "Fabiano",
    avatar: "https://github.com/fcrfabiano.png",
    "monthly-budget": 10000,
    "hours-per-day": 8,
    "days-per-week": 6,
    "vacation-per-year": 4,
    "value-hour": 75
};

const jobs = [
    {
        id: 1,
        name: "Pizzaria Guloso",
        "daily-hours": 2,
        "total-hours": 1,
        created_at: Date.now()
    },
    {
        id: 2,
        name: "OneTwo Project",
        "daily-hours": 3,
        "total-hours": 47,
        created_at: Date.now()
    }
];

function remainingDays(job) {
    // calculo de tempo restante
    const remainingDays = (job["total-hours"] / job["daily-hours"]).toFixed();

    const createdDate = new Date(job.created_at);
    const dueDay = createdDate.getDate() + Number(remainingDays);
    const dueDate = createdDate.setDate(dueDay);

    const timeDiffInMs = dueDate - Date.now();

    // transformar milli em dias
    const dayInMs = 1000 * 60 * 60 * 24;
    const dayDiff = Math.floor(timeDiffInMs / dayInMs);

    return dayDiff;
}

// Rotas GET

routes.get('/', (request, response) => {

        const updatedJobs = jobs.map((job) => {
        // ajustes no job
        const remaining = remainingDays(job);
        const status = remaining <= 0 ? 'done' : 'progress';

        return {
            ...job,
            remaining,
            status,
            budget: profile["value-hour"] * job["total-hours"]
        }
    });
    
    return response.render(views + "index", { jobs: updatedJobs });
});

routes.get('/job', (request, response) => {
    console.log(jobs);

    return response.render(views + "job");
});

routes.get('/job/edit', (request, response) => {
    return response.render(views + "job-edit");
});

routes.get('/profile', (request, response) => {
    return response.render(views + "profile", { profile });
});

// Rotas POST

routes.post('/job', (request, response) => {
    // { name: 'Fabiano',
    // 'daily-hours': '8',
    // 'total-hours': '240' }

    const lastId = jobs[jobs.length - 1].id || 1;

    jobs.push({
        id: lastId + 1,
        name: request.body.name,
        "daily-hours": request.body["daily-hours"],
        "total-hours": request.body["total-hours"],
        created_at: Date.now()
    });

    return response.redirect('/');
});

// Exporta as rotas
module.exports = routes;