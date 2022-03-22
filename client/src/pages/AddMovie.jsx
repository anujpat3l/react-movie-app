import React from 'react';
import { useParams } from 'react-router-dom';

const AddMovie = () => {
  const { movieId } = useParams();

  return (
    <div>
      <h1>Add Movie {movieId}</h1>
    </div>
  );
};

export default AddMovie;
