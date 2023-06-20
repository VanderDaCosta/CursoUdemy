## Aula sobre funções construtoras

tanto as funções fabricas, quanto as funções construtoras criam novos objetos(em JavaScript).
A unica diferença da função fabrica(1) para a função construtora(2).

A função 1 é uma função normal que ja foi criado nessas ultimas aulas e ela retorna um objeto voluntariamente.

Na função 2 ela ja faz muita coisa automaticamente, ela ja cria e retorna o objeto, a unica coisa que você precisa fazer é criar ela.

- outras diferenças:

Na função 1 precisamos sempre inicir seu nome com letra maiúscula. E sempre temos que usar a palavra "new".

Exemplo:

    function Pessoa (nome, sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    const p1 = new Pessoa('Vander', 'Rosa');
    const p2 = new Pessoa('Lucas', 'Vieira');

    console.log(p1.nome, p1.sobrenome);
    console.log(p2.nome, p2.sobrenome);

O Codigo acima vai imprimir no p1 'Vander Rosa'


as duas funções são um molde para gerar novos objetos. Nas duas opções conseguimos criar atributos ou metodos privados.