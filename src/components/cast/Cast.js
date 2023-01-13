import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { SearchFilm } from 'components/fetch/Fetch';
import Image from '../image/NoFoto.jpg'


const Cast = () => {
  const params = useParams();
  const paramsId = Number(params.moviesId);
  const [filmCreditDetail, setFilmCreditDetail] = useState();

  console.log(params.moviesId);
  console.log(paramsId);
  console.log(filmCreditDetail);
console.log(Image)

  useEffect(() => {
     SearchFilm('credits', paramsId, setFilmCreditDetail);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    // <p>cast{paramsId}</p>
    <section>
      {filmCreditDetail &&
      <ul>
        {filmCreditDetail.cast.map(hero => (
          <li key={hero.id}>
            {hero.profile_path ? <img
              src={`https://image.tmdb.org/t/p/w500/${hero.profile_path}`}
              alt={hero.original_name}
            /> : <img src={Image} alt="No foto"/>}
            
            <p>{hero.original_name}</p>
            <p>Character: {hero.character}</p>
          </li>
        ))}
      </ul>
}
    </section>
      
  );
};

export default Cast;