import React, { useState, useEffect } from 'react'
import ThemeToggle from './ThemeToggle'

/**
 * Header component styled with Tailwind CSS for a dark, futuristic look.
 * Includes responsive mobile menu.
 * @author Portfolio Owner
 * @returns {JSX.Element} Futuristic header with navigation
 */
const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  
  // Navigation links
  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ]
  
  // Handle scroll event to change header style
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full bg-background/95 backdrop-blur-sm text-accent font-futuristic px-8 py-4 flex items-center justify-between border-b border-accent/20 ${
        scrolled ? 'shadow-futuristic' : ''
      }`}
      aria-label='Site Header'
    >
      <div className='flex items-center gap-4'>
        <span className='text-3xl font-bold tracking-widest text-accent drop-shadow-lg select-none'>VX</span>
        <span className='text-lg text-subtext font-light tracking-wider hidden sm:inline'>Futuristic Portfolio</span>
      </div>
      
      {/* Desktop Navigation */}
      <div className='hidden md:flex items-center gap-6'>
        <nav aria-label='Main Navigation'>
          <ul className='flex gap-8 text-base font-medium'>
            {navLinks.map((link, index) => (
              <li key={index}>
                <a 
                  href={link.href} 
                  className='hover:text-cyan transition-colors relative group'
                >
                  {link.label}
                  <span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan group-hover:w-full transition-all duration-300'></span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
        
        {/* Theme Toggle */}
        <ThemeToggle />
      </div>
      
      {/* Mobile Menu Button */}
      <div className='md:hidden flex items-center gap-4'>
        {/* Theme Toggle */}
        <ThemeToggle />
        
        <button
          type='button'
          className='text-accent focus:outline-none'
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-expanded={mobileMenuOpen}
          aria-controls='mobile-menu'
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
        >
          <div className='relative w-6 h-6'>
            <span 
              className={`absolute h-0.5 w-6 bg-accent transform transition-all duration-300 ${
                mobileMenuOpen ? 'rotate-45 top-3' : 'top-1'
              }`}
            ></span>
            <span 
              className={`absolute h-0.5 w-6 bg-accent top-3 transition-all duration-300 ${
                mobileMenuOpen ? 'opacity-0' : 'opacity-100'
              }`}
            ></span>
            <span 
              className={`absolute h-0.5 w-6 bg-accent transform transition-all duration-300 ${
                mobileMenuOpen ? '-rotate-45 top-3' : 'top-5'
              }`}
            ></span>
          </div>
        </button>
      </div>
      
      {/* Mobile Menu */}
      <div
        id='mobile-menu'
        className={`md:hidden absolute top-full right-0 left-0 bg-card border-b border-accent/20 transform transition-transform duration-300 ${
          mobileMenuOpen ? 'translate-y-0 shadow-futuristic' : '-translate-y-full'
        }`}
      >
        <nav className='px-8 py-6' aria-label='Mobile Navigation'>
          <ul className='flex flex-col gap-6 text-lg'>
            {navLinks.map((link, index) => (
              <li key={index} className='border-b border-accent/10 pb-3'>
                <a 
                  href={link.href} 
                  className='hover:text-cyan transition-colors block'
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
      
      {/* Mobile Menu Button */}
      <button
        type='button'
        className='md:hidden text-accent focus:outline-none'
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        aria-expanded={mobileMenuOpen}
        aria-controls='mobile-menu'
        aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
      >
        <div className='relative w-6 h-6'>
          <span 
            className={`absolute h-0.5 w-6 bg-accent transform transition-all duration-300 ${
              mobileMenuOpen ? 'rotate-45 top-3' : 'top-1'
            }`}
          ></span>
          <span 
            className={`absolute h-0.5 w-6 bg-accent top-3 transition-all duration-300 ${
              mobileMenuOpen ? 'opacity-0' : 'opacity-100'
            }`}
          ></span>
          <span 
            className={`absolute h-0.5 w-6 bg-accent transform transition-all duration-300 ${
              mobileMenuOpen ? '-rotate-45 top-3' : 'top-5'
            }`}
          ></span>
        </div>
      </button>
      
      {/* Mobile Menu */}
      <div
        id='mobile-menu'
        className={`md:hidden absolute top-full right-0 left-0 bg-card border-b border-accent/20 transform transition-transform duration-300 ${
          mobileMenuOpen ? 'translate-y-0 shadow-futuristic' : '-translate-y-full'
        }`}
      >
        <nav className='px-8 py-6' aria-label='Mobile Navigation'>
          <ul className='flex flex-col gap-6 text-lg'>
            {navLinks.map((link, index) => (
              <li key={index} className='border-b border-accent/10 pb-3'>
                <a 
                  href={link.href} 
                  className='hover:text-cyan transition-colors block'
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
}

export default Header
