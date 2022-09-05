import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';
import { loadFavorites, saveFavorites } from '../../helpers/localstorage';
import style from './Favorites.module.scss';

import favoriteImg from '../../assets/images/icons/favorite.png';

function Favorites() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    if (loadFavorites('favoritesArticles')) {
      const data = loadFavorites('favoritesArticles');
      setArticles([...data]);
    }
  }, []);

  const handleDisfavor = (id) => {
    const data = articles.filter((element) => element.id !== id);
    saveFavorites('favoritesArticles', data);
    setArticles([...data]);
  };

  return (
    <div>
      <Header />
      <section className={style.favorites}>
        {articles.length > 0 &&
          articles.map((article) => {
            return (
              <div key={article.id}>
                <h2 className={style.articleTitle}>{article.title}</h2>
                <span>
                  <img
                    src={favoriteImg}
                    alt=""
                    onClick={() => handleDisfavor(article.id)}
                  />
                </span>
                <p>{article.authors}</p>
                <p>{article.type}</p>
                <p>{article.description}</p>
                {article.urls.map((link, index) => (
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
      </section>
    </div>
  );
}

export default Favorites;
