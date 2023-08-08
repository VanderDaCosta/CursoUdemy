const express = require('express');
const app = express();

//         CRIAR, LER, ATUALIZAR, APAGAR
// CRUD => CREATE, READ, UPTADE, DELETE
//         POST ,  GET,  PUT,    DELETE

// http://meusite.com/homeDoMeuSite

app.get('/', (req, res) => {
    res.send(`
    <form action="/" method="POST">

    Nome: <input type="text" name="nome">

    <button>Enviar</button>

    </form>
    `);
});

app.post('/', (req, res) =>{
    res.send('Formulário enviado');
});

app.get('/contato', (req, res) => {
    res.send('Obrigado por entrar em contato com a gente s2!');
});

app.listen(3000, () => {
    console.log('Acessar http://localhost:3000');
    console.log('Servidor executando na porta 3000');
});