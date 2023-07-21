## Aula sobre concatenação de Arrays

Para a concatenação de array, é errado usar o sinal de adição(+). O certo seria usar o metodo ".concat()".

Exemplo:

    const a1 = [1, 5, 9];
    const a2 = [3, 4, 7];
    const a3 = a1.concat(a2);
Resultado no console:
    
    [ 1, 5, 9, 3, 4, 7 ]
O metodo concat permite que a gente crie um novo array quando chamamos esse metodo.

    const a1 = [1, 5, 9];
    const a2 = [3, 4, 7];
    const a3 = a1.concat(a2, [2, 6, 8]);
Resultado no console:

    [
        1, 5, 9, 3, 4,
        7, 2, 6, 8
    ]
Temos como fazer usando o spread operator:

    const a1 = [1, 5, 9];
    const a2 = [3, 4, 7];
    const a3 = [...a1, ...a2];
Resultado no console:

    [ 1, 5, 9, 3, 4, 7 ]
Podemos tambem adicionar mais valores:

    const a1 = [1, 5, 9];
    const a2 = [3, 4, 7];
    const a3 = [...a1, ...[ 2, 6, 8], ...a2];
Resultado no console:

    [
        1, 5, 9, 2, 6,
        8, 3, 4, 7
    ]
