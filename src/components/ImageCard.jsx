const ImageCard = (props) => {
  return (
    <>
      <img src={props.image.previewURL} alt="" key="{props.image.id}"/>
      <p>Posted by: {props.image.user}</p>
      <p>Relevant Tags: {props.image.tags}</p>
    </>
    
  );
}

export default ImageCard;