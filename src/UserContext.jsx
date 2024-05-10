import React, { useState } from 'react';

export const UserContext = React.createContext();

export const UserStorage = ({ children }) => {
  const [contentType, setContentType] = useState('movie');
  const [fav, setFav] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);

  return (
    <UserContext.Provider
      value={{
        contentType,
        setContentType,
        fav,
        setFav,
        selectedMovie,
        setSelectedMovie,
        modalOpen,
        setModalOpen,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
