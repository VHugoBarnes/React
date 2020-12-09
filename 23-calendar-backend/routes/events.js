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
router.use( validarJWT );

// Obtener eventos
router.get('/', getEvent);

// Crear un evento
router.post('/', createEvent);

// Actualizar evento
router.put('/:id', updateEvent);

// Borrar evento
router.delete('/:id', deleteEvent);

module.exports = router;