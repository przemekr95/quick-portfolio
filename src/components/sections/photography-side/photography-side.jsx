import { useState, useCallback } from 'react'
import Button from '../../common/button/button'
import styles from './photography-side.module.scss'
import leftBg from '../../../assets/images/left-bg.jpg'

const PhotographySide = () => {
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseEnter = useCallback(() => setIsHovered(true), [])
  const handleMouseLeave = useCallback(() => setIsHovered(false), [])

  return (
    <section
      className={styles.photography_side}
      style={{ background: `url(${leftBg}) center/cover no-repeat` }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      aria-labelledby='photography-heading'
    >
      <h2 id='photography-heading' className={styles.heading_text}>
        PHOTOGRAPHY
      </h2>
      <div 
        className={`${styles.overlay} ${isHovered ? styles.overlay_visible : ''}`}
        aria-hidden={!isHovered}
      >
        <div className={styles.overlay_content}>
          <p className={styles.overlay_description}>
            CAPTURING MOMENTS
          </p>
          <Button
            href='http://www.foto.przemekrura.pl/'
            ariaLabel='View Portfolio'
          >
            View Portfolio
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PhotographySide