// Reduce - reduz o array em um unico elemento

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const total = numeros.reduce(function (acumulador, valor, indice, array) {
    if (valor % 2 === 0) acumulador.push(valor);
    
    return acumulador;
}, []);

//console.log(total);


//Retorne a pessoa mais velha
const pessoas = [
    { nome: 'luiz', idade: 62 },
    { nome: 'peu', idade: 25 },
    { nome: 'Maria', idade: 64 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Leticia', idade: 19 },
    { nome: 'Rosana', idade: 32 },
    { nome: 'Wallace', idade: 47 }
];
const pessoaMaisVelha = pessoas.reduce(function(acumulador, valor){
    if(acumulador.idade > valor.idade) return acumulador;
    
    return valor;
});

console.log(pessoaMaisVelha);