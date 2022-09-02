import React, { useState } from 'react';
import { http } from '../../services/api';

const apiKey = process.env.REACT_APP_API_KEY;

function Home() {
  const [query, setQuery] = useState('');
  const [articles, setArticles] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();

    http
      .get(`${query}?page=1&pageSize=10&apiKey=${apiKey}`)
      .then((response) => {
        console.log(response.data.data);
        setArticles(response.data.data);
      });
  };

  return (
    <div>
      <h1>Home Page</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={({ target }) => setQuery(target.value)} />
        <button type="submit">Search</button>
      </form>
      {articles.length > 0 &&
        articles.map((article) => {
          return (
            <div key={article._source.id}>
              <p>{article._source.authors}</p>
              <p>{article._source.type}</p>
              <p>{article._source.title}</p>
              <p>{article._source.description}</p>
              <hr />
            </div>
          );
        })}
    </div>
  );
}

export default Home;
