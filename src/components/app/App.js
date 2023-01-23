import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from '../layout/Layout';

const Home = lazy(() => import("../../page/Home"));
const Movies = lazy(() => import("../../page/Movies"));
const MovieDetails = lazy(() => import("../../page/MovieDetails"));
const Cast = lazy(() => import("../cast/Cast"));
const Reviews = lazy(() => import("../reviews/Reviews"));
const NotfoundPage = lazy(() => import("../../page/NotfoundPage"));

const App = () => {
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

export default App;