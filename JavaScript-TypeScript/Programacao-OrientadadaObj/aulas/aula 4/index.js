class controleRemoto {
    constructor(tv) {
        this.tv = tv;
        this.volume = 0;
    }

    aumentarVolume() {
        this.volume += 2;
    }

    //Método de instância
    diminuirVolume() {
        this.volume -= 1;
    }

    //Método estático
    //eles não tem acesso aos dados da instância
    static trocaPilha() { 
        console.log(this.volume);
    }
}

const controle1 = new controleRemoto('LG');
const controle2 = new controleRemoto('Samsung');

