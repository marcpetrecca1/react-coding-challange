import styles from '../styles/ImageCard.module.css';

const ImageCard = ({ imageOwner, likes, profileLink, imageUrl, url }) => (
  <div className={styles.cardContainer}>
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
          {likes ? (
            <span className={styles.numberOfLikes}>{likes}</span>
          ) : (
            'Give this photo its first like!'
          )}
        </span>
      </div>
    </a>
  </div>
);

export default ImageCard;
