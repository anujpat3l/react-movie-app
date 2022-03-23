const { movies } = require('../constants/movies');

const getAllMovies = (req, res) => {
  res.json(movies);
};

const getMovie = (req, res) => {
  const { movieId } = req.params;
  try {
    const movie = movies.filter((movie) => movie.id === Number(movieId));
    if (movie.length === 0) throw new Error('Movie not found');
    res.json({
      message: 'Movie Found!',
      movie: movie && movie[0],
    });
  } catch (e) {
    res.status(404).json({
      message: e.message,
    });
  }
};

const addMovie = async (req, res) => {
  const { title, poster, rating } = req.body;

  try {
    const createdMovie = await Movie.create({
      title,
      rating,
      poster,
    });
    return res.json({
      message: 'Movie Created',
      movie: createdMovie,
    });
  } catch (e) {
    res.status(500).json({
      message: e.message,
    });
  }
};

module.exports = {
  getAllMovies,
  getMovie,
  addMovie,
};
