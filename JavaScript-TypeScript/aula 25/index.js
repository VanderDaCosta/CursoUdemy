const pontuacaoUsuario = 1999;

//if(pontuacaoUsuario >= 1000){
//    console.log("o ze da manga ta vip");
//}else{
//    console.log("Não vip");
//}

const nivelUsuario = pontuacaoUsuario >= 1000 ? "usuário vip!" : "não é vip";


const corUsuario = null;
const corPadrao = corUsuario || 'preto';

console.log(nivelUsuario, corPadrao);
