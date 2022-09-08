import React, { useEffect, useState } from 'react';
import { FcNext, FcPrevious, FcSearch } from 'react-icons/fc';
import { toast } from 'react-toastify';
import Button from '../../components/Button';
import Input from '../../components/Input';
import Loading from '../../components/Loading';
import { http } from '../../services/api';
import style from './Home.module.scss';

import { ReactComponent as GrayHearth } from '../../assets/images/icons/gray_hearth.svg';
import { ReactComponent as RedHearth } from '../../assets/images/icons/red_hearth.svg';

import { loadFavorites, saveFavorites } from '../../helpers/localstorage';
import Header from '../../components/Header';

const apiKey = process.env.REACT_APP_API_KEY;

function Home() {
  const [query, setQuery] = useState('');
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);

  const [favorites, setFavorites] = useState([]);
  const [offset, setOffset] = useState(1);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!query) {
      toast.warn('Please enter a search term');
      return;
    }

    setLoading(true);

    http
      .get(`search/${query}?page=1&pageSize=10&apiKey=${apiKey}`)
      .then((response) => {
        setArticles(response.data.data);
        setLoading(false);
      });
  };

  const handleCallback = (childData) => {
    setQuery(childData);
  };

  useEffect(() => {
    if (loadFavorites('favoritesArticles')) {
      const favoritesList = loadFavorites('favoritesArticles');
      setFavorites(favoritesList);
    }
  }, []);

  /* eslint-disable */
  useEffect(() => {
    http
      .get(`search/${query}?page=${offset}&pageSize=10&apiKey=${apiKey}`)
      .then((response) => {
        setArticles(response.data.data);
        setLoading(false);
        window.scroll(0, 0);
      });
  }, [offset]);
  /* eslint-enable */

  const handleFavorite = (data) => {
    setFavorites([...favorites, data]);
    saveFavorites('favoritesArticles', [...favorites, data]);
  };

  const handleDisfavor = (data) => {
    const favoritesList = loadFavorites('favoritesArticles');
    const removeFavorite = favoritesList.filter(
      (element) => element.id !== data.id
    );
    setFavorites(removeFavorite);
    saveFavorites('favoritesArticles', removeFavorite);
  };

  return (
    <>
      <Header />
      <div className={style.home}>
        <form onSubmit={handleSubmit}>
          <Input
            type="text"
            parentCallback={handleCallback}
            placeholder="What are you looking for?"
            className={style.button}
          />

          <Button type="submit">
            <FcSearch />
          </Button>
        </form>
        <section className={style.section}>
          {loading && <Loading />}

          {articles &&
            articles.length > 0 &&
            articles.map((article) => {
              return (
                <div key={article._source.id}>
                  <h2 className={style.articleTitle}>
                    {article._source.title}
                  </h2>
                  <div className={style.card}>
                    <span>
                      {favorites.find(
                        (element) => element.id === article._source.id
                      ) ? (
                        <RedHearth
                          onClick={() => handleDisfavor(article._source)}
                          className={style.icon}
                        />
                      ) : (
                        <GrayHearth
                          onClick={() => handleFavorite(article._source)}
                          className={style.icon}
                        />
                      )}
                    </span>
                    <p className={style.authors}>
                      Authors: {article._source.authors}
                    </p>
                    <p className={style.type}>{article._source.types}</p>
                    <p className={style.description}>
                      {article._source.description}
                    </p>
                    {article._source.urls.map((link, index) => (
                      <p key={index} className={style.links}>
                        <a href={link} target="_blank" rel="noreferrer">
                          {link}
                        </a>
                      </p>
                    ))}
                  </div>
                  <hr />
                </div>
              );
            })}

          {articles && articles.length > 0 && (
            <div className={style.paginateDiv}>
              <button
                type="button"
                onClick={() => setOffset(offset - 1)}
                className={style.paginateButton}
                disabled={offset === 1}
              >
                <FcPrevious />
              </button>
              <button
                type="button"
                onClick={() => setOffset(offset + 1)}
                className={style.paginateButton}
              >
                <FcNext />
              </button>
            </div>
          )}
        </section>
      </div>
    </>
  );
}

export default Home;
