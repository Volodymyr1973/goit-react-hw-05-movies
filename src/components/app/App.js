import { Routes, Route } from 'react-router-dom';
import { Home } from '../../page/Home';
import { Movies } from '../../page/Movies';
import { NotfoundPage } from '../../page/NotfoundPage';
import { MovieDetails } from 'page/MovieDetails';
import { Layout } from '../layout/Layout';
import { Cast } from '../cast/Cast';
import { Reviews } from '../reviews/Reviews';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:moviesId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<NotfoundPage />} />
        </Route>
      </Routes>
    </div>
  );
};
