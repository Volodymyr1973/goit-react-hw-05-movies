// import axios from 'axios';
import API from '../Api'
import { KEY_FILM } from '../constants/Constants';
 
 export const SearchFilm = (value, paramsId ) => {
  const apiUrl = `movie/${paramsId}/${value}?api_key=${KEY_FILM}&language=en-US`;
  return API.get(apiUrl);

  };

 export  const trendFilm = () => {
    
  const apiUrl = `trending/movie/week?api_key=${KEY_FILM}&language=en-US`;
  return API.get(apiUrl)
  
  };

 export const searchFilmById = (paramsId) => {

  const apiUrl = `movie/${paramsId}?api_key=${KEY_FILM}&language=en-US`;
  return API.get(apiUrl)
  
  };

  export const searchFilmByName = (name) => {

    const apiUrl = `search/movie?api_key=${KEY_FILM}&query=${name}&language=en-US`;
    return API.get(apiUrl);
  

  };