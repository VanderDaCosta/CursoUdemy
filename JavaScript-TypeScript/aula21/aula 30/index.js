const pessoa = {
    nome: 'vander',
    sobrenome: 'rosa',
    idade: 21
};

/*
for (let i = 0 ; i < frutas.length ; i++){
    console.log(frutas[i]);
}
*/

for ( let chave in pessoa){
    console.log(chave, pessoa [chave]);
}