const express = require('express');
const bcrypt = require('bcryptjs');
const Usuario = require('../models/Usuario');
const { generarJWT } = require('../helpers/jwt');

const createUser = async(req, res = express.response ) => {

    const { email, password } = req.body;

    try {
        let usuario = await Usuario.findOne({email});
        
        if (usuario) {
            return res.status(400).json({
                ok: false,
                msg: 'El usuario ya existe con ese correo',
            });
        }

        usuario = new Usuario(req.body);

        // Encriptar contraseña
        const salt = bcrypt.genSaltSync();
        usuario.password = bcrypt.hashSync( password, salt );

        await usuario.save();

        // Generar JWT (JSON Web Token)
        const token = await generarJWT( usuario.id, usuario.name );

        res.status(201).json({
            ok: true,
            uid: usuario.id,
            name: usuario.name,
            token
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            ok: false,
            msg: 'Por favor hable con el administrador'
        });
    }
};

const userLogin = async(req, res = express.response ) => {

    const { email, password } = req.body;

    try {
        const usuario = await Usuario.findOne({email});

        if (!usuario) {
            return res.status(400).json({
                ok: false,
                msg: 'El usuario no existe con ese email',
            });
        }

        // Confirmar las contraseñas
        const validPassword = bcrypt.compareSync(password, usuario.password);

        if ( !validPassword ) {
            return res.status(400).json({
                ok: false,
                msg: 'Password incorrecto'
            });
        }

        // Generar el JWT (JSON Web Token)
        const token = await generarJWT( usuario.id, usuario.name );

        res.status(200).json({
            ok: true,
            uid: usuario.id,
            name: usuario.name,
            token
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({
            ok: false,
            msg: 'Por favor hable con el administrador'
        });
    }
};

const tokenRenew = async(req, res = express.response ) => {

    const uid = req.uid;
    const name = req.name;

    // Generar un nuevo JWT y retornarlo en esta petición
    const token = await generarJWT( uid, name );;

    res.json({
        ok: true,
        msg: 'renew',
        token
    });
};

module.exports = {
    createUser,
    userLogin,
    tokenRenew,
}