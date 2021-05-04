const express = require('express');
const admin = require('../controllers/admin.js');

const router = express.Router();

router.post('/login', admin.logIn);
router.post('/signup', admin.signup);

// export default router;
module.exports = router;