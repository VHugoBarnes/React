const express = require('express');
const { validationResult } = require('express-validator');

const createUser = (req, res = express.response ) => {

    const { name, email, password } = req.body;

    // manejo de errores
    const errors = validationResult(req);
    if ( !errors.isEmpty() ) {
        return res.status(400).json({
            ok: false,
            errors: errors.mapped()
        });
    }

    res.status(201).json({
        ok: true,
        msg: 'register',
        name,
        email,
        password
    });
};

const userLogin = (req, res = express.response ) => {

    const { email, password } = req.body;

    const errors = validationResult(req);
    if ( !errors.isEmpty() ) {
        return res.status(400).json({
            ok: false,
            errors: errors.mapped()
        });
    }

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