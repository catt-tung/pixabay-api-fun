import { Link } from "react-router-dom";

const ImageCard = (props) => {
  return (
    <>
      <div className="individual-image-container" key={props.image.id}>
        <Link to={`/image/${props.image.id}`}><img src={props.image.previewURL} alt="" key={props.image.id}/></Link>
        {/* <p>Posted by: {props.image.user}</p>
        <p>Relevant Tags: {props.image.tags}</p> */}
      </div>
    </>
    
  );
}

export default ImageCard;