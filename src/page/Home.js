import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { trendFilm} from 'components/fetch/Fetch';
// import { Link } from 'react-router-dom';

const Home = () => {
  const [filmList, setFilmList] = useState([]);
  
  const nameFilm = film => {
    if (film.title) {
      return film.title;
    } else return film.name;
  };

  useEffect(() => {
  trendFilm(setFilmList);
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