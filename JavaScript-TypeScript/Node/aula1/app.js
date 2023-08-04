const mod1 = require('./mod1');
const axios = require('axios');

console.log(mod1.falaNome());
const p1 = new mod1.Pessoa("Fernada");
console.log(p1)

//axios('https://www.otaviomiranda.com.br/files/json/pessoas.json')
//    .then(response => console.log(response.data))
//    .catch(e => console.log(e));