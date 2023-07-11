
const produto = { nome: 'Produto', preco: 1.5 };

const caneca = {
    ...produto,
    material: 'Porcelana'
};
//const caneca = {nome: produto.nome, preco: produto.preco};
//const caneca = Object.assign({}, produto, {material: 'Porcelana'});


/*
* Object.values
* Object.entries
* Object.assign(dess,any)
* Object.getOwnPropertyDescriptor(objeto, 'propriedade')
... (spread)

//Já vimos

* Object.keys (retorna as chaves)
* Object.freeze (congela o objeto)
* Object.defineProperties (define varias propriedades)
* Object.defineProperty (define uma propriedade)
*/

//console.log(Object.keys(produto));
//console.log(Object.entries(produto));

for (let valor of Object.entries(produto)) {
    console.log(valor[0], valor[1]);
}

//console.log(Object.getOwnPropertyDescriptor(produto, 'nome'));
//console.log(Object.values(produto));