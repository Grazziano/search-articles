import React, { useState } from 'react';
import { FcSearch } from 'react-icons/fc';
import { toast } from 'react-toastify';
import { http } from '../../services/api';
import style from './Home.module.scss';

const apiKey = process.env.REACT_APP_API_KEY;

function Home() {
  const [query, setQuery] = useState('');
  const [articles, setArticles] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!query) {
      toast.warn('Please enter a search term');
      return;
    }

    http
      .get(`${query}?page=1&pageSize=10&apiKey=${apiKey}`)
      .then((response) => {
        console.log(response.data.data);
        setArticles(response.data.data);
      });
  };

  return (
    <div className={style.home}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={({ target }) => setQuery(target.value)}
          placeholder="What are you looking for?"
          required
        />
        <button type="submit">
          <FcSearch />
        </button>
      </form>
      <section className={style.section}>
        {articles.length > 0 &&
          articles.map((article) => {
            return (
              <div key={article._source.id}>
                <h2 className={style.articleTitle}>{article._source.title}</h2>
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
      </section>
    </div>
  );
}

export default Home;
