const express = require('express');
const db = require('./db');

const actorsController = require('./controllers/actorController')
const moviesController = require('./controllers/movieController')
const reviewsController = require('./controllers/reviewController');

const PORT = process.env.PORT || 3003;

const app = express();


app.get('/', (req, res) => {
    res.send('Welcome to the movie reviewer!');
});

app.get('/actors', actorsController.getAllActors)
app.get('/actors/:id', actorsController.getOneActor)
app.get('/movies', moviesController.getAllMovies)
app.get('/movies/:id', moviesController.getOneMovie)
app.get('/reviews', reviewsController.getAllReviews)
app.get('/reviews/:id', reviewsController.getOneReview)


app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))


