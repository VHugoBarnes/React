/**
 * Rutas de usuarios / auth
 * host + /api/auth
 */

const { Router } = require('express');
const router = Router();
const { createUser, userLogin, tokenRenew,} = require('../controllers/auth');

router.post('/new', createUser);

router.post('/', userLogin);

router.get('/renew', tokenRenew);

module.exports = router;