import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
// import { useSearchParams } from 'react-router-dom';

export const Movies = () => {
  const [searchFilm, setSearchFilm] = useState([]);
  const [searchName, setSearchName] = useState('');
  const location = useLocation();
  console.log(location);

  const handleSubmitSearchFilm = event => {
    event.preventDefault();
    const firstValue = event.currentTarget.elements.name.value;
    if (firstValue.trim() === '') {
      event.currentTarget.elements.name.value = '';
      return;
    }
    setSearchName(firstValue.trim());
    event.currentTarget.elements.name.value = '';
  };
  console.log(searchName);
  console.log(searchFilm);

  const KEY_FILM = '0402ef8c6d0b2370fa6ac2b572dad398';
  const originUrl = 'https://api.themoviedb.org/3/';

  const searchFilmByName = name => {
    fetch(
      `${originUrl}search/movie?api_key=${KEY_FILM}&query=${name}&language=en-US`
    )
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        return Promise.reject(new Error('Insert other name'));
      })
      .then(({ results }) => setSearchFilm(results))
      .catch(error => console.log(error));
  };

  // searchFilmByName(searchName);

  useEffect(() => {
    if (searchName.trim() === '') {
      return;
    } else console.log(1);
    searchFilmByName(searchName);
    setSearchName('');
  }, [searchName]);

  return (
    <>
      <div>
        <form onSubmit={handleSubmitSearchFilm}>
          <input
            // onChange={handleSearchFilm}
            name="name"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search films"
          />

          <button type="submit">
            <span>Search</span>
          </button>
        </form>
      </div>
      <div>
        <ul>
          {searchFilm.map(film => (
            <li key={film.id}>
              <Link to={`/movies/${film.id}`}>{film.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
