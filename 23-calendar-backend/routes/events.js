/**
 * Event Routes
 * host /api/event
 */

const { Router } = require('express');
const { check } = require('express-validator');

const { validarCampos } = require('../middlewares/validar-campos');
const { validarJWT } = require('../middlewares/validar-jwt');
const { 
    getEvent,
    createEvent,
    updateEvent,
    deleteEvent
} = require('../controllers/events');
const { isDate } = require('../helpers/isDate');

const router = Router();

// Todas tienen que tener validación de JWT
router.use( validarJWT );

// Obtener eventos
router.get('/', getEvent);

// Crear un evento
router.post(
    '/',
    [   // middlewares
        check('title', 'El titulo es obligatorio').not().isEmpty(),
        check('start', 'Fecha de inicio es obligatoria').custom(isDate),
        check('end', 'Fecha de finalización es obligatoria').custom(isDate),
        validarCampos
    ],
    createEvent
);

// Actualizar evento
router.put('/:id', updateEvent);

// Borrar evento
router.delete('/:id', deleteEvent);

module.exports = router;