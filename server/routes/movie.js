const express = require('express');
const movies = require('../controllers/movies.js');
const auth = require('../middleware/auth.js');

const router = express.Router();

router.get('/', movies.getMovies);
router.post('/', auth, movies.createMovie);
router.patch('/:id', auth, movies.updateMovie);
router.delete('/:id', auth, movies.deleteMovie);

// export default router;
module.exports = router;