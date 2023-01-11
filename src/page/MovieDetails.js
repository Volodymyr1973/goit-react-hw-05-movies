import { Link, Outlet, useParams } from 'react-router-dom';
// import { Cast } from '../components/cast/Cast';
// import { Reviews } from 'components/reviews/Reviews';
import { useState, useEffect, Suspense } from 'react';

const MovieDetails = () => {
  const params = useParams();
  const paramsId = Number(params.moviesId);
  const [filmDetail, setFilmDetail] = useState();

  console.log(params.moviesId);
  console.log(paramsId);
  console.log(filmDetail);

  const KEY_FILM = '0402ef8c6d0b2370fa6ac2b572dad398';
  const originUrl = 'https://api.themoviedb.org/3/';
  const baseImageUrl = 'https://image.tmdb.org/t/p/w500/';

  // const imgBaseUrl = 'https://image.tmdb.org/t/p/w500/';

  const searchFilmById = () => {
    fetch(`${originUrl}movie/${paramsId}?api_key=${KEY_FILM}&language=en-US`)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        return Promise.reject(new Error('Insert other name'));
      })
      .then(results => setFilmDetail(results))
      .catch(error => console.log(error));
  };

  useEffect(() => {
      searchFilmById();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section>
      {filmDetail && (
        <div>
          <img
            src={`${baseImageUrl}${filmDetail.poster_path}`}
            alt={filmDetail.title}
          />
          <p>
            {filmDetail.title}
            {filmDetail.release_date ? (
              <span> ({filmDetail.release_date.slice(0, 4)})</span>
            ) : (
              <span> (----)</span>
            )}
          </p>
          <p>
            User score: {Number.parseInt(filmDetail.vote_average * 10)} &#37;
          </p>
          <p>
            Overview:{filmDetail.overview}
          </p>
          <p>
            Genres:
            {filmDetail.genres.map(genre => (
              <span> {genre.name} </span>
            ))}
          </p>
        </div>
      )}
      <ul>
        <li><Link to="cast">Cast</Link></li>
        <li><Link to="reviews">Reviews</Link></li>
      </ul>

      {/* <Cast />
        <Reviews /> */}
        <Suspense fallback={<p>Loading...</p>}>
            <Outlet />
        </Suspense>
    
      
    </section>
  );
};

export default MovieDetails;