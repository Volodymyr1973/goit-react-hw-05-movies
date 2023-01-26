// import axios from 'axios'
import { KEY_FILM, originUrl } from '../constants/Constants'
 
 export const SearchFilm = (value, paramsId, setFoo) => {

      fetch(
      `${originUrl}movie/${paramsId}/${value}?api_key=${KEY_FILM}&language=en-US`
    )
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        return Promise.reject(new Error('Insert other name'));
      })
      .then(results => setFoo(results))
      .catch(error => console.log(error));
      
  };

 export  const trendFilm = (setFilmList) => {
    fetch(`${originUrl}trending/movie/week?api_key=${KEY_FILM}&language=en-US`)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        return Promise.reject(new Error('Insert other name'));
      })
      .then(({ results }) => setFilmList(results))
      .catch(error => console.log(error));
  };

 export const searchFilmById = (paramsId, setFilmDetail) => {
    fetch(`${originUrl}movie/${paramsId}?api_key=${KEY_FILM}&language=en-US`)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        return Promise.reject(new Error('Insert other name'));
      })
      .then(results => setFilmDetail(results))
      .catch(error => console.log(error));
  };

  export const searchFilmByName = (query, name, setSearchFilm) => {
    fetch(
      `${originUrl}search/movie?api_key=${KEY_FILM}&${query}${name}&language=en-US`
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