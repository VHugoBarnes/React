const express = require('express');

const createUser = (req, res = express.response ) => {

    const { name, email, password } = req.body;

    if(name.length < 1){
        return res.status(400).json({
            ok: false,
            msg: "El nombre tiene que ser mayor a 0 letras"
        });
    }

    res.json({
        ok: true,
        msg: 'register',
        name,
        email,
        password
    });
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