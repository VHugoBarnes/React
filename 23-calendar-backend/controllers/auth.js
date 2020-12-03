const express = require('express');

const createUser = (req, res = express.response ) => {
    res.json({
        ok: true,
        msg: 'register'
    });
};

const userLogin = (req, res = express.response ) => {
    res.json({
        ok: true,
        msg: 'login'
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