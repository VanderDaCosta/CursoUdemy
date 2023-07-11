//escreva uma função que receba um numero e reforne o seguinte:
//Número é divisivel por 3: Fizz
//Número é divisivel por 5: Buzz
//Número é divisivel por 3 e 5: FizzBuzz
//Número não é divisivel por 3 e 5: retorna o proprio numero
//Cheque se o numero é realmente um numero
//Usa a função com numeros de 0 a 100


function divisivel(num) {
    if (typeof num !== 'number') return num;

    if (num % 3 === 0 && num % 5 === 0) {
        return "FizzBuzz";
    } else if (num % 3 === 0) {
        return "Fizz";
    } else if (num % 5 === 0) {
        return "Buzz";
    } else if (!num % 3 === 0 && !num % 5 === 0) {
        return num;
    }
}

for (let i = 0; i <= 100; i++) {
    console.log(i, divisivel(i));
}

