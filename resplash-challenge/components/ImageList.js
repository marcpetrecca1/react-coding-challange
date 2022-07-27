import styles from '../styles/ImageList.module.css';
import ImageCard from './ImageCard.js';

const ImageList = ({ imageState }) => {
  if (!listState) {
    return null;
  }

  return (
    <div></div>
    //   {imageState.map((image) => (
    //     <ImageCard imageOwner={image.user.name} likes={image?.likes} profile={image.user.links.self}/>
    //   ))}
  );
};

export default ImageList;
