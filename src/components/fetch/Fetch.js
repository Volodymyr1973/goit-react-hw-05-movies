export const SearchFilm = (value, paramsId, setFoo) => {
    const KEY_FILM = '0402ef8c6d0b2370fa6ac2b572dad398';
    const originUrl = 'https://api.themoviedb.org/3/';


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