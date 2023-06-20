## Nessa aula o professor falou que quando uma função é declarada dentro de um objeto devemos chamar ela de metodo.
<br>
<br>

### entendendo um pouco sobre o que é o 'this' em JavaScript.
<br>

O "this" em JavaScript se refere ao objeto que está sendo referenciado em um determinado contexto ou escopo. Ele pode ser usado dentro de uma função para se referir ao objeto que a chamou, ou pode ser usado fora de uma função para se referir ao objeto global (no caso do navegador, seria o objeto "window").

A definição e aplicabilidade podem ser um pouco confusas, pois o valor de "this" pode mudar dependendo do contexto em que é usado. Em uma função, por exemplo, o valor de "this" pode ser definido pelo modo como a função é chamada, e não pela maneira como ela é definida. Isso pode ser um pouco complicado, mas também pode ser útil em certas situações.

- Exemplo:

<br>
    
    let pessoa = {

    nome: 'João',

    apresentar: function() {

    console.log(`Olá, meu nome é ${this.nome}.`);

    } };

    pessoa.apresentar( ); 

    Isso vai imprimir "Olá, meu nome é João.".


Nesse exemplo, usamos o "this" dentro do método "apresentar" para se referir ao objeto "pessoa" e acessar sua propriedade "nome". Quando chamamos o método "apresentar" a partir do objeto "pessoa", o "this" se refere ao próprio objeto "pessoa".

Sem o uso do "this", teríamos que passar o nome da pessoa como um argumento para o método "apresentar", o que tornaria o código mais verboso.

Em resumo, o "this" é uma palavra-chave importante em JavaScript que se refere ao objeto em um determinado contexto ou escopo. Ele pode ser usado para acessar e manipular propriedades e métodos de um objeto. Entender como o "this" funciona em diferentes situações pode ser útil para escrever código JavaScript mais eficiente e claro.

 - Exemplo sem usar a palavra chave 'this':
 
 <br>

    function pessoa (nome){
    return{
        nome,
        apresentar: function() {
        return `Olá, meu nome é ${nome}.`;
            }
        };
    }
    const pessoa1 = pessoa('João');

    console.log(pessoa1.apresentar());

    Isso vai imprimir "Olá, meu nome é João.".