const routes = require('express').Router();
const cors = require('cors');
const pdfController = require('./controllers/pdfController');

routes.use(cors());

routes.post('/pdf', pdfController.index);

module.exports = routes