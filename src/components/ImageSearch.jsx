import React, { useState } from 'react';

import SearchForm from "./SearchForm";

import { imageSearch } from '../services/api-calls';

const ImageSearch = (props) => {
  const [images, setImages] = useState([])

  const handleImageSearch = formData => {
    imageSearch(formData)
    .then(imageHits => {
      setImages(imageHits.hits)
    })
  }

  return (
    <>
      <h3>Image Search</h3>
      <SearchForm handleImageSearch={handleImageSearch} />
    </>
  );
}

export default ImageSearch;