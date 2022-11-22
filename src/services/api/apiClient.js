import axios from 'axios';

/**
 * Сконфигурированный axios клиент
 * */

const axiosClient = axios.create({
  timeout: 100000,
  baseURL: 'https://test-api.mybimiboo.dev/',
  headers: {
    'Content-Type': 'application/json',
  },
  maxContentLength: 10000,
});

export default axiosClient;
