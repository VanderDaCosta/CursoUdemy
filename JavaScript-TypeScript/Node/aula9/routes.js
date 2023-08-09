//para carregar o express
const express = require('express');
//rota
const route = express.Router();
const homeController = require('./controllers/homeController');

//Rotas da home
route.get('/', homeController.paginaInicial);
route.post('/', homeController.trataPost);


module.exports = route;