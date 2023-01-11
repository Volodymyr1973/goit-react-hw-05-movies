import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Cast = () => {
  const params = useParams();
  const paramsId = Number(params.moviesId);
  const [filmCreditDetail, setFilmCreditDetail] = useState();

  console.log(params.moviesId);
  console.log(paramsId);
  console.log(filmCreditDetail);

  const KEY_FILM = '0402ef8c6d0b2370fa6ac2b572dad398';
  const originUrl = 'https://api.themoviedb.org/3/';

  // const imgBaseUrl = 'https://image.tmdb.org/t/p/w500/';

  const searchFilmCreditById = () => {
    fetch(
      `${originUrl}movie/${paramsId}/credits?api_key=${KEY_FILM}&language=en-US`
    )
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        return Promise.reject(new Error('Insert other name'));
      })
      .then(results => setFilmCreditDetail(results))
      .catch(error => console.log(error));
  };

  useEffect(() => {
    console.log(3);

    searchFilmCreditById();
  }, []);

  return (
    // <p>cast</p>
    <section>
      <ul>
        {filmCreditDetail.cast.map(hero => (
          <li key={hero.id}>
            <img
              src={`https://image.tmdb.org/t/p/w500/${hero.profile_path}`}
              alt={hero.original_name}
            />
            <p>{hero.original_name}</p>
            <p>Character: {hero.character}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Cast;