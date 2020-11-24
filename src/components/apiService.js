import axios from "axios";

const baseUrl = `https://pixabay.com/api/`;
const key = `19241694-b57c2c1360e14c2774bd5a8bb`;

export default function getData(searchValue, pageNumber) {
  return axios(
    `${baseUrl}?image_type=photo&orientation=horizontal&q=${searchValue}&page=${pageNumber}&per_page=12&key=${key}`
  ).then(({ data }) => data.hits);
}
