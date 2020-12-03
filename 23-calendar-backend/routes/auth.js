/**
 * Rutas de usuarios / auth
 * host + /api/auth
 */

const { Router } = require('express');
const { check } = require('express-validator');
const router = Router();

const { createUser, userLogin, tokenRenew,} = require('../controllers/auth');

router.post(
    '/new',
    [ // Middleware
        check('name', 'el nombre es obligatorio').not().isEmpty(),
        check('email', 'el email es obligatorio').isEmail(),
        check('password', 'el password debe de ser de 6 caracteres o más').isLength({min: 6})
    ],
    createUser
);

router.post(
    '/',
    [ // Middleware express-validator
        check('email', 'el email es obligatorio').isEmail(),
        check('password', 'el password debe de ser 6 o más caracteres').isLength({min: 6})
    ],
    userLogin
);

router.get('/renew', tokenRenew);

module.exports = router;