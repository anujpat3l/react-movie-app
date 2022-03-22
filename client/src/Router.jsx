import { Route, Routes } from 'react-router-dom';

import AddMovie from './pages/AddMovie';
import Home from './pages/Home';
import Moviedetail from './pages/MovieDetail';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/add-movie" element={<AddMovie />} />
      <Route path="/:movieId" element={<Moviedetail />} />
    </Routes>
  );
};

export default Router;
