const { response } = require('express');
const Evento = require('../models/Evento');

/**
 * 
 */

// Obtener los eventos de la base de datos
const getEvent = ( req, res = response ) => {
    res.status(200).json({
        ok: true,
        msg: 'getEvent'
    });
}

// Insertar un nuevo evento en la base de datos
const createEvent = async( req, res = response ) => {

    const evento = new Evento( req.body ); // Instancia de Evento, pasamos por parametro
                                        // los argumentos del body (title, start, end, note)

    try {
        // Al no mandarse el id del usuario por el body
        // se necesita asignar el id del usuario.
        evento.user = req.uid;
        // Guardamos en la base de datos y esperamos con el await.
        const eventoGuardado = await evento.save();

        res.json({
            ok: true,
            evento: eventoGuardado
        });

    } catch (error) {   // Manejo de errores al guardar en la BD.
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        });
    }
}

// Actualizar un evento de la base de datos
const updateEvent = ( req, res = response ) => {
    res.status(200).json({
        ok: true,
        msg: 'updateEvent'
    });
}

// Eliminar un evento de la base de datos
const deleteEvent = ( req, res = response ) => {
    res.status(202).json({
        ok: true,
        msg: 'deleteEvent'
    });
}

module.exports = {
    getEvent,
    createEvent,
    updateEvent,
    deleteEvent,
}
