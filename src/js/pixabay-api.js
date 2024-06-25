const fetchImages = value => {
  const BASE_URL = 'https://pixabay.com';
  const END_POINT = '/api/';
  const params = new URLSearchParams({
    key: '44460867-9f013743ec0c5b2ec6c0f5088',
    q: value,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  })
  const url = `${BASE_URL}${END_POINT}?${params}`;
  return fetch(url).then(res => res.json())
}

export default fetchImages;