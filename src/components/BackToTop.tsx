import React, { useState, useEffect } from 'react'

/**
 * Back to top button that appears when scrolling down
 * @author Portfolio Owner
 * @returns {JSX.Element} Animated back to top button
 */
const BackToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false)

  // Show button when scrolling down 300px
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 p-3 bg-card border border-accent/30 rounded-full shadow-md hover:shadow-futuristic transition-all duration-300 z-40 text-accent ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
      }`}
      aria-label='Back to top'
    >
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='24'
        height='24'
        viewBox='0 0 24 24'
        fill='none'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
        className='feather feather-chevron-up'
      >
        <polyline points='18 15 12 9 6 15'></polyline>
      </svg>
    </button>
  )
}

export default BackToTop
