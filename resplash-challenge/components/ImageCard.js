import styles from '../styles/ImageCard.module.css';

const ImageCard = ({ imageOwner, likes, profileLink, image, url }) => (
  <div className={styles.cardContainer}>
    <a
      className={styles.imageContainer}
      href={url}
      target='_blank'
      rel='noopener noreferrer'
    >
      <img
        src={`${image}`}
        alt={`${imageOwner}'s photo`}
        className={styles.images}
      />
    </a>
    <div className={styles.infoContainer}>
      <a
        className={styles.profileLink}
        href={profileLink}
        target='_blank'
        rel='noopener noreferrer'
      >
        {imageOwner}
      </a>
      <span className={styles.likes}>
        {likes ? 'Likes ' : null}
        {likes ? (
          <span className={styles.numberOfLikes}>{likes}</span>
        ) : (
          <span>Give this photo its first like!</span>
        )}
      </span>
    </div>
  </div>
);

export default ImageCard;
