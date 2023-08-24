class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    get nomeCompleto() {
        return this.nome + ' ' + this.sobrenome;
    }

    set nomeCompleto(valor) {
        valor = valor.split(' ');
        this.nome = valor.shift();
        this.sobrenome = valor.join(' ');
    }
}

const p1 = new Pessoa('vander', 'rosa');
console.log(p1.nomeCompleto);

//SETTER
p1.nomeCompleto = 'fernanda maria';

//GETTER
console.log(p1.nomeCompleto);