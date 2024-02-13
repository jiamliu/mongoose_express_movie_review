const Movie = require('../models/movieinfo')

const getAllMovies = async (req,res) => {
    try {
        const movies = await Movie.find().populate('actors').populate('reviews');
        return res.json(movies)
    } catch (e) {
        return res.status(500).send(e.message)
    }
}

const getOneMovie = async (req,res) => {
    try {
        const id = req.params.id
        const movie = await Movie.findById(id)
        if (movie) {
            return res.json(movie)
        }
        return res.status(404).send('No movies available!')
    } catch (e) {
        console.log(e.message)
        return res.status(500).send(e.message)
    }
}

module.exports = {
    getAllMovies,
    getOneMovie
}