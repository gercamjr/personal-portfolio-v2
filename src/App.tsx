import { useEffect } from 'react'
import Layout from './components/Layout'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import './App.css'

/**
 * Main application component with intersection observer for animations
 * @author Portfolio Owner
 * @returns {JSX.Element} Complete portfolio application
 */
function App() {
  // Add intersection observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      }
    )

    // Observe all sections
    document.querySelectorAll('section').forEach((section) => {
      observer.observe(section)
    })

    return () => {
      // Clean up
      document.querySelectorAll('section').forEach((section) => {
        observer.unobserve(section)
      })
    }
  }, [])

  return (
    <Layout>
      <About />
      <Skills />
      <Projects />
      <Contact />
    </Layout>
  )
}

export default App
