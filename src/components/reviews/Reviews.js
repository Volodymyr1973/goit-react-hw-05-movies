import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { SearchFilm } from "components/fetch/Fetch";


const Reviews = () => {
  const params = useParams();
  const paramsId = Number(params.moviesId);
  const [filmReviews, setFilmReviews] = useState();
 
  useEffect(() => {
     SearchFilm("reviews", paramsId, setFilmReviews);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section>
      {filmReviews && <ul>
        {filmReviews.results.length > 0 ? filmReviews.results.map(result => (
          <li key={result.id}>
            <p>{result.author}</p>
            <p>{result.content}</p>
          </li>
        )) : <li>We don't have any reviews for this movie</li>}
      </ul>}      
    </section>
  );
};

export default Reviews;