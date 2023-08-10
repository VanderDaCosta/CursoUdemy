const express = require('express');
const app = express();
const routes = require('./routes');
const path = require('path');

app.use(express.urlencoded({ extended: true }));

//pasta de views
app.set('views', path.resolve(__dirname, 'src', 'views'));
//view engine que vai ser utilizada
app.set('view engine', 'ejs');

//pasta de rotas
app.use(routes);

app.listen(3000, () => {
    console.log('Acessar http://localhost:3000');
    console.log('Servidor executando na porta 3000');
});