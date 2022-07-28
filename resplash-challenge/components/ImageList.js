import styles from '../styles/ImageList.module.css';
import ImageCard from './ImageCard.js';

const ImageList = ({ imageState }) => {
  return imageState ? (
    <div className={styles.imageList}>
      {imageState.map((image) => (
        <ImageCard
          key={image.id}
          imageOwner={image.user?.name}
          likes={image?.likes}
          profileLink={image.user?.links.self}
          url={image?.urls?.small}
        />
      ))}
    </div>
  ) : null;
};

export default ImageList;
