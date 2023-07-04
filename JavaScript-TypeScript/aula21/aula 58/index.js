/*
O JavaScript é baseado em prototipos para passar propriedades e métodos de um objeto para outro.

-> Definição de prototipos
    Prototipo é um termo usado para se referir ao que foi criado pela 
    primeira vez, servindo de modelo ou molde para futuras produções

Todos objetos tem uma referência interna para um prototipo (__proto__) que vem da propriedade
prototype da função construtora que foi usada para criá-lo. Quando tentamos acessar um membro
de um objeto, primeiro o motor do JS vai tentar encontrar este membro no proprio objeto e depois 
a cadeia de prototipos é usada até o topo (null) até encontrar (ou não) tal membro.

*/

//contrutora  => molde(classe)

function Pessoa(nome, sobrenome, idade){
    this.nome = nome,
    this.sobrenome = sobrenome,
    this.idade = idade
}

//instância
const pessoa1 = new Pessoa('Vander', 'Rosa', 21);
const pessoa2 = new Pessoa('Luiz', 'Otavio', 28);

Pessoa.prototype.nomeCompleto = function(){
    return this.nome +
    ' ' + this.sobrenome + ', ' + this.idade
    + ' anos.';
};

console.log(pessoa1.nomeCompleto());

console.dir(pessoa1);
console.dir(pessoa2);