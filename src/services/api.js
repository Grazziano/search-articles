const apiKey = process.env.REACT_APP_API_KEY;
const url = 'https://api.core.ac.uk/v3/search/works/?apiKey=';

export const api = () => {
  const data = fetch(url + apiKey)
    .then((response) => response.json())
    .then((data) => console.log(data.results))
    .catch((error) => console.log(error.message));
  return data;
};
