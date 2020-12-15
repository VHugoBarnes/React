const { response } = require('express');
const Evento = require('../models/Evento');

/**
 * 
 */

// Obtener los eventos de la base de datos
const getEvent = async( req, res = response ) => {

    const eventos = await Evento.find().populate('user', 'name');

    res.status(200).json({
        ok: true,
        eventos
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
const updateEvent = async( req, res = response ) => {

    const eventoId = req.params.id;
    const uid = req.uid;

    try {

        // Obtenemos el documento
        const evento = await Evento.findById( eventoId );

        // Validar si el evento existe
        if ( !evento ) {
            res.status(404).json({
                ok: false,
                msg: 'Evento no exite por ese Id'
            });
        }

        // Validar si la persona que edita el evento también lo creo
        if ( evento.user.toString() !== uid ) {
            return res.status(401).json({
                ok: false,
                msg: 'No tiene privilegio de editar este evento'
            });
        }

        // Si llegó hasta acá es porque el evento existe y porque es la persona que lo creó
        const nuevoEvento = {
            ...req.body,
            user: uid
        }

        // Actualizamos el registro
        // Las opciones que colocamos son para pasar el nuevo registro
        const eventoActualizado = await Evento.findByIdAndUpdate( eventoId, nuevoEvento, {new: true} );

        res.json({
            ok: true,
            evento: eventoActualizado
        });
        
    } catch (error) {
        console.error(error);
        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        });
    }

}

// Eliminar un evento de la base de datos
const deleteEvent = async( req, res = response ) => {
    const eventId = req.params.id;
    const uid = req.uid;

    try {
        
        // Obtenemos el documento
        const evento = await Evento.findById( eventId );

        // Validar si el evento existe
        if ( !evento ) {
            res.status(404).json({
                ok: false,
                msg: 'Evento no exite por ese Id'
            });
        }

        // Validar si la persona que elimina el evento también lo creo
        if ( evento.user.toString() !== uid ) {
            return res.status(401).json({
                ok: false,
                msg: 'No tiene privilegio de editar este evento'
            });
        }

        // Si llegó hasta acá es porque el evento existe y porque es la persona que lo creó
        
        // Eliminamos el registro
        await Evento.findByIdAndDelete(eventId);

        res.json({
            ok: true,
            msg: "Evento eliminado"
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        });
    }

}

module.exports = {
    getEvent,
    createEvent,
    updateEvent,
    deleteEvent,
}
