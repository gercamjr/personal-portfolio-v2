import React from 'react'

/**
 * Footer component with copyright and links
 * @author Portfolio Owner
 * @returns {JSX.Element} Footer with copyright and navigation
 */
const Footer: React.FC = () => {
  // Get current year for copyright
  const currentYear = new Date().getFullYear()

  // Navigation links
  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <footer className='bg-card border-t border-accent/30 py-8 mt-12'>
      <div className='max-w-7xl mx-auto px-4 md:px-8'>
        <div className='flex flex-col md:flex-row justify-between items-center'>
          <div className='mb-6 md:mb-0'>
            <span className='text-xl font-bold text-accent'>Your Name</span>
            <p className='text-sm text-subtext mt-2'>Software Engineer & Full Stack Developer</p>
          </div>

          <nav className='mb-8 md:mb-0'>
            <ul className='flex flex-wrap gap-x-6 gap-y-2 justify-center text-sm'>
              {navLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className='text-text hover:text-accent transition-colors'>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className='border-t border-accent/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center'>
          <p className='text-sm text-text/70'>&copy; {currentYear} Your Name. All rights reserved.</p>

          <div className='mt-4 md:mt-0 text-sm text-text/70'>
            <span>Built with </span>
            <span className='text-accent'>React</span>
            <span> & </span>
            <span className='text-teal'>TailwindCSS</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
