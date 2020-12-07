const express = require('express');
const Usuario = require('../models/Usuario');

const createUser = async(req, res = express.response ) => {

    const { email, usuario } = req.body;

    try {
        let usuario = await Usuario.findOne({email});
        
        if (usuario) {
            return res.status(400).json({
                ok: false,
                msg: 'El usuario ya existe con ese correo',
            });
        }

        usuario = new Usuario(req.body);
        await usuario.save();

        res.status(201).json({
            ok: true,
            uid: usuario.id,
            name: usuario.name
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