import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: 'c8da672c8bdd4e259475d9ec676a3468'
  }
})