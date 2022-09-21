import styles from '../styles/ImageList.module.css';
import ImageCard from './ImageCard.js';

const ImageList = ({ imageState }) => {
  return imageState ? (
    <div className={styles.imageList}>
      {imageState.map((image) => (
        <ImageCard
          key={image?.id}
          imageOwner={image?.user?.name}
          likes={image?.likes}
          profileLink={image?.user?.links?.html}
          image={image?.urls?.small}
          url={image?.links?.html}
        />
      ))}
    </div>
  ) : null;
};

export default ImageList;
