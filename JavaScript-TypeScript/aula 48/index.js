const nomes = ['vander', 'pedro', 'anderson'];
/*
se fizermos desse jeito os dois arrays vão ter alterações e naõ somente o que foi aplicado o metodo pop

const novo = nomes;

abaixo vou mostar o jeito que não altere nos valores dos dois arrays*/

const novo = [...nomes];

const anderson = novo.pop(); // remove o ultimo elemento e aramzena ele
const vander = novo.shift(); // remove o primeiro elemento e aramzena ele
nomes.push('João'); // adiciona qualquer coisa no final do meu array
nomes.unshift('Venicius'); // adiciona qualquer coisa no inicio do meu array
const fatia = nomes.slice(1, 4); // fatia e retira um pedaço do array, informando os indices que vão ser recortados

console.log(nomes);
/* 
console.log(fatia);
console.log(novo);
console.log(anderson);
console.log(vander);
console.log(novo);
*/

const nome = 'vander da costa rosa';
const dividido = nome.split(' '); //faz com que a string seja separada e formando um array
console.log(dividido);

const separado = ['vander', 'da', 'costa', 'rosa'];
const junta = separado.join(' ');//faz com que o array seja transformado em uma string
console.log(junta);

