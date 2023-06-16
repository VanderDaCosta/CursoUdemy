function criaMultiplicador(mult) {
    return function (n) {
        return n * mult;
    };
}

const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
const quadriplica = criaMultiplicador(4);

console.log(duplica(3));
console.log(triplica(3));
console.log(quadriplica(3));