//new Object -> Object.prototype
const objA = {
    chaveA: 'A'
    // __proto__: Object.prototype
};

const objB = {
    chaveB: 'B'
    // __proto__: objA
};

const objC = new Object();
objC.chaveC = 'C';

Object.setPrototypeOf(objB, objA);
Object.setPrototypeOf(objC, objB);

//console.log(objB.chaveA);
//console.log(objC.chaveB);

function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.desconto = function (percentual) {
    this.preco = this.preco - (this.preco * (percentual / 100))
};
Produto.prototype.aumento = function (percentual) {
    this.preco = this.preco + (this.preco * (percentual / 100))
};

const p1 = new Produto('Camiseta', 50);
console.log(p1);

//p1.desconto(10);
//console.log(p1);

//p1.aumento(20);
//console.log(p1);

//Literal
const p2 = {
    nome: 'Caneca',
    preco: 15
};
//setar o prototype do P2, e quem vai ser o prototype dele, que nesse caso seria o P1
Object.setPrototypeOf(p2, Produto.prototype); 

p2.aumento(10);
console.log("//////////");
console.log(p2);

console.log("//////////");
const p3 = Object.create(Produto.prototype);
p3.nome = 'Calça';
p3.preco = 120;
p3.aumento(20);
console.log(p3);
