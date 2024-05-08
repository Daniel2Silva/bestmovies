import React, { useState } from 'react';

export const UserContext = React.createContext();

export const UserStorage = ({ children }) => {
  const [contentType, setContentType] = useState('movie');
  const [fav, setFav] = useState([]);

  return (
    <UserContext.Provider
      value={{
        contentType,
        setContentType,
        fav,
        setFav,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
