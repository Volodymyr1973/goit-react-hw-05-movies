import { Link } from 'react-router-dom';
import { Cast } from '../components/Cast';
import { Reviews } from 'components/Reviews';

export const MovieDetails = () => {
  return (
    <>
      <h2>Movies Details</h2>
      <Link to="cast">Cast</Link>
      <Cast />
      <Link to="reviews">Reviews</Link>
      <Reviews />
    </>
  );
};
