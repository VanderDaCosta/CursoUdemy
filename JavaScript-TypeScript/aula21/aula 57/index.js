//defineProperty  => Getter e Setters
//Getter - serve para obter o valor
//Setter - serve para setar o valor


function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;

    let estoquePrivado = estoque;

    Object.defineProperty(this, 'estoque', {
        enumerable: true, //mostra a chave
        configurable: true, //pode configurar a valor?
        get: function () {
            return estoquePrivado;
        },
        set: function (valor) {
            if (typeof valor != 'number') {
                throw new TypeError('O valor a ser passado precisa ser um número');
                return;
            }
            estoquePrivado = valor;
        }
    });
}

function criaProduto(nome) {
    return {
        get nome() {
            return nome;
        },
        set nome(valor) {
            valor = valor.replace('coisa', '');
            nome = valor;
        }
    };
}

//const p1 = new Produto('Camisa', 20, 3);
//console.log(p1);
//p1.estoque = 'ai';
//console.log(p1.estoque);

const p2 = criaProduto('Camiseta');
p2.nome = 'qualquer coisa';
console.log(p2.nome);