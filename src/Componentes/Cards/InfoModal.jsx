import React from 'react';
import styles from './Modal.module.scss';
import { UserContext } from '../../UserContext';
import Content from '../Content';
import { Link } from 'react-router-dom';

const InfoModal = () => {
  const { selectedMovie, setModalOpen, modalOpen } =
    React.useContext(UserContext);

  function handleOutsideClick(event) {
    if (event.target === event.currentTarget) setModalOpen(false);
  }

  if (modalOpen && selectedMovie)
    return (
      <section className={styles.modal} onClick={handleOutsideClick}>
        <div className={styles.modalItem}>
          <img
            className={styles.backdrop}
            src={`https://image.tmdb.org/t/p/original${selectedMovie.backdrop_path}`}
            alt=""
          />
          <button className={styles.close} onClick={() => setModalOpen(false)}>
            x
          </button>

          <div className={styles.info}>
            <Link to={`/content/${selectedMovie.id}`}>
              <button className={styles.play}>Assistir</button>
            </Link>
            <h1>{selectedMovie.title}</h1>
            <p className={styles.sinopse}>{selectedMovie.overview}</p>
          </div>
        </div>
      </section>
    );
};

export default InfoModal;
