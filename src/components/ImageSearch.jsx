import React, { useState } from 'react';

//components
import SearchForm from "./SearchForm";

//services
import { imageSearch } from '../services/api-calls';
import ImageCard from './ImageCard';

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
      <div>
        {images.map(image =>
            <ImageCard image={image} key={image.id}/>
          )}
      </div>
      
    </>
  );
}

export default ImageSearch;