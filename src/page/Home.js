import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';

export const Home = () => {
  const [filmList, setFilmList] = useState([]);
  console.log(filmList);
  const KEY_FILM = '0402ef8c6d0b2370fa6ac2b572dad398';
  const originUrl = 'https://api.themoviedb.org/3/';

  const trendFilm = () => {
    fetch(`${originUrl}trending/all/day?api_key=${KEY_FILM}`)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        return Promise.reject(new Error('Insert other name'));
      })
      .then(({ results }) => setFilmList(results))
      .catch(error => console.log(error));
  };

  const nameFilm = film => {
    if (film.title) {
      return film.title;
    } else return film.name;
  };

  useEffect(() => {
    trendFilm();
  }, []);

  return (
    <>
      <ul>
        {filmList.map(film => (
          <li key={film.id}>
            <Link to="movies/:details">{nameFilm(film)}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};
