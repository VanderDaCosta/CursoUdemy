module.exports = (req, res, next) => {
    if (req.body.cliente) {
        console.log();
        console.log(`vi que você postou ${req.body.cliente}`);
        console.log();
    }

    nexte();
};