const Genres = require('../models/genre.js');

const getGenres = async (req, res) => {
  try {
    const genres = await Genres.find();
    res.status(200).json(genres);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const addGenre = async (req, res) => {
    const genre = req.body;
    const newGenre = new Genres({ ...genre});

    try {
        await newGenre.save();

        res.status(201).json(newGenre);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
};

module.exports = { getGenres, addGenre };
