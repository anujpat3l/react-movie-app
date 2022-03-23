const express = require('express');
const { getAllMovies, getMovie } = require('../controllers/movieController');

const router = express.Router();

router.get('/', getAllMovies).get('/:movieId', getMovie);

module.exports = router;
