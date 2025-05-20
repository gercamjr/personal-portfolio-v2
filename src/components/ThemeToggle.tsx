import React, { useState, useEffect } from 'react'

/**
 * Theme toggle component for switching between dark and light modes
 * @author Portfolio Owner
 * @returns {JSX.Element} Theme toggle button
 */
const ThemeToggle: React.FC = () => {
  // Check if user prefers dark mode or has previously set a theme
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Check local storage first
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme')
      if (savedTheme) {
        return savedTheme === 'dark'
      }
      // If no saved preference, check user system preference
      return window.matchMedia('(prefers-color-scheme: dark)').matches
    }
    return true // Default to dark
  })

  // Apply theme when component mounts and when theme changes
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [isDarkMode])

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode)
  }

  return (
    <button
      onClick={toggleTheme}
      className='p-2 rounded-full bg-background border border-accent/30 hover:border-accent/60 transition-colors focus:outline-none focus:ring-2 focus:ring-accent/50'
      aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {isDarkMode ? (
        // Sun icon for light mode
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='20'
          height='20'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
          className='text-accent'
        >
          <circle cx='12' cy='12' r='5'></circle>
          <line x1='12' y1='1' x2='12' y2='3'></line>
          <line x1='12' y1='21' x2='12' y2='23'></line>
          <line x1='4.22' y1='4.22' x2='5.64' y2='5.64'></line>
          <line x1='18.36' y1='18.36' x2='19.78' y2='19.78'></line>
          <line x1='1' y1='12' x2='3' y2='12'></line>
          <line x1='21' y1='12' x2='23' y2='12'></line>
          <line x1='4.22' y1='19.78' x2='5.64' y2='18.36'></line>
          <line x1='18.36' y1='5.64' x2='19.78' y2='4.22'></line>
        </svg>
      ) : (
        // Moon icon for dark mode
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='20'
          height='20'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
          className='text-accent'
        >
          <path d='M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z'></path>
        </svg>
      )}
    </button>
  )
}

export default ThemeToggle
