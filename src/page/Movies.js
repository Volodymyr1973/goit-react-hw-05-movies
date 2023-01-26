import { useState, useEffect } from 'react';
import FilmList from 'components/filmlist/FilmList';
import PropTypes from "prop-types";
import { useSearchParams } from 'react-router-dom';


const Movies = () => {

  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('search') || '';
  const [searchName, setSearchName] = useState(searchQuery);
  const [search, setSearch] = useState('');
  


useEffect(() => {
  setSearch(searchQuery);
  reset();
  // eslint-disable-next-line react-hooks/exhaustive-deps
}, [])

const handleChange = event => {
  const filmSearch = event.currentTarget.value;
   if(filmSearch.trim() === '') {
      return;
  } else 
  setSearchName(filmSearch);  
}

  const handleSubmitSearchFilm = event => {
    event.preventDefault();
    setSearch(searchName);
    setSearchParams({search: searchName});
    reset();
  };

  const reset = () => {
setSearchName('')
  }
 

  return (
    <>
      <div>
        <form onSubmit={handleSubmitSearchFilm}>
          <input
          id="movie_input"
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
            <FilmList searchName={search}/>
    </>
  );
};

export default Movies;

Movies.propTypes = {
  searchName: PropTypes.string,
  
};