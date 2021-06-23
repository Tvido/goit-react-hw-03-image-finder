// import { Component } from 'react';
import axios from 'axios';

const API_KEY = '21227182-bce953b8699f3d441be82715f';
const BASE_URL = 'https://pixabay.com/api';

const fetchImages = ({ searchQuery = '', currentPage = 1, pageSize = 12 }) => {
  return axios.get(
    `${BASE_URL}/?image_type=photo&orientation=horizontal&q=${searchQuery}&page=${currentPage}&per_page=${pageSize}&key=${API_KEY}`,
  );
};

export default fetchImages;
