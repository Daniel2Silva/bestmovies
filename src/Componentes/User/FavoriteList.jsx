import React from 'react';
import styles from './Favorites.module.scss';
import Card from '../Cards/Card';
const FavoriteList = ({ fav, title }) => {
  return (
    <div>
      <h1>{title}</h1>
      <section className={styles.moviesList}>
        {fav.map((result) => (
          <div key={result.id}>
            <Card result={result} />
          </div>
        ))}
      </section>
    </div>
  );
};

export default FavoriteList;
