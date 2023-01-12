import { useState } from "react";
import { Link } from "react-router-dom";

const SearchFilm = () => {

    const [searchFilm, setSearchFilm] = useState([]);

    const KEY_FILM = '0402ef8c6d0b2370fa6ac2b572dad398';
    const originUrl = 'https://api.themoviedb.org/3/';
  
    const searchFilmMain = name => {
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
    
    return (
      <>
        
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
}

export default SearchFilm;