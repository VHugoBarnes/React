/**
 * Event Routes
 * host /api/event
 */

const { Router } = require('express');
const { validarJWT } = require('../middlewares/validar-jwt');
const { check } = require('express-validator');
const { 
    getEvent,
    createEvent,
    updateEvent,
    deleteEvent
} = require('../controllers/events');

const router = Router();

// Todas tienen que tener validación de JWT

// Obtener eventos
router.get('/', validarJWT, getEvent);

// Crear un evento
router.post('/', validarJWT, createEvent);

// Actualizar evento
router.put('/:id', validarJWT, updateEvent);

// Borrar evento
router.delete('/:id', validarJWT, deleteEvent);

module.exports = router;