function conta(operador, acumulador, ...numeros) {
    if (operador === '+') {
        for (let numero of numeros) {
            acumulador += numero;
        }
    } else if (operador === '-') {
        for (let numero of numeros) {
            acumulador -= numero;
        }
    } else if (operador === '*') {
        for (let numero of numeros) {
            acumulador *= numero;
        }
    } else if (operador === '/') {
        for (let numero of numeros) {
            acumulador /= numero;
        }
    }
    
    console.log(acumulador);
}

conta('*', 5, 20, 30, 40, 60, 50);