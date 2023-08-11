exports.paginaInicial = (req, res, next) => {
    res.render('index');
    console.log(`Olha o que tem na req.session.nome = ${req.session.nome}`)
    //next();
    return;
};

exports.trataPost = (req, res, next) => { 
    res.send(req.body);
    return;
};