import React, { useContext } from 'react';
import { UserContext } from '../../UserContext';
import { MdFavorite } from 'react-icons/md';

const ButtonRemove = ({ media }) => {
  const { fav, setFav, setHasFavorite } = useContext(UserContext);
  const { id } = media;

  const handleCartRemove = () => {
    const updatedItems = fav.filter((movie) => movie.id !== id);
    setFav(updatedItems);
    localStorage.setItem('fav', JSON.stringify(updatedItems));
  };

  return (
    <button onClick={handleCartRemove}>
      <MdFavorite />
    </button>
  );
};

export default ButtonRemove;
