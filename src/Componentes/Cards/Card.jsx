import React from 'react';
import styles from './Card.module.scss';
import ButtonAdd from './ButtonAdd';
import { Link } from 'react-router-dom';
import ButtonRemove from './ButtonRemove';
import { FaPlay, FaInfoCircle } from 'react-icons/fa';

const Card = ({ result }) => {
  const localStorageFav = JSON.parse(localStorage.getItem('fav')) || [];
  const existingItem = localStorageFav.find(
    (favItem) => favItem.id === result.id,
  );
  const hasFavorite = existingItem !== undefined;

  return (
    <section>
      <div className={styles.card}>
        <Link to={`/content/${result.id}`}>
          <img
            src={`https://image.tmdb.org/t/p/w500${result.poster_path}`}
            alt=""
          />
        </Link>
        <section className={styles.btnCard}>
          <div className={styles.btnAV}>
            <button>
              <FaPlay />
            </button>
            {hasFavorite ? (
              <ButtonRemove media={result} />
            ) : (
              <ButtonAdd media={result} />
            )}
          </div>
          <button>
            <FaInfoCircle />
          </button>
        </section>
      </div>
    </section>
  );
};

export default Card;
