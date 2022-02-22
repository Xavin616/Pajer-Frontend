import styles from '../styles/PlaceImages.module.css';
import Image from 'next/image';

function PlaceImages({ src, alt, words }) {
  return (
    <div className={styles.root}>
        <Image
            src={src}
            alt={alt}
            height={200}
            width={200}
            className={styles.image}
        />
        <div className={styles.words}>{words}</div>
    </div>
  )
}

export default PlaceImages