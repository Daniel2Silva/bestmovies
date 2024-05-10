import React from 'react';
import Genres from '../Componentes/Genres';
import BannerSlides from './BannerSlides/BannerSlides';
import InfoModal from './Cards/InfoModal';
const Main = () => {
  return (
    <section>
      <BannerSlides />
      <Genres />
    </section>
  );
};

export default Main;
