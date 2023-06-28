//factory function
function criaPessoa(nome, sobrenome) {
    return {
        nome,
        sobrenome,
        nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`;
        }
    }
}

const p1 = criaPessoa('vander', 'Rosa');
console.log(p1.nomeCompleto());

//constructor functions
function Pessoa(nome,sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
}
const p2 = new Pessoa('Vander', 'Rosa');