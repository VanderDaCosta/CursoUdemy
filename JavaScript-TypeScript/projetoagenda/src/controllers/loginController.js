const { async } = require('regenerator-runtime');
const Login = require('../models/loginModel');

exports.indez = (req, res) => {
    res.render('login');
};

exports.register = async function (req, res) {//registrar o usuario
    try {
        const login = new Login(req.body);
        await login.register();

        if (login.errors.length > 0) {
            req.flash('errors', login.errors);
            req.session.save(function () {
                return res.redirect('back');
            });
            return;
        }

        req.flash('success', 'Seu usuario foi criado com sucesso');
        req.session.save(function () {
            return res.redirect('back');
        });

    } catch (e) {
        console.log(e);
        return res.render('404');
    }
};

exports.login = async function (req, res) {//logar o usuario
    try {
        const login = new Login(req.body);
        await login.login();

        if (login.errors.length > 0) {
            req.flash('errors', login.errors);
            req.session.save(function () {
                return res.redirect('back');
            });
            return;
        }

        req.flash('success', 'Seu usuario foi criado com sucesso');
        req.session.save(function () {
            return res.redirect('back');
        });

    } catch (e) {
        console.log(e);
        return res.render('404');
    }
};

