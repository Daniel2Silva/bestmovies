import React, { useContext } from 'react';
import { UserContext } from '../../UserContext';
import { MdFavoriteBorder } from 'react-icons/md';

const ButtonAdd = ({ media }) => {
  const { fav, setFav, setHasFavorite, hasFavorite } = useContext(UserContext);

  const handleAddFav = () => {
    const existingItem = fav.find((favItem) => favItem.id === media.id);

    if (existingItem) {
      return;
    }

    setFav((prevFav) => [...prevFav, media]);
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('fav', JSON.stringify([...fav, media]));
    }
  };

  return (
    <button onClick={() => handleAddFav(media)}>
      <MdFavoriteBorder />
    </button>
  );
};

export default ButtonAdd;
