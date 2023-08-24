class ValidaCPf {
    constructor(cpfEnviado) {
        Object.defineProperty(this, 'cpfLimpo', {
            writable: false,
            enumerable: false,
            configurable: false,
            //essa expressão serve para deixar so os numeros no retorno
            value: cpfEnviado.replace(/\D+/g, ''),
        });
    }

    sequencia() {
        //Repetir o primeiro caractere pelo tamanho do "cpfLimpo"
        //return this.cpfLimpo.charAt(0).repeat(this.cpfLimpo.lenght);

        //Repetir o primeiro caractere onze vezes
        return this.cpfLimpo.charAt(0).repeat(11) === this.cpfLimpo;
    }

    geraNovoCpf() {
        const cpfSemDigitos = this.cpfLimpo.slice(0, -2);
        const digito1 = ValidaCPf.geraDigito(cpfSemDigitos);
        const digito2 = ValidaCPf.geraDigito(cpfSemDigitos + digito1);
        this.novoCPF = cpfSemDigitos + digito1 + digito2;
    }
    //quando não usamos a palavra "this" em um metodo, quer dizer que ele pode ser "estático"
    static geraDigito(cpfSemDigitos) {
        let total = 0;
        let reverso = cpfSemDigitos.length + 1;

        for (let stringNumerica of cpfSemDigitos) {
            total += reverso * Number(stringNumerica);
            reverso--;
        }

        const digito = 11 - (total % 11);
        return digito <= 9 ? String(digito) : '0';
    }

    valida() {
        if (!this.cpfLimpo) return false;
        if (typeof this.cpfLimpo !== 'string') return false;
        if (this.cpfLimpo.length !== 11) return false;
        if (this.sequencia()) return false;

        this.geraNovoCpf();

        return this.novoCPF === this.cpfLimpo;

    }
}

let cpf = new ValidaCPf('070.987.720-03');
let cpf2 = new ValidaCPf('622.008.673-28');

if(cpf.valida()){
    console.log('Cpf válido!');
} else {
    console.log('Cpf inválido!');
}
