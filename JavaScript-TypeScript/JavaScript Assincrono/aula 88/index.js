function rand(min = 0, max = 3) {
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

            resolve(msg.toUpperCase() + ' - Passei na promise.');
            return;
        }, tempo);
    });
}

//esperaAi('Fase 1', rand())
//    .then(valor => {
//        console.log(valor);
//        return esperaAi('fase 2', rand())
//    })
//    .then(fase => {
//        console.log(fase);
//        return esperaAi('fase 3', rand())
//    })
//    .then(fase => {
//        console.log(fase);
//        return fase;
//    })
//    .then(fase => {
//        console.log('Terminamos na ' , fase);
//        return fase;
//    })
//    .catch(e => {
//        console.log(e);
//    });

// Agora com Async / Await

/* 
elas tem 3 estados

pending -> promise pendente
fullfilled -> promise resolvida
reject -> promise rejeitada
*/

async function executa() {
    try {
        //preciso pegar o valor do await, então jogamos ele na variavel
        const fase1 = await esperaAi('Fase 1', rand());
        const fase2 = await esperaAi('Fase 2', rand());
        const fase3 = await esperaAi('Fase 3', rand());

        console.log(fase1);

        setTimeout(function () {
            console.log( 'Essa promise estava pendente ' ,fase1)
        }, 1000);

        console.log(fase2);
        console.log(fase3);
        console.log('Termianmos na ', fase3);
    } catch (e) {
        console.log(e);
    }
}
executa();