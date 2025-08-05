import { useState, useRef } from 'react'
import styles from './mobile-view.module.scss'
import Button from '../../common/button/button'
import topImage from '../../../assets/images/top.jpg'
import bottomImage from '../../../assets/images/bottom.jpg'

const slides = [
  {
    key: 'photography',
    title: 'Photography',
    buttonLabel: 'See portfolio',
    buttonHref: '/photography',
    slideClass: styles.slidePhotography,
    backgroundImage: topImage,
  },
  {
    key: 'development',
    title: 'Development',
    buttonLabel: 'See projects',
    buttonHref: '/development',
    slideClass: styles.slideDevelopment,
    backgroundImage: bottomImage,
  }
]

const HINT_TEXT = 'Slide to explore';

const MobileView = () => {
  const [active, setActive] = useState(0)
  const touchStartX = useRef(null)

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX
  }

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return
    const deltaX = e.changedTouches[0].clientX - touchStartX.current
    if (deltaX > 50 && active > 0) setActive(active - 1)
    if (deltaX < -50 && active < slides.length - 1) setActive(active + 1)
    touchStartX.current = null
  }

  const mouseDownX = useRef(null)
  const handleMouseDown = (e) => {
    mouseDownX.current = e.clientX
  }
  const handleMouseUp = (e) => {
    if (mouseDownX.current === null) return
    const deltaX = e.clientX - mouseDownX.current
    if (deltaX > 50 && active > 0) setActive(active - 1)
    if (deltaX < -50 && active < slides.length - 1) setActive(active + 1)
    mouseDownX.current = null
  }

  const handleDotClick = (index) => {
    setActive(index)
  }

  return (
    <div
      className={styles.mobile_view}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      role='region'
      aria-label='Portfolio slider'
    >
      <div
        className={styles.slider}
        style={{ transform: `translateX(-${active * 100}vw)` }}
        aria-live='polite'
      >
        {slides.map((slide) => (
          <section
            key={slide.key}
            className={`${styles.slide} ${slide.slideClass}`}
            style={{ 
              backgroundImage: `url(${slide.backgroundImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
            aria-label={slide.title}
            tabIndex={0}
          >
            <div className={styles.slideOverlay}>
              <h2 className={styles.slideTitle}>{slide.title}</h2>
              <Button href={slide.buttonHref} ariaLabel={slide.buttonLabel}>
                {slide.buttonLabel}
              </Button>
            </div>
          </section>
        ))}
      </div>
      <div className={styles.slideHint}>{HINT_TEXT}</div>
      <div className={styles.sliderDots}>
        {slides.map((slide, index) => (
          <button
            key={slide.key}
            className={`${styles.sliderDot} ${active === index ? styles.sliderDotActive : ''}`}
            onClick={() => handleDotClick(index)}
            aria-label={`Go to ${slide.title} slide`}
            aria-current={active === index}
          />
        ))}
      </div>
    </div>
  )
}

export default MobileView