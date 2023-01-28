import axios from 'axios'
import { KEY_FILM, originUrl } from '../constants/Constants'
 
 export const SearchFilm = (value, paramsId, setFoo) => {

  const apiUrl = `${originUrl}movie/${paramsId}/${value}?api_key=${KEY_FILM}&language=en-US`;
  axios.get(apiUrl).then((resp) => {
    const allPersons = resp.data;
    setFoo(allPersons);
  });

  };

 export  const trendFilm = (setFilmList) => {
    
  const apiUrl = `${originUrl}trending/movie/week?api_key=${KEY_FILM}&language=en-US`;
  axios.get(apiUrl).then((resp) => {
    const allPersons = resp.data.results;
    setFilmList(allPersons);
    // console.log(allPersons)
  });
  
  };

 export const searchFilmById = (paramsId, setFilmDetail) => {

  const apiUrl = `${originUrl}movie/${paramsId}?api_key=${KEY_FILM}&language=en-US`;
  axios.get(apiUrl).then((resp) => {
    const allPersons = resp.data;
    setFilmDetail(allPersons);
  });

 
  };

  export const searchFilmByName = (query, name, setSearchFilm) => {

    const apiUrl = `${originUrl}search/movie?api_key=${KEY_FILM}&${query}${name}&language=en-US`;
    axios.get(apiUrl).then((resp) => {
      const allPersons = resp.data.results;
      setSearchFilm(allPersons);
    });

  };