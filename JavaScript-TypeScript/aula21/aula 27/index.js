const data = new Date();
const diaSemana = data.getDay();

function transformarDiaSemana(diaSemana){
    switch(diaSemana){
        case 0:
            return 'Domingo';
        case 1:
            return 'Segunda';
        case 2:
            return 'Terça';
        case 3:
            return 'Quarta';
        case 4:
            return 'Quinta';
        case 5:
            return 'Sexta';
        default:
            return 'Data inválida';
    }
}

console.log(transformarDiaSemana(diaSemana));
