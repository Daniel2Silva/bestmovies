import React, { useContext, useState, useEffect } from 'react';
import styles from './Header.module.scss';
import { Link, NavLink, useNavigate, useLocation } from 'react-router-dom';
import { UserContext } from '../UserContext';

const Header = () => {
  const { contentType, setContentType } = useContext(UserContext);
  const [search, setSearch] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const [showNavLinks, setShowNavLinks] = useState(true);

  useEffect(() => {
    setShowNavLinks(!location.pathname.startsWith('/content/'));
  }, [location.pathname]);

  const handleSearchPage = (e) => {
    e.preventDefault();
    if (search.trim()) {
      navigate(`/search/${encodeURIComponent(search.trim())}`);
    }
  };

  return (
    <section className={styles.header}>
      <div className={`container  ${styles.nav}`}>
        <Link className={styles.logoSite} to="/">
          BestMovies
        </Link>
        <nav>
          {showNavLinks && ( // Renderiza os NavLink somente se showNavLinks for true
            <>
              <select
                className={styles.selectH}
                value={contentType}
                onChange={({ target }) => setContentType(target.value)}
              >
                <option value="movie">Filmes</option>
                <option value="tv">Séries</option>
              </select>
            </>
          )}
        </nav>
        <Link to="/fav">Fav</Link>
        <form onSubmit={handleSearchPage}>
          <input
            type="text"
            name="search"
            value={search}
            onChange={({ target }) => setSearch(target.value)}
            className={styles.searchBar}
            placeholder={
              contentType === 'movie' ? 'Pesquisar Filmes' : 'Pesquisar Séries'
            }
          />
          <button type="submit"></button>
        </form>
      </div>
    </section>
  );
};

export default Header;
