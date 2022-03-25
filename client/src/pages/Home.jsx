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
  const [searchText, setSearchText] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    try {
      setLoading(true);
      const response = await axios(
        `http://localhost:4000/api/movies?searchText=${searchText}`
      );
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
      <SearchBar onClickRefresh={fetchMovies} setSearchText={setSearchText} />
      {error && <Alert variant="danger">{error}</Alert>}
      {!loading ? (
        <div className="d-flex flex-wrap m-5 justify-content-center">
          {movies.map((movie) => {
            const { title, id, poster, rating } = movie;
            return (
              <Card className="m-3" style={{ width: '15rem' }}>
                <Card.Body key={id}>
                  <img
                    src={poster}
                    key={id}
                    style={{ width: '13rem', height: '200px' }}
                  />
                  <div className="d-flex">
                    <Card.Title style={{ width: '100%' }}>{title}</Card.Title>
                    <span className="d-flex ">{rating}</span>
                  </div>
                  <Button
                    variant="primary"
                    onClick={() => onClickViewMovie(movie)}
                  >
                    View Movies
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
