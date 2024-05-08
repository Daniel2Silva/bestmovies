import React from 'react';
import './App.scss';
import Main from './Componentes/Main';
import Header from './Componentes/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SearchPage from './Componentes/SearchPage';
import Content from './Componentes/Content';
import { UserStorage } from './UserContext'; //
import Favorite from './Componentes/User/Favorite';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <UserStorage>
          {' '}
          <Header />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="search/:search" element={<SearchPage />} />
            <Route path="content/:id" element={<Content />} />
            <Route path="fav" element={<Favorite />} />
          </Routes>
        </UserStorage>
      </BrowserRouter>
    </div>
  );
};

export default App;
