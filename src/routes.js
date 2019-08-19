const express = require('express')
const morgan = require('morgan')
const PersonController = require('./controllers/Persons')
const SupermaketsController = require('./controllers/Supermarket')
const routes = express.Router()
// todo incluir o morgan somente no ambiente de produção ou debug dotenv Implementation
routes.use(morgan('tiny'))

routes.get('/', SupermaketsController.show)
routes.post('/supermarkets', SupermaketsController.store)
routes.put('/supermarkets/:id', SupermaketsController.update)

routes.post('/persons', PersonController.store)

module.exports = routes
