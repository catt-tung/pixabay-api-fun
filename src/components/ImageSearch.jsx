import React, { useState } from 'react';

//components
import SearchForm from "./SearchForm";

//services
import { imageSearch } from '../services/api-calls';

const ImageSearch = (props) => {
  const [images, setImages] = useState([])

  const handleImageSearch = formData => {
    imageSearch(formData)
    .then(imageHits => {
      setImages(imageHits.hits)
    })
  }
  console.log(images)

  return (
    <>
      <h3>Image Search</h3>
      <SearchForm handleImageSearch={handleImageSearch} />
      {images.map(image =>
        <div key={image.id}><img src={image.previewURL} alt="" /></div>
        )}
    </>
  );
}

export default ImageSearch;