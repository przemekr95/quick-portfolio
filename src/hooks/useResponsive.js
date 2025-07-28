import { useState, useEffect } from 'react'

export const useResponsive = () => {
  const [screenSize, setScreenSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  })

  useEffect(() => {
    const handleResize = () => {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return {
    isMobile: screenSize.width <= 768,
    isTablet: screenSize.width <= 1024 && screenSize.width > 768,
    isDesktop: screenSize.width > 1024,
    screenSize,
  }
}