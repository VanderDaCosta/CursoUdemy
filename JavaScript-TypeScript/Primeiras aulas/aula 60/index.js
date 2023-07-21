// camiseta, caneca, lapiz => material
// são PRODUTOS => aumento e desconto

function Produto(nome, preco) {
    this.nome = nome,
    this.preco = preco
}

Produto.prototype.aumento = function (porcentagem) {
    this.preco = this.preco + (this.preco * (porcentagem / 100));
};
Produto.prototype.desconto = function (porcentagem) {
    this.preco = this.preco - (this.preco * (porcentagem / 100));
};

function Camiseta(nome, preco, cor){
    Produto.call(this, nome, preco);
    this.cor = cor
}
Camiseta.prototype = Object.create(Produto.prototype);
Camiseta.prototype.constructor = Camiseta;

function Caneca(nome, preco, material, estoque){
    Produto.call(this, nome, preco);
    this.material = material;

    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: false,
        get: function(){
            return estoque;
        },
        set: function(valor){
            if(typeof valor != 'number') return;
            estoque = valor;
        }
    });
}
Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.constructor = Caneca;

const regata = new Camiseta('Regata', 50, 'Preta');
regata.aumento(10);
console.log(regata);

const xicara = new Caneca('Xicara', 12, 'Porcelana', 5);
xicara.desconto(5);
console.log(xicara);
