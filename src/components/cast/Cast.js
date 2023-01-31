import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { SearchFilm } from 'components/fetch/Fetch';
import Image from '../image/NoFoto.jpg';
import css from './Cast.module.css'


const Cast = () => {
  const params = useParams();
  const paramsId = Number(params.moviesId);
  const [filmCreditDetail, setFilmCreditDetail] = useState();

  useEffect(() => {
    SearchFilm("credits", paramsId).then(({data}) => setFilmCreditDetail(data)).catch(error => console.log(error));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
      <section>
      {filmCreditDetail &&
      <ul className={css.list}>
        {filmCreditDetail.cast.map(hero => (
          <li key={hero.id} className={css.item}>
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