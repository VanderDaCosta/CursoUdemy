const h1 = document.querySelector('.container h1');
const data = new Date();

function transformarDiaSemana(diaSemana){
    switch(diaSemana){
        case 0:
            return 'Domingo';
        case 1:
            return 'Segunda-feira';
        case 2:
            return 'Terça-feira';
        case 3:
            return 'Quarta-feira';
        case 4:
            return 'Quinta-feira';
        case 5:
            return 'Sexta-feira';
        case 6:
            return 'Sabado';
        default:
            return 'Data inválida';
    }
}

function nomedoMes(numeroMes){
    switch(numeroMes){
        case 0:
            return 'janeiro';
        case 1:
            return 'Fevereiro';
        case 2:
            return 'Março';
        case 3:
            return 'Abril';
        case 4:
            return 'Maio';
        case 5:
            return 'Junho';
        case 6:
            return 'Julho';
        case 7:
            return 'Agosto';
        case 8:
            return 'Setembro';
        case 9:
            return 'Outubro';
        case 10:
            return 'Novembro';
        case 11:
            return 'Dezembro';
        default:
            return 'Data inválida';
    }
}

function zeroEsquerda(num){
    return num >= 10 ? num : `0${num}`;
}

function criaData(data){
    const diaSemana = data.getDay();
    const numeroMes = data.getMonth();

    const nomeDia = transformarDiaSemana(diaSemana);
    const nomeMes = nomedoMes(numeroMes);

    return `${nomeDia}, ${data.getDate()} de ${nomeMes} ` +
            `de ${data.getFullYear()} ` +
            `${zeroEsquerda(data.getHours())}:${zeroEsquerda(data.getMinutes())}`;
}

h1.innerHTML = criaData(data);

/*
const h1 = document.querySelector('.container h1');
const data = new Date();

h1.innerHTML= data.toLocaleDateString('pt-BR', { dateStyle: 'full', timeStyle: 'short'});*/