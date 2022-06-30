const baseUrl = 'https://pixabay.com/api/'
const MY_KEY= process.env.REACT_APP_API_KEY_PIXABAY;

export function imageSearch(formData) {
  return fetch(`${baseUrl}?key=${MY_KEY}&q=${formData.query}`)
  .then(res => res.json())
}