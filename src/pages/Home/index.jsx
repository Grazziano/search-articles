import React, { useEffect, useState } from 'react';
import { FcSearch } from 'react-icons/fc';
import { toast } from 'react-toastify';
import Button from '../../components/Button';
import Input from '../../components/Input';
import Loading from '../../components/Loading';
import Pagination from '../../components/Pagination';
import { http } from '../../services/api';
import style from './Home.module.scss';

import favoriteImg from '../../assets/images/icons/favorite.png';
import disfavorImg from '../../assets/images/icons/disfavor.png';

import { loadFavorites, saveFavorites } from '../../helpers/localstorage';
import Header from '../../components/Header';

const apiKey = process.env.REACT_APP_API_KEY;

const LIMIT = 10;

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
      .get(`search/${query}?page=${offset}&pageSize=${LIMIT}&apiKey=${apiKey}`)
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

  const handleFavorite = (data) => {
    setFavorites([...favorites, data]);
    saveFavorites('favoritesArticles', [...favorites, data]);
  };

  const handleDisfavor = (id) => {
    const favoritesList = loadFavorites('favoritesArticles');
    const removeFavorite = favoritesList.filter((element) => element.id !== id);
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
          />

          <Button type="submit">
            <FcSearch />
          </Button>
        </form>
        <section className={style.section}>
          {loading && <Loading />}

          {articles.length > 0 &&
            articles.map((article) => {
              return (
                <div key={article._source.id}>
                  <h2 className={style.articleTitle}>
                    {article._source.title}
                  </h2>
                  <span>
                    {favorites.find(
                      (element) => element.id === article._source.id
                    ) ? (
                      <img
                        src={favoriteImg}
                        alt=""
                        onClick={() => handleDisfavor(article._source.id)}
                      />
                    ) : (
                      <img
                        src={disfavorImg}
                        alt=""
                        onClick={() => handleFavorite(article._source)}
                      />
                    )}
                  </span>
                  <p>{article._source.authors}</p>
                  <p>{article._source.type}</p>
                  <p>{article._source.description}</p>
                  {article._source.urls.map((link, index) => (
                    <p key={index} className={style.links}>
                      <a href={link} target="_blank" rel="noreferrer">
                        {link}
                      </a>
                    </p>
                  ))}
                  <hr />
                </div>
              );
            })}
          <Pagination
            limit={LIMIT}
            total={100}
            offset={offset}
            setOffset={setOffset}
          />
        </section>
      </div>
    </>
  );
}

export default Home;
