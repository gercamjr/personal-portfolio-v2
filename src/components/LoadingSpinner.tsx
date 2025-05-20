import React from 'react'

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg'
  color?: string
}

/**
 * Animated loading spinner with futuristic design
 * @author Portfolio Owner
 * @param {LoadingSpinnerProps} props - Component properties
 * @returns {JSX.Element} Loading spinner
 */
const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ size = 'md', color = 'accent' }) => {
  // Map size to pixel values
  const sizeMap = {
    sm: 'h-4 w-4',
    md: 'h-8 w-8',
    lg: 'h-12 w-12',
  }

  // Map color to tailwind classes
  const colorMap = {
    accent: 'border-t-accent',
    cyan: 'border-t-cyan',
    teal: 'border-t-teal',
    text: 'border-t-text',
    subtext: 'border-t-subtext',
  }

  return (
    <div className='flex justify-center items-center'>
      <div
        className={`${sizeMap[size]} border-4 border-background/30 ${
          colorMap[color as keyof typeof colorMap]
        } rounded-full animate-spin`}
        role='status'
        aria-label='Loading'
      >
        <span className='sr-only'>Loading...</span>
      </div>
    </div>
  )
}

export default LoadingSpinner
