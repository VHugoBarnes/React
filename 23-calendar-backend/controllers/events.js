const { response } = require('express');

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
const createEvent = ( req, res = response ) => {

    // Verificar que tenga el evento
    console.log(req.body);

    res.status(201).json({
        ok: true,
        msg: 'createEvent'
    });
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
