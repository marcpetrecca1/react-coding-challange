import axios from 'axios';
import { AccessKey } from '../unsplash.config';

const getPhotos = () => {
  return axios.get(`https://api.unsplash.com/photos?client_id=${AccessKey}`);
};

export default getPhotos;
