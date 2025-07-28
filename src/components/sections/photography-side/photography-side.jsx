import { useState, useCallback } from 'react'
import Button from '../../common/button/button'
import styles from './photography-side.module.scss'
import leftBg from '../../../assets/images/left-bg_02.78fb04fb.jpg'

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
      <h2 id='photography-heading' className={styles.bottom_text}>
        PHOTOGRAPHY
      </h2>
      <div 
        className={`${styles.overlay} ${isHovered ? styles.overlay_visible : ''}`}
        aria-hidden={!isHovered}
      >
        <div className={styles.overlay_content}>
          <p className={styles.overlay_description}>
            Więcej o fotografii
          </p>
          <Button
            href='/photography'
            ariaLabel='Zobacz więcej zdjęć'
          >
            Zobacz więcej
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PhotographySide