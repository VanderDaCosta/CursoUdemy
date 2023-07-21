//Declaração de função (function hoisting)
falaOi();


function falaOi() {
    console.log("ain oi");
}

// first-class objects (objetos de primeira classe)
// function expression
const souUmDado = function () {
    console.log("Sou um dado");
}

function executaFuncao(funcao) {
    console.log("vou executar a função abaixo");
    funcao();
}
executaFuncao(souUmDado);

// arrow function
const arrow = () => {
    console.log("sou uma arrow function");
}
arrow();

// dentro de um objeto
const objeto = {
    falar: function(){
        console.log('estou falando');
    }
};
objeto.falar();