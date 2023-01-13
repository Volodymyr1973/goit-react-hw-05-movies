import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';

const Home = () => {
  const [filmList, setFilmList] = useState([]);
  const KEY_FILM = '0402ef8c6d0b2370fa6ac2b572dad398';
  const originUrl = 'https://api.themoviedb.org/3/';
  // const location = useLocation();
 
  const trendFilm = () => {
    fetch(`${originUrl}trending/movie/week?api_key=${KEY_FILM}&language=en-US`)
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
    <h2>Trending today</h2>
      <ul>
        {filmList.map(film => (
          <li key={film.id}>
            <Link to={`movies/${film.id}`} state={{from: "/home"}}>{nameFilm(film)}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Home;