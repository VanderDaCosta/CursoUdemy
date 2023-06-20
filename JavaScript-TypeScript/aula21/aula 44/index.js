//Quando a função está dentro do objeto a gente chama ela de metodo
// factory function
function criaPessoa(nome, sobrenome){
    return {
        nome, 
        sobrenome,
        fala: function(assunto){
            return `${nome} ${sobrenome} está falando sobre ${assunto}.`;
        }
    };
}

const p1 = criaPessoa('vander', 'rosa');

console.log(p1.fala('programação'));


