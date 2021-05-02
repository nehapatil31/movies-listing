const mongoose = require('mongoose');
const Movies = require('../models/movie.js')

const getMovies = async (req, res) => {
    try {
        const movies = await Movies.find();
        res.status(200).json(movies);
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

const createMovie = async (req, res) => {
    const movie = req.body;
    const newMovie = new Movies({ ...movie});

    try {
        await newMovie.save();

        res.status(201).json(newMovie);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

const updateMovie = async (req, res) => {
    const { id: _id } = req.params;
    const movie = req.body;

    if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No movie with that id');

    const updatedMovie = await Movies.findByIdAndUpdate(_id, { ...movie, _id }, { new: true });

    res.json(updatedMovie);
}

const deleteMovie = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No movie with that id');

    await Movies.findByIdAndDelete(id);

    res.json({ message: 'Movie Deleted successfully.' })
}


module.exports = { getMovies, createMovie, updateMovie, deleteMovie };