import { Link, Outlet, useParams } from 'react-router-dom';
// import { Cast } from '../components/cast/Cast';
// import { Reviews } from 'components/reviews/Reviews';
import { useState } from 'react';

export const MovieDetails = () => {
  const params = useParams();
  const paramsId = Number(params.moviesId);
  const [filmDetail, setFilmDetail] = useState();

  console.log(params.moviesId);
  console.log(paramsId);
  console.log(filmDetail);

  const KEY_FILM = '0402ef8c6d0b2370fa6ac2b572dad398';
  const originUrl = 'https://api.themoviedb.org/3/';

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

  // useEffect(() => {
  //   console.log(3);

  //   searchFilmById();
  // }, []);

  return (
    <>
      {filmDetail && (
        <div>
          <img
            src={`https://image.tmdb.org/t/p/w500/${filmDetail.poster_path}`}
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
            Overview: <span>{filmDetail.overview}</span>
          </p>
          <p>
            Genres:
            {filmDetail.genres.map(genre => (
              <span> {genre.name} </span>
            ))}
          </p>
        </div>
      )}
      <section>
        <Link to="cast">Cast</Link>
        <Link to="reviews">Reviews</Link>
      </section>
      <section>
        <Outlet />
      </section>
    </>
  );
};
