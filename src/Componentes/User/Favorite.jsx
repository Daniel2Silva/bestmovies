import React, { useContext, useEffect } from 'react';
import { UserContext } from '../../UserContext';
import FavoriteList from './FavoriteList';

const Favorite = () => {
  const { fav, setFav } = useContext(UserContext);

  useEffect(() => {
    const savedFav = localStorage.getItem('fav');
    if (savedFav) {
      setFav(JSON.parse(savedFav));
    }
  }, [setFav]);

  return (
    <section className="container">
      <FavoriteList title={'Seus Filmes'} fav={fav} />
    </section>
  );
};

export default Favorite;
