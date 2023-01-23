import { useState } from 'react';
import FilmList from 'components/filmlist/FilmList';
import PropTypes from "prop-types";


const Movies = () => {
  const [searchName, setSearchName] = useState('');
 
const handleChange = event => {
  console.log(event.currentTarget.value)
  const filmSearch = event.currentTarget.value;
  if(filmSearch.trim() === '') {
    event.currentTarget.value = '';
    return;
  } else setSearchName(filmSearch.trim());
  
}

  const handleSubmitSearchFilm = event => {
    event.preventDefault();
    setSearchName(searchName);
    event.currentTarget.elements.name.value = '';

  };
 
  return (
    <>
      <div>
        <form onSubmit={handleSubmitSearchFilm}>
          <input
            name="name"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search films"
            // value={text}
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