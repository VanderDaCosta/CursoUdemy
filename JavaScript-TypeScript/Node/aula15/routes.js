const express = require('express');
const route = express.Router();
const homeController = require('./src/controllers/homeController');
const contatoController = require('./src/controllers/contatoController');

//function meuMiddleware(req, res, next) {
//    req.session = { nome: 'Vander', sobrenome: 'Rosa'}
//    console.log();
//    console.log('Passei no seu middleware');
//    console.log();
//    // se não colocar o next o programa vai ficar carregando
//    // para sempre e não vai retornar nada para o cliente
//    next();
//}

//Rotas da home
route.get('/', homeController.paginaInicial);
route.post('/', homeController.trataPost);

//Rotas de contato
route.get('/contato', contatoController.paginaInicial);

module.exports = route;