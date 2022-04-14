import axios from 'axios';
const $axios = axios.create({
  baseURL: `http://127.0.0.1:8000/api/auth`,
  headers: { 'Content-Type': 'application/json' },
});
$axios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('accessToken');
    if (token) {
      config.headers.common['Authorization'] = `Bearer ${token}`;
    } else {
      delete config.headers.common['Authorization'];
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
export default $axios;
