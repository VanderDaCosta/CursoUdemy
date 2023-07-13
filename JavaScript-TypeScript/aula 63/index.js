const pessoas = [
    { id: 3, nome: 'Vander', },
    { id: 2, nome: 'Luiz', },
    { id: 1, nome: 'Maria', },
];

//const novasPessoas = {};
//for (const pessoa of pessoas) {
//    const { id } = pessoa;
//    novasPessoas[id] =  {...pessoa};
//}


const novasPessoas = new Map();
for (const pessoa of pessoas) {
    const { id } = pessoa;
    novasPessoas.set(id, { ...pessoa });
}


//Para retornar um ARRAY
//for(const pessoa of novasPessoas){
//    console.log(pessoa);
//}


//Quase um CRUd

novasPessoas.delete(2);
console.log(novasPessoas);