class Pessoa {
    //Metodo para passar parâmetros
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    falar(){
        console.log(`${this.nome} está falando!`);
    }

    comer(){
        console.log(`${this.nome} está comendo`);
    }
    beber(){
        console.log(`${this.nome} está bebendo`);
    }
}

const p1 = new Pessoa('Vander', 'Rosa');
const p2 = new Pessoa('Fernanda', 'Maria');
const p3 = new Pessoa('Valter', 'Filho');

p1.beber();
p3.comer();
p2.falar();