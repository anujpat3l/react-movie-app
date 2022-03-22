import { useEffect, useState } from "react";
import { Alert, Button, Card } from "react-bootstrap";
import axios from "axios";

import SearchBar from "../components/Searchbar";
import Loader from "../components/Loader";

function Home() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState([null]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    try {
      setLoading(true);
      const response = await axios("http://localhost:4000/movies");
      setLoading(false);
      setMovies(response.data);
      setError(false);
    } catch (e) {
      setLoading(false);
      setError(" Server Error");
    }
  };

  return (
    <>
      <SearchBar onClickRefresh={fetchMovies} />
      {error && <Alert variant="danger">{error}</Alert>}
      {!loading ? (
        <div className="d-flex flex-wrap m-5 justify-content-center">
          {movies.map(({ title, id }) => {
            return (
              <Card key={id} className="m-3 movie-card">
                <Card.Body>
                  <Card.Title>{title}</Card.Title>
                  <Card.Text>This movie was released in YEAR.</Card.Text>
                  <Button variant="success">Book Movie</Button>
                </Card.Body>
              </Card>
            );
          })}
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
}

export default Home;
