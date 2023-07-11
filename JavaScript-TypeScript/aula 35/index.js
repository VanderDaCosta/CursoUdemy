function retornaHora(data) {
    if (data && !(data instanceof Date)) {
        throw new TypeError('Esperando uma instancia de Date.');
    }

    if (!data) {
        data = new Date();
    }

    return data.toLocaleString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    });
}

try {
    const data = new Date('01-02-2023 12:58:30');
    const hora = retornaHora();
    console.log(hora);
}catch(e){
    //tratar erro
}finally{
    console.log('Tenha um Bom dia')
}
