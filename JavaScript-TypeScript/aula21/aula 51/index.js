// filter - vai filtras o Array e sempre retorna um booleano
// map - modificar o Array e sempre retorna um booleano
// reduce - reduzir o Array em um unico valor

//Retorne os numeros maiors que 10
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const maiores = numeros.filter(valor => valor > 10);
//console.log(maiores);


const pessoas = [
    { nome: 'luiz', idade: 62 },
    { nome: 'peu', idade: 25 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Leticia', idade: 19 },
    { nome: 'Rosana', idade: 32 },
    { nome: 'Wallace', idade: 47 }
];

const cincoLetrasouMais = pessoas.filter(obj => obj.nome.length >= 5);
const maisdeCinquentaAnos = pessoas.filter(obj => obj.idade >= 50);
const nomeTerminadoemA = pessoas.filter(obj => {
    //endsWith = Termina com...
    return obj.nome.toLowerCase().endsWith('a');
});

//console.log(cincoLetrasouMais);
//console.log(maisdeCinquentaAnos);
console.log(nomeTerminadoemA);