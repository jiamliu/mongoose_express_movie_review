const db = require('../db');
const { Movie } = require('../models/movieinfo');
const { Actor } = require('../models/actorinfo');
const { Review } = require('../models/reviewinfo');

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const main = async () => {
  let movies, actors, reviews;

  try {
    movies = await Movie.insertMany([
      {
        title: "The Fast and the Furious: Tokyo Drift",
        runtime: 104,
        rating: "PG-13",
        yearReleased: 2006,
        description: "In order to avoid a jail sentence, Sean Boswell heads to Tokyo to live with his military father. In a low-rent section of the city, Shaun gets caught up in the underground world of drift racing.",
        posterImage: "https://upload.wikimedia.org/wikipedia/en/thumb/4/4f/Poster_-_Fast_and_Furious_Tokyo_Drift.jpg/220px-Poster_-_Fast_and_Furious_Tokyo_Drift.jpg"
      },
      {
        title: "The Godfather",
        runtime: 175,
        rating: "R",
        yearReleased: 1972,
        description: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
        posterImage: "https://upload.wikimedia.org/wikipedia/en/1/1c/Godfather_ver1.jpg"
      },
      {
        title: "The Dark Knight",
        runtime: 152,
        rating: "PG-13",
        yearReleased: 2008,
        description: "When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham.",
        posterImage: "https://upload.wikimedia.org/wikipedia/en/1/1c/The_Dark_Knight_%282008_film%29.jpg"
      },
      {
        title: "Guardians of the Galaxy",
        runtime: 121,
        rating: "PG-13",
        yearReleased: 2014,
        description: "A group of intergalactic criminals must pull together to stop a fanatical warrior with plans to purge the universe.",
        posterImage: "https://upload.wikimedia.org/wikipedia/en/3/33/Guardians_of_the_Galaxy_%28film%29_poster.jpg"
      },
      {
        title: "Avengers: Age of Ultron",
        runtime: 141,
        rating: "PG-13",
        yearReleased: 2015,
        description: "When Tony Stark and Bruce Banner try to jump-start a dormant peacekeeping program called Ultron, things go horribly wrong and it's up to Earth's mightiest heroes to stop the villainous Ultron from enacting his terrible plan.",
        posterImage: "https://upload.wikimedia.org/wikipedia/en/f/ff/Avengers_Age_of_Ultron_poster.jpg"
      }
    ]);

    actors = await Actor.insertMany([
      // Actors for "The Fast and the Furious: Tokyo Drift"
      { name: "Lucas Black", age: 40, alive: true, movies: [movies[0]._id] },
      { name: "Sung Kang", age: 49, alive: true, movies: [movies[0]._id] },
      { name: "Bow Wow", age: 34, alive: true, movies: [movies[0]._id] },
      { name: "Nathalie Kelley", age: 36, alive: true, movies: [movies[0]._id] },
      { name: "Brian Tee", age: 44, alive: true, movies: [movies[0]._id] },
      // Actors for "The Godfather"
      { name: "Marlon Brando", age: 80, alive: false, movies: [movies[1]._id] },
      { name: "Al Pacino", age: 81, alive: true, movies: [movies[1]._id] },
      { name: "James Caan", age: 82, alive: true, movies: [movies[1]._id] },
      { name: "Richard S. Castellano", age: 55, alive: false, movies: [movies[1]._id] },
      { name: "Robert Duvall", age: 91, alive: true, movies: [movies[1]._id] },
      // Actors for "The Dark Knight"
      { name: "Christian Bale", age: 47, alive: true, movies: [movies[2]._id] },
      { name: "Heath Ledger", age: 28, alive: false, movies: [movies[2]._id] },
      { name: "Aaron Eckhart", age: 53, alive: true, movies: [movies[2]._id] },
      { name: "Michael Caine", age: 89, alive: true, movies: [movies[2]._id] },
      { name: "Maggie Gyllenhaal", age: 44, alive: true, movies: [movies[2]._id] },
      // Actors for "Guardians of the Galaxy"
      { name: "Chris Pratt", age: 41, alive: true, movies: [movies[3]._id] },
      { name: "Zoe Saldana", age: 42, alive: true, movies: [movies[3]._id] },
      { name: "Dave Bautista", age: 52, alive: true, movies: [movies[3]._id] },
      { name: "Vin Diesel", age: 53, alive: true, movies: [movies[3]._id] }, 
      { name: "Bradley Cooper", age: 46, alive: true, movies: [movies[3]._id] } ,
      // Actors for "Avengers: Age of Ultron"
      { name: "Robert Downey Jr.", age: 56, alive: true, movies: [movies[4]._id] },
      { name: "Chris Hemsworth", age: 37, alive: true, movies: [movies[4]._id] },
      { name: "Mark Ruffalo", age: 53, alive: true, movies: [movies[4]._id] },
      { name: "Chris Evans", age: 40, alive: true, movies: [movies[4]._id] },
      { name: "Scarlett Johansson", age: 36, alive: true, movies: [movies[4]._id] }
    ]);
    
    reviews = await Review.insertMany([
      { movie: movies[0]._id, score: 9, comment: "This is a great action movie for car lovers and it is a must to see to me." },
      { movie: movies[1]._id, score: 10, comment: "An iconic film that stands the test of time." },
      { movie: movies[2]._id, score: 8, comment: "A thrilling action-packed movie." },
      { movie: movies[3]._id, score: 10, comment: "This is one of the greatest movies that combines both actual actors and animated characters."},
      { movie: movies[4]._id, score: 9, comment: "This is the first Avenger movie I saw, I enjoy every single action of it."}
    ]);

    console.log("Movies, Actors, and Reviews info extracted");
  } catch (error) {
    console.error("Error:", error.message);
  } finally {
    db.close();
  }
};

main();




