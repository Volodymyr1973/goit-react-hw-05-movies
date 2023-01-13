import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";

const FilmList = (props) => {
const [searchFilm, setSearchFilm] = useState([]);
   
  const KEY_FILM = '0402ef8c6d0b2370fa6ac2b572dad398';
  const originUrl = 'https://api.themoviedb.org/3/';
  const query = "query=";
  const name = props.searchName;

  const searchFilmByName = () => {
    fetch(
      `${originUrl}search/movie?api_key=${KEY_FILM}&${query}${name}&language=en-US`
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

  useEffect(() => {
    if (props.searchName === '') {
      return;
    } else
  
    searchFilmByName();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.searchName]);

 
  return (

        
      <div>
        <ul>
          {searchFilm.map(film => (
            <li key={film.id}>
              <Link to={`/movies/${film.id}`} state={{from: "/movies"}}>{film.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    
  );
}
export default FilmList;

FilmList.propTypes = {
props: PropTypes.string,
 };