import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { getImageDetails } from "../services/api-calls";


const ImageDetails = (props) => {
  const [imageDetails, setImageDetails] = useState({})
  const { id } = useParams()
  console.log(id)

  useEffect(() => {
    getImageDetails(id)
    .then(imageData => setImageDetails(imageData))
  }, [])

  console.log(imageDetails)

  return (
    <>
      <h3>Image Details Sanity Check</h3>
      <img src={imageDetails.hits[0].webformatURL} alt="" />
      <p>Posted by: {imageDetails.hits[0].user} </p>
      <p>Relevant tags: {imageDetails.hits[0].tags} </p>
      <Link to="/">Return to Search</Link>
    </>
  );
}

export default ImageDetails;