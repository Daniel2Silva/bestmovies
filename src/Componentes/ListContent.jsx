import React, { useContext } from 'react';

import Card from '../Componentes/Cards/Card';
import styles from './ListContent.module.scss';
import { Link } from 'react-router-dom';
import useFetch from '../Hooks/useFetch';
import { GET_DISCOVER } from '../api';
import { UserContext } from '../UserContext';
import ButtonAdd from './Cards/ButtonAdd';

const ListContent = ({ genreId }) => {
  const { contentType } = useContext(UserContext);
  const { request, data, loading, error } = useFetch();

  React.useEffect(() => {
    async function fethGenres() {
      const { url, options } = GET_DISCOVER(genreId, contentType);
      const { response, json } = await request(url, options);
    }
    fethGenres();
  }, [request, genreId, contentType]);

  if (data)
    return (
      <section className={` ${styles.movies}`}>
        <div className={styles.moviesList}>
          {data.results.map((result) => (
            <div key={result.id}>
              <Card result={result} />
            </div>
          ))}
        </div>
      </section>
    );
};

export default ListContent;
