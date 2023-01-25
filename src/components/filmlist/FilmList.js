import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { searchFilmByName } from "components/fetch/Fetch";

const FilmList = (props) => {
const [searchFilm, setSearchFilm] = useState([]);
   
  const query = "query=";
  const name = props.searchName;

  useEffect(() => {
    if (props.searchName === '') {
      return;
    } else
  
    searchFilmByName(query, name, setSearchFilm);
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