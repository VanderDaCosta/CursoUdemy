//Composição e mixing -sendo usado nessa aula

const falar = {
    falar() {
        console.log(`${this.nome} está falando.`);
    }
};

const comer = {
    comer() {
        console.log(`${this.nome} está comendo.`);
    }
};

const beber = {
    beber() {
        console.log(`${this.nome} está bebendo.`);
    }
};

//const pessoaPrototype = { ...falar, ...comer, ...beber };
const pessoaPrototype = Object.assign({}, falar, comer, beber);


function criaPessoa(nome, sobrenome) {
    return Object.create(pessoaPrototype, {
        nome: {
            value: nome,
        },
        sobrenome: {
            value: sobrenome
        }
    });
}

const p1 = criaPessoa('Vander', 'Rosa');
const p2 = criaPessoa('Fernanda', 'Maria');
p1.falar();
p2.comer();