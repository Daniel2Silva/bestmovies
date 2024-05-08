import React from 'react';
import styles from './Banner.module.scss';

const Banner = ({ result }) => {
  return (
    <section>
      <div className={styles.bannerItem}>
        <img
          src={`https://image.tmdb.org/t/p/original${result.backdrop_path}`}
          alt=""
        />
      </div>
    </section>
  );
};

export default Banner;
