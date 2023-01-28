import { useState } from "react";
import FilmList from "components/filmlist/FilmList";

export const SearchMovies = ({searchQuery, setSearchParams}) => {
   
  const [searchName, setSearchName] = useState(searchQuery);
  



const handleChange = event => {
  const filmSearch = event.target.value;
   if(filmSearch === '') {
      reset();
  } else 
  setSearchName(filmSearch);  
}

  const handleSubmit = event => {
    event.preventDefault();
    const nextParams = searchName !== "" ? { search: searchName } : {};
    setSearchParams(nextParams);
    };

  const reset = () => {
setSearchName('')
  }
 

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
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
            <FilmList searchName={searchQuery}/>
    </>
  );
}