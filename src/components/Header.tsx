import React from 'react'

/**
 * Header component styled with Tailwind CSS for a dark, futuristic look.
 * @author Gera
 * @returns {JSX.Element} Futuristic header
 */
const Header: React.FC = () => {
  return (
    <header
      className='w-full bg-background text-accent shadow-futuristic font-futuristic px-8 py-6 flex items-center justify-between border-b-2 border-accent/30'
      aria-label='Site Header'
    >
      <div className='flex items-center gap-4'>
        <span className='text-3xl font-bold tracking-widest text-accent drop-shadow-lg select-none'>VX</span>
        <span className='text-lg text-subtext font-light tracking-wider hidden sm:inline'>Futuristic Portfolio</span>
      </div>
      <nav aria-label='Main Navigation'>
        <ul className='flex gap-8 text-base font-medium'>
          <li>
            <a href='#about' className='hover:text-cyan transition-colors'>
              About
            </a>
          </li>
          <li>
            <a href='#projects' className='hover:text-cyan transition-colors'>
              Projects
            </a>
          </li>
          <li>
            <a href='#skills' className='hover:text-cyan transition-colors'>
              Skills
            </a>
          </li>
          <li>
            <a href='#contact' className='hover:text-cyan transition-colors'>
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
