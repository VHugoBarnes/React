const express = require('express');
const Usuario = require('../models/Usuario');

const createUser = async(req, res = express.response ) => {

    try {
        const usuario = new Usuario(req.body);
        await usuario.save();

        res.status(201).json({
            ok: true,
            msg: 'register',
        });
    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: 'Por favor hable con el administrador'
        });
    }
};

const userLogin = (req, res = express.response ) => {

    const { email, password } = req.body;

    res.json({
        ok: true,
        msg: 'login',
        email,
        password,
    });
};

const tokenRenew = (req, res = express.response ) => {
    res.json({
        ok: true,
        msg: 'renew'
    });
};

module.exports = {
    createUser,
    userLogin,
    tokenRenew,
}