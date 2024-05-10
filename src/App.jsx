import React, { useContext } from 'react';
import './App.scss';
import Main from './Componentes/Main';
import Header from './Componentes/Header';
import { BrowserRouter, Routes, Route, HashRouter } from 'react-router-dom';
import SearchPage from './Componentes/SearchPage';
import Content from './Componentes/Content';
import { UserContext, UserStorage } from './UserContext'; //
import Favorite from './Componentes/User/Favorite';
import InfoModal from './Componentes/Cards/InfoModal';

const App = () => {
  return (
    <div className="App">
      <HashRouter>
        <UserStorage>
          {' '}
          <Header />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="search/:search" element={<SearchPage />} />
            <Route path="content/:id" element={<Content />} />
            <Route path="fav" element={<Favorite />} />
          </Routes>
          <InfoModal />
        </UserStorage>
      </HashRouter>
    </div>
  );
};

export default App;
