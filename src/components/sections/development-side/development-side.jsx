import { useState, useCallback } from 'react'
import Button from '../../common/button/button'
import styles from './development-side.module.scss'
import rightBg from '../../../assets/images/right-bg.jpg'

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
      <h2 id='development-heading' className={styles.heading_text}>
        DEVELOPMENT
      </h2>
      <div 
        className={`${styles.overlay} ${isHovered ? styles.overlay_visible : ''}`}
        aria-hidden={!isHovered}
      >
        <div className={styles.overlay_content}>
          <p className={styles.overlay_description}>
            BUILDING EXPERIENCES
          </p>
          <Button
            href='http://www.dev.przemekrura.pl/'
            ariaLabel='View Projects'
          >
            View Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default DevelopmentSide