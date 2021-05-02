const mongoose = require('mongoose');

const movieSchema = mongoose.Schema({
  name: String,
  '99popularity': Number,
  director: String,
  genre: [String],
  imdb_score: Number
});

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;
