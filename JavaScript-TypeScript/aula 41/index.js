function retornaFuncao(nome) {
    return function () {
        return nome;
    }
}


const funcao = retornaFuncao('Vander');
const funcao2 = retornaFuncao('vapo');

console.dir(funcao);
console.dir(funcao2);

console.log(funcao(), funcao2());
