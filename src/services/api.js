import axios from 'axios';

// const url = 'https://api.core.ac.uk/v3/search/works/?apiKey=';
const url = 'https://core.ac.uk:443/api-v2/search/';

export const http = axios.create({
  baseURL: `${url}`,
});
