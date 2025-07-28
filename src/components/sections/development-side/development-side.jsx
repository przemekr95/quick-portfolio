import { useState, useCallback } from 'react'
import Button from '../../common/button/button'
import styles from './development-side.module.scss'
import rightBg from '../../../assets/images/right-bg_02.6ad4edee.jpg'

const DevelopmentSide = () => {
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseEnter = useCallback(() => setIsHovered(true), [])
  const handleMouseLeave = useCallback(() => setIsHovered(false), [])

  return (
    <section
      className={styles.development_side}
      style={{ background: `url(${rightBg}) center/cover no-repeat` }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      aria-labelledby='development-heading'
    >
      <h2 id='development-heading' className={styles.bottom_text}>
        DEVELOPMENT
      </h2>
      <div 
        className={`${styles.overlay} ${isHovered ? styles.overlay_visible : ''}`}
        aria-hidden={!isHovered}
      >
        <div className={styles.overlay_content}>
          <p className={styles.overlay_description}>
            Więcej o developmentcie
          </p>
          <Button
            href='/development'
            ariaLabel='Zobacz więcej projektów'
          >
            Zobacz więcej
          </Button>
        </div>
      </div>
    </section>
  );
};

export default DevelopmentSide