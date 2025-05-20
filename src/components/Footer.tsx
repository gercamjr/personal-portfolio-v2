import React from 'react'

const Footer: React.FC = () => {
  return (
    <footer className='footer'>
      <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
      {/* Social media links or other footer content can go here */}
    </footer>
  )
}

export default Footer
