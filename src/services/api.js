import axios from 'axios';

const url = 'https://core.ac.uk:443/api-v2/';

export const http = axios.create({
  baseURL: `${url}`,
});
