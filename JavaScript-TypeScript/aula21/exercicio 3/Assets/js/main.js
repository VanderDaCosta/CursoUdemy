const elementos = [
    {tag: 'p', texto: 'frase do paragrafo'},
    {tag: 'div', texto: 'frase da divisão'},
    {tag: 'footer', texto: 'frase de outros'},
    {tag: 'section', texto: 'frase da seção'}
];

const container = document.querySelector('.container');
const div = document.createElement('div');


for(let i = 0 ; i < elementos.length ; i++){
   let { tag, texto} = elementos[i];
   let tagC = document.createElement(tag);
   let textoC = document.createTextNode(texto)
   
   tagC.appendChild(textoC);
   div.appendChild(tagC);
}

container.appendChild(div);