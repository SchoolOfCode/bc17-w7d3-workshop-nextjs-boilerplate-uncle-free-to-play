
import styles from './HeroDescription.module.css'
import Link from 'next/link';

const HeroDescription = () => {
    return (
        <div className={styles.heroDescription}>
        <p className={styles.heroHeadline}>
          Discover the <br />
          perfect fireplace ...
        </p>
        <p className={styles.consultationParagraph}>
          Book consultation: <span className={styles.numberSpan}><Link href="/booking/">Booking</Link></span>
        </p>
      </div>
    )
}

export default HeroDescription