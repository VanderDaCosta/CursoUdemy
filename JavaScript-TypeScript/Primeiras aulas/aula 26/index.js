function zeraEsquerda(num) {
    return num >= 10 ? num : `0${num}`;
}

function formataData(data) {
    const dia = zeraEsquerda(data.getDate());
    const mes = zeraEsquerda(data.getMonth() + 1);
    const ano = zeraEsquerda(data.getFullYear());
    const hora = zeraEsquerda(data.getHours());
    const minuto = zeraEsquerda(data.getMinutes());
    const segundo = zeraEsquerda(data.getSeconds());

    return `${dia}/${mes}/${ano}  ${hora}:${minuto}:${segundo}`
}

const data = new Date();
const dataBrasil = formataData(data);

console.log(dataBrasil);