import styles from '../styles/ImageCard.module.css';
import Image from 'next/image';

const ImageCard = ({ imageOwner, likes, profileLink, imageUrl, url }) => (
  <did className={styles.cardContainer}>
    <a className={styles.imageCard} href={imageUrl}>
      <img
        src={`${url}`}
        alt={`${imageOwner}'s photo`}
        className={styles.images}
      />
      <div className={styles.infoContainer}>
        <span className={styles.profileLink} href={profileLink}>
          {imageOwner}
        </span>
        <span className={styles.likes}>
          {likes ? 'Likes ' : null}
          {likes ? likes : 'Give this photo its first like!'}
        </span>
      </div>
    </a>
  </did>
);

export default ImageCard;
