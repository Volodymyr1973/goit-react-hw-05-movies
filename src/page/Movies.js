import { useState } from 'react';
import FilmList from 'components/filmlist/FilmList';
import PropTypes from "prop-types";


const Movies = () => {
  const [searchName, setSearchName] = useState('');
 
  const handleSubmitSearchFilm = event => {
    event.preventDefault();
    const firstValue = event.currentTarget.elements.name.value;
    if (firstValue.trim() === '') {
      event.currentTarget.reset();
      return;
    }
    setSearchName(firstValue.trim());
    event.currentTarget.reset();
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