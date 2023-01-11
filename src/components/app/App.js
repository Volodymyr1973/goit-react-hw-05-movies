import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
// import { Home } from '../../page/Home';
// import { Movies } from '../../page/Movies';
// import { NotfoundPage } from '../../page/NotfoundPage';
// import { MovieDetails } from 'page/MovieDetails';
import Layout from '../layout/Layout';
// import { Cast } from '../cast/Cast';
// import { Reviews } from '../reviews/Reviews';

const Home = lazy(() => import("../../page/Home"));
const Movies = lazy(() => import("../../page/Movies"));
const MovieDetails = lazy(() => import("../../page/MovieDetails"));
const Cast = lazy(() => import("../cast/Cast"));
const Reviews = lazy(() => import("../reviews/Reviews"));
const NotfoundPage = lazy(() => import("../../page/NotfoundPage"));



const App = () => {
  return (
    <div>

      <Suspense fallback={<p>Loading.......</p>}>
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
      </Suspense>
      
      
    </div>
  );
};

export default App;