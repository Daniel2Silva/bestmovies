import React, { useContext } from 'react';
import { Link, useParams, useLocation } from 'react-router-dom';
import useFetch from '../Hooks/useFetch';
import styles from './Content.module.scss';
import { CONTENT_ESPECIFIC, GET_IMAGES, GET_VIDEO } from '../api';
import ListContent from './ListContent';
import { UserContext } from '../UserContext';

const Content = () => {
  const { contentType } = useContext(UserContext);
  const [imgs, setImgs] = React.useState();
  const [video, setVideo] = React.useState();
  const { id } = useParams();
  const { request, error, loading, data } = useFetch();
  let type;

  console.log(id);

  React.useEffect(() => {
    async function fetchData() {
      const { url: videoUrl, options: videoOptions } = GET_VIDEO(
        contentType,
        id,
      );
      const { json: videoJson } = await request(videoUrl, videoOptions);

      setVideo(videoJson);

      const { url: imgUrl, options: imgOptions } = GET_IMAGES(contentType, id);
      const { json: imgJson } = await request(imgUrl, imgOptions);
      setImgs(imgJson);
      console.log(imgJson);

      const { url: contentUrl, options: contentOptions } = CONTENT_ESPECIFIC(
        contentType,
        id,
      );
      const { json: contentJson } = await request(contentUrl, contentOptions);
      console.log(contentJson);
    }

    fetchData();
  }, [request, id, contentType]);

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>Ocorreu um erro ao carregar.</p>;
  if (data && video && imgs)
    return (
      <section>
        <div className={styles.bannerItem}>
          {data.backdrop_path && (
            <img
              className={styles.backdrop}
              src={`https://image.tmdb.org/t/p/original${data.backdrop_path}`}
              alt=""
            />
          )}
          <div className={`${styles.logo} animeLeft`}>
            {imgs.logos[0] ? (
              <img
                src={`https://image.tmdb.org/t/p/original${imgs.logos[0].file_path}`}
                alt=""
              />
            ) : (
              <h1>{data.original_name}</h1>
            )}
            <h1>{data.tagline}</h1>
            <div className={styles.btnsC}>
              {video.results[0] ? (
                <Link
                  to={`https://www.youtube.com/embed/${video.results[0].key}`}
                >
                  <button className={styles.btnPlay}>Assistir</button>
                </Link>
              ) : (
                <button className={styles.btnPlay}>Assistir</button>
              )}
              <button className={styles.btnInfo}>Ver Mais</button>
            </div>
            <p className={styles.sinopse}>{data.overview}</p>
          </div>
        </div>
        <div className="container">
          <h1>Vibes Parecidas</h1>
          <ListContent genreId={data.genres[0].id} />
        </div>
      </section>
    );
};

export default Content;
