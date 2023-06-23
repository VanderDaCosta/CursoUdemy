## Aula sobre funções recursivas

Ela é um função que se chama

- Exemplo:

      function recursiva (max){
        if(max >= 10) return;
        max++;
        console.log(max);
        recursiva(max);
        }
        recursiva(-10);

Então essa função recebe um parametro, se o numero for maior ou igual a 10, ela para. Caso contrario ela vai incrementar um, imprimir no console o seu valor e no final vai se chamar novamente.

