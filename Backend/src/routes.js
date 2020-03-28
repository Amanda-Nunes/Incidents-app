const express = require('express');

const OngsControllers = require('./controllers/OngsControllers');
const IncidentsController = require('./controllers/IncidentController')
const SessionController = require('./controllers/SessionController')

const routes = express.Router();


routes.get('/ongs', OngsControllers.index);
routes.post('/ongs', OngsControllers.create);

routes.post('/sessions', SessionController.create);

routes.get('/incidents', IncidentsController.index);
routes.get('/incidentById', IncidentsController.incidentById);
routes.post('/incidents', IncidentsController.create);
routes.delete('/incidents/:id', IncidentsController.delete);


module.exports = routes;