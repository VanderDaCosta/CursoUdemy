## Funções geradoras

Elas são diferentes das funções normais pois têm um recurso especial que seria quase que pausar o codigo em determinado local. Ela nunca vai te entregar todos  os valores de uma vez, sempre vai entregar aos poucos. 
Usando a palavra "yield" ele a cada vez chamada ai retornar um valor diferente. e Quando chamado ele vai ter duas chaves: value e done, value é onde estara o valor da chave, e a chave done é para verificar se terminou o gerador, se tiver um outro valor alem do que ja foi mostrado vai apresentar "false".

- Exemplo:

        function* geradora1() {
            yield 'Valor 1';
            yield 'Valor 2';
            yield 'Valor 3';
            yield 'Valor 4';
            yield 'Valor 5';
        }

        function* gerador2(){
            let i = 0;

            while(true){
                yield i;
                i++;
            }
        }

        const g1 = gerador1();
        const g2 = gerador2();

        console.log(g1.next().value);
        console.log(g1.next().value);

Acima vai imprimir: "valor 1" e "valor 2"

        console.log(g2.next().value);
        console.log(g2.next().value);
        console.log(g2.next().value);

Acima vai imprimir: "valor 1", "valor 2" e "valor 3".