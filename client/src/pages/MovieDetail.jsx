import React from 'react';
import { useParams } from 'react-router-dom';
const Moviedetail = () => {
  const { movieId } = useParams();
  return (
    <div>
      <h1>Movie Detail {movieId}</h1>
    </div>
  );
};

export default Moviedetail;
