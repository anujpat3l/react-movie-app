import { useEffect, useState } from 'react';
import { Container, Alert, Button, Card } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import SearchBar from '../components/Searchbar';
import Loader from '../components/Loader';

function Home() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState([null]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    try {
      setLoading(true);
      const response = await axios('http://localhost:4000/api/movies');
      setLoading(false);
      setMovies(response.data);
      setError(false);
    } catch (e) {
      setLoading(false);
      setError(' Server Error');
    }
  };

  const onClickViewMovie = ({ id }) => {
    navigate(`/${id}`);
  };
  return (
    <Container>
      <SearchBar onClickRefresh={fetchMovies} />
      {error && <Alert variant="danger">{error}</Alert>}
      {!loading ? (
        <div className="d-flex flex-wrap m-5 justify-content-center">
          {movies.map((movie) => {
            const { title, id } = movie;
            return (
              <Card key={id} className="m-3 movie-card">
                <Card.Body>
                  <Card.Title>{title}</Card.Title>
                  <Card.Text>This movie was released in YEAR.</Card.Text>
                  <Button
                    variant="success"
                    onClick={() => onClickViewMovie(movie)}
                  >
                    View Movie
                  </Button>
                </Card.Body>
              </Card>
            );
          })}
        </div>
      ) : (
        <Loader />
      )}
    </Container>
  );
}

export default Home;
