import React, { useContext } from 'react';
import { SEARCH_MULTI } from '../api';

import { Link, useParams } from 'react-router-dom';
import Card from './Cards/Card';
import styles from './SearchPage.module.scss';
import useFetch from '../Hooks/useFetch';
import { UserContext } from '../UserContext';
import InfoModal from './Cards/InfoModal';

const SearchPage = () => {
  const { contentType } = useContext(UserContext);
  const { search } = useParams();
  const { data, error, loading, request } = useFetch();

  React.useEffect(() => {
    async function fetchMovies() {
      try {
        const { url, options } = SEARCH_MULTI(search, contentType);
        const { json } = await request(url, options);
      } catch (error) {
        console.error('Erro ao buscar filmes:', error);
      }
    }

    fetchMovies();
  }, [request, search, contentType]);

  if (loading) {
    return <div>Carregando...</div>;
  }

  if (error) {
    return <div>Erro ao buscar filmes: {error}</div>;
  }

  if (data) {
    return (
      <section className="container">
        <div className={styles.searchPage}>
          {data.results.map((result) => (
            <div key={result.id}>
              <Card result={result} />
            </div>
          ))}
        </div>
      </section>
    );
  }
  return null;
};

export default SearchPage;
