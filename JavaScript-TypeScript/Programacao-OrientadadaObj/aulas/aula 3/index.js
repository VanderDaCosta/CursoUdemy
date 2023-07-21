class DispositivoEletronico {
    constructor(nome) {
        this.nome = nome;
        this.ligado = false;
    }

    ligar() {
        if (this.ligado) {
            console.log(this.nome + " dispositivo ligado!");
            return;
        }
        this.ligado = true;
    }

    desligar() {
        if (!this.ligado) {
            console.log(this.nome + " dispositivo desligado!");
            return;
        }
        this.ligado = false;
    }
}


//EXTENDS -> palavra reservada para um classe herdar tudo da outra classe
class Smartphone extends DispositivoEletronico {
    constructor(nome, cor, modelo){
        super(nome);//Esse SUPER chama o construtor da classe PAI, e colocar os parametros que foi
                    //passado para ser executado dentro do construtor da classe FILHO
        this.cor = cor;
        this.modelo = modelo;
    }
}

class tablet extends DispositivoEletronico{
    constructor(nome, temWifi){
        super(nome);
        this.temWifi = temWifi;
    }

    ligar(){
        console.log('você alterou o metodo LIGAR')
    }
}

const t1 = new tablet('IPad', true);
t1.ligar();
console.log(t1.ligado)