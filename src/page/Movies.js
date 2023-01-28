import { useSearchParams } from 'react-router-dom';
import { SearchMovies } from 'components/searchmovies/SearchMovies';


const Movies = () => {

  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('search') ?? "";
  

  return (
    <>
            <SearchMovies searchQuery={searchQuery} setSearchParams={setSearchParams} />
            {/* <FilmList searchName={searchName}/> */}
    </>
  );
};

export default Movies;

