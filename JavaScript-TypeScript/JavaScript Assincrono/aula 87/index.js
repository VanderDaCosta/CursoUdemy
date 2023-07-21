function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        if(typeof msg !== 'string') reject("BAD VALUE");
        
        setTimeout(() => {
            resolve(msg);
        }, tempo);
    });
}

//Promise.all  || Promise.race || Promise.resolve || Promise.reject

const promises = [
    'Primeiro valor', 
    esperaAi('Promese 1', 3000),
    esperaAi('Promese 2', 500),
    esperaAi('Promese 3', 1000),
    'Outro valor'
];