import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Reviews = () => {
  const params = useParams();
  const paramsId = Number(params.moviesId);
  const [filmReviews, setFilmReviews] = useState();

  console.log(params.moviesId);
  console.log(paramsId);
  console.log(filmReviews);
  console.log(filmReviews)

  const KEY_FILM = '0402ef8c6d0b2370fa6ac2b572dad398';
  const originUrl = 'https://api.themoviedb.org/3/';

  const searchFilmReviewsById = () => {
    fetch(
      `${originUrl}movie/${paramsId}/reviews?api_key=${KEY_FILM}&language=en-US`
    )
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        return Promise.reject(new Error('Insert other name'));
      })
      .then(results => setFilmReviews(results))
      .catch(error => console.log(error));
  };

  useEffect(() => {
    console.log(3);

    searchFilmReviewsById();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
  // <p>rev</p>
    <section>
      {filmReviews && <ul>
        {filmReviews.results.length >= 0 && filmReviews.results.map(result => (
          <li key={result.id}>
            <p>{result.author}</p>
            <p>{result.content}</p>
          </li>
        ))}
      </ul>}
      
    </section>
  );
};

export default Reviews;