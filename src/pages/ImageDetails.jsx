import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { getImageDetails } from "../services/api-calls";


const ImageDetails = (props) => {
  const [imageDetails, setImageDetails] = useState({})
  const { id } = useParams()
  console.log(id)

  useEffect(() => {
    const getAndSetImageDetails = async () => {
      const imageDetails = await getImageDetails(id)
      setImageDetails(imageDetails)
    } 
    getAndSetImageDetails()
  }, [])

  console.log(imageDetails)

  return (
    <>
      <h3>Image Details</h3>
      { imageDetails.name ?
        <>
          <img src={imageDetails.hits[0].webformatURL} alt="" />
          <p>Posted by: {imageDetails.hits[0].user} </p>
          <p>Relevant tags: {imageDetails.hits[0].tags} </p>
        </>
        :
        <>
          <p>Loading Image details...</p>
        </>
      }
      <Link to="/">Return to Search</Link>
    </>
  );
}

export default React.memo(ImageDetails);