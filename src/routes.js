const express = require('express')
const morgan = require('morgan')
const SupermaketsController = require('./controllers/Supermarket')
const routes = express.Router()
// TODO: incluir o morgan somente no ambiente de produção ou debug dotenv Implementation
routes.use(morgan('tiny'))

routes.get('/', SupermaketsController.index)
routes.post('/supermarkets', SupermaketsController.store)
routes.put('/supermarkets/:id', SupermaketsController.update)

module.exports = routes
