//defineProperty  - define somente um
// Getter e Setters

function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;

    Object.defineProperty(this, 'estoque', {
        enumerable: true, //mostra a chave
        value: estoque,   //valor da chave
        writable: false, //eu posso alterar o valor ? 
        configurable: true //pode configurar a valor?
    });

}

const p1 = new Produto('Camisa', 20, 3);
console.log(p1);