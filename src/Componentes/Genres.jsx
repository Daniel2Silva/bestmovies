import React, { useContext } from 'react';
import styles from './ListContent.module.scss';
import ListContent from './ListContent';
import useFetch from '../Hooks/useFetch';
import { GET_GENRES } from '../api';
import { UserContext } from '../UserContext';

const Movies = () => {
  const { contentType } = useContext(UserContext);
  const { request, data, loading, error } = useFetch();

  React.useEffect(() => {
    async function fethGenres() {
      const { url, options } = GET_GENRES(contentType);
      const { response, json } = await request(url, options);
      console.log(json);
    }
    fethGenres();
  }, [request, contentType]);

  if (data)
    return (
      <section className={`container ${styles.movies} animeLeft`}>
        {data.genres.map((genre) => (
          <div>
            <h1>{genre.name}</h1>
            <ListContent genreId={genre.id} />
          </div>
        ))}
      </section>
    );
};

export default Movies;
