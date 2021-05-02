const express = require('express');
const movies = require('../controllers/movies.js');
const auth = require('../middleware/auth.js');

const router = express.Router();

router.get('/', movies.getMovies);
router.post('/', movies.createMovie);
router.patch('/:id', movies.updateMovie);
router.delete('/:id', movies.deleteMovie);

// export default router;
module.exports = router;