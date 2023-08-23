exports.globalMiddleware = (req, res, next) => {
    res.locals.umaVariavel = 'Olha uma variavel local!';

    if(req.body.client) {
        req.body.client = req.body.client.replace('Toshio', 'CHANGED HERE') // interceptou-se o valor enviado pelo formulário e o alterou
        console.log();
        console.log(`Vi que você postou ${req.body.client}`);
        console.log();
    }

    next();
};