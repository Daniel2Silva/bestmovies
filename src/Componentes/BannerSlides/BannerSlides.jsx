import React, { useContext, useState } from 'react';

import styles from './BannerSlider.module.scss';
import Banner from './Banner';
import useFetch from '../../Hooks/useFetch';
import { GET_POPULAR } from '../../api';
import { UserContext } from '../../UserContext';

const BannerSlider = () => {
  const { contentType } = useContext(UserContext);
  const { request, data, error, loading } = useFetch();
  const [slideIndex, setSlideIndex] = useState(0);

  React.useEffect(() => {
    async function fethPopular() {
      const { url, options } = GET_POPULAR(contentType);
      const { response, json } = await request(url, options);
      console.log(json);
    }
    fethPopular();
  }, [request, contentType]);

  const next = () => {
    setSlideIndex((prevIndex) => (prevIndex === 2 ? 0 : prevIndex + 1));
  };

  React.useEffect(() => {
    const timer = setTimeout(next, 6000);

    return () => {
      clearTimeout(timer);
    };
  }, [slideIndex]);

  const prev = () => {
    setSlideIndex((prevIndex) => (prevIndex === 0 ? 2 : prevIndex - 1));
  };

  if (data)
    return (
      <section className={styles.bannerSlides}>
        <div
          className={styles.slides}
          style={{ transform: `translateX(-${slideIndex * 100}vw)` }}
        >
          {data.results.slice(0, 4).map((result, index) => (
            <div key={result.id}>
              <Banner result={result} />
            </div>
          ))}
        </div>
        <div className={`${styles.btnBanner}`}>
          <button onClick={prev}>next</button>
          <button onClick={next}>prev</button>
        </div>
      </section>
    );
};

export default BannerSlider;
