import axios from 'axios';

const apiKey  = '20349165-a1cad4bdc7b6c381f0f75fb94';

const fetchHits = ({ searchQuery = '', currentPage = 1 }) => {
  return axios
    .get(
      `https://pixabay.com/api/?q=${searchQuery}&page=${currentPage}&key=${apiKey}&image_type=photo&orientation=horizontal&per_page=12`,
    )
    .then(res => res.data.hits);
};

const fetch = { fetchHits };
export default fetch;