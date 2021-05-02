const express = require('express');
const genre = require('../controllers/genres.js');
const auth = require('../middleware/auth.js');

const router = express.Router();

router.get('/', genre.getGenres);
router.post('/', genre.addGenre);

// export default router;
module.exports = router;