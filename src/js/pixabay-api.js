import Axios from "axios";
const axios = Axios.create({
  baseURL: 'https://pixabay.com',
});

const fetchImages = async (value, page) => {
  const res = await axios.get('/api/', {
    params: {
      q: value,
      per_page: 15,
      page: page,
      key: '44460867-9f013743ec0c5b2ec6c0f5088',
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
    }
  })
  return res.data
}

export default fetchImages;