function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof msg !== 'string') {
                reject('error');
                return;
            };

            resolve(msg);
        }, tempo);
    });
}

//Promise.all  || Promise.race || Promise.resolve || Promise.reject

const promises = [
    'Primeiro valor',
    esperaAi('Promese 1', 3000),
    esperaAi('Promese 2', 500),
    //esperaAi(1000, 1000), => testando o erro
    esperaAi('Promese 3', 1000),
    'Outro valor'
];

//Promise.all(promises)
//.then(function(valor){
//    console.log(valor);
//})
//.catch(function(erro){
//    console.log(erro);
//});

//Sempre entra o primeiro valor que foi resolvido, porém o 
//codigo continua funcionando mesmo que não retorne mais nada
//Promise.race(promises)
//    .then(function (valor) {
//        console.log(valor);
//    })
//    .catch(function (erro) {
//        console.log(erro);
//    });

function baixaPagina(){
    const emCache = false;

    if(emCache){
        return Promise.resolve('Pagina em cache');
    } else {
        return esperaAi('Baixei a pagina', 3000);
    }
}

baixaPagina()
    .then(dadosPagina => {
        return console.log(dadosPagina);
    })
    .catch(e => console.log(e))