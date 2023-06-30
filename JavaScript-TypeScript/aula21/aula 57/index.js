//defineProperty  => Getter e Setters
//Getter - serve para obter o valor
//Setter - serve para setar o valor


function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;

    Object.defineProperty(this, 'estoque', {
        enumerable: true, //mostra a chave
        configurable: true, //pode configurar a valor?
        get: function(){
            return estoque;
        },
        set: function(valor){
            console.log(valor);
        }
    });

}

const p1 = new Produto('Camisa', 20, 3);
console.log(p1);
p1.estoque = 'O valor que eu quero';
console.log(p1.estoque);