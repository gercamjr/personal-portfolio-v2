import React from 'react'
import Header from './Header'
import Footer from './Footer'
import BackToTop from './BackToTop'

interface LayoutProps {
  children: React.ReactNode
}

/**
 * Main layout component that wraps the entire application
 * @author Portfolio Owner
 * @returns {JSX.Element} Layout with header, main content and footer
 */
const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className='min-h-screen bg-background text-text flex flex-col font-futuristic'>
      <Header />
      {/* Add top padding to account for fixed header */}
      <main className='flex-1 px-4 py-8 md:px-8 lg:px-16 max-w-7xl mx-auto w-full mt-24'>{children}</main>
      <Footer />
      {/* Add back to top button */}
      <BackToTop />
    </div>
  )
}

export default Layout

export default Layout

export default Layout
