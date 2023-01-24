import { useState } from 'react';
import FilmList from 'components/filmlist/FilmList';
import PropTypes from "prop-types";
import { useSearchParams } from 'react-router-dom';


const Movies = () => {

  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('search') || '';
  const [searchName, setSearchName] = useState(searchQuery);
  
const handleChange = event => {
  const filmSearch = event.currentTarget.value;
  setSearchName(filmSearch);
  }

  const handleSubmitSearchFilm = event => {
    event.preventDefault();
    if(searchName.trim() === '') {
      event.currentTarget.value = '';
      return;
    } else
    setSearchName(searchName);
    setSearchParams({search: searchName});
    event.currentTarget.elements.search.value = '';
  };

  return (
    <>
      <div>
        <form onSubmit={handleSubmitSearchFilm}>
          <input
            name="search"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search films"
            value={searchName}
            onChange={handleChange}
          />
          <button type="submit">
            <span>Search</span>
          </button>
        </form>
      </div>
            <FilmList searchName={searchName}/>
    </>
  );
};

export default Movies;

Movies.propTypes = {
  searchName: PropTypes.string,
  
};