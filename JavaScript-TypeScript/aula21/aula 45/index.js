function Pessoa(nome, sobrenome) {
    const ID = 154895;

    this.nome = nome;
    this.sobrenome = sobrenome;
}

const p1 = new Pessoa('Vander', 'Rosa');
const p2 = new Pessoa('Lucas', 'Vieira');

console.log(p1.nome, p1.sobrenome);
console.log(p2.nome, p2.sobrenome);