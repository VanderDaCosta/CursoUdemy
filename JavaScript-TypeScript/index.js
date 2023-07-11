let horario = 7;


if(horario <= 11 && horario > 6){
    console.log("Bom dia!");
}else if(horario <= 17 && horario > 11){
    console.log("Boa tarde!");
}else if(horario <= 23 && horario >= 18){
    console.log("Boa noite!");
}else if(horario <= 6 && horario >= 0){
    console.log("Boa madrugada!");
}else{
    console.log("horario invalido!");
}