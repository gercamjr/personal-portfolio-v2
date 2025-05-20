import React, { useEffect, useState } from 'react'
import LoadingSpinner from './LoadingSpinner'

interface ProjectModalProps {
  isOpen: boolean
  onClose: () => void
  project: {
    title: string
    description: string
    technologies: string[]
    image?: string
    liveUrl?: string
    codeUrl?: string
    fullDescription?: string
    features?: string[]
    challenges?: string[]
    screenshots?: string[]
  }
}

/**
 * Modal component for displaying detailed project information
 * @author Portfolio Owner
 * @param {ProjectModalProps} props - Component properties
 * @returns {JSX.Element} Project details modal
 */
const ProjectModal: React.FC<ProjectModalProps> = ({ isOpen, onClose, project }) => {
  const [isLoaded, setIsLoaded] = useState(false)

  // Prevent body scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }

    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [isOpen])

  // Simulate loading state
  useEffect(() => {
    if (isOpen) {
      setIsLoaded(false)
      const timer = setTimeout(() => {
        setIsLoaded(true)
      }, 800)

      return () => clearTimeout(timer)
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div
      className='fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4'
      onClick={onClose}
      role='dialog'
      aria-modal='true'
      aria-labelledby='project-modal-title'
    >
      {/* Modal content */}
      <div
        className='bg-card border border-accent/30 rounded-lg w-full max-w-4xl max-h-[90vh] overflow-y-auto'
        onClick={(e) => e.stopPropagation()}
      >
        {!isLoaded ? (
          <div className='h-64 flex items-center justify-center'>
            <LoadingSpinner size='lg' />
          </div>
        ) : (
          <>
            {/* Close button */}
            <button
              className='absolute top-4 right-4 text-text/70 hover:text-accent p-2 rounded-full bg-background/50 z-10'
              onClick={onClose}
              aria-label='Close modal'
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
              >
                <line x1='18' y1='6' x2='6' y2='18'></line>
                <line x1='6' y1='6' x2='18' y2='18'></line>
              </svg>
            </button>

            {/* Project image/header */}
            <div className='relative h-72 bg-background overflow-hidden'>
              {project.image ? (
                <img src={project.image} alt={project.title} className='w-full h-full object-cover' />
              ) : (
                <div className='w-full h-full flex items-center justify-center bg-gradient-to-r from-background to-card'>
                  <span className='text-5xl text-accent/30'>{project.title[0]}</span>
                </div>
              )}
              <div className='absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent'></div>
              <div className='absolute bottom-0 left-0 right-0 p-6'>
                <h2 id='project-modal-title' className='text-3xl font-bold text-accent mb-2'>
                  {project.title}
                </h2>
                <div className='flex flex-wrap gap-2'>
                  {project.technologies.map((tech, index) => (
                    <span key={index} className='px-2 py-1 text-xs bg-background/50 border border-accent/20 rounded-md'>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Project content */}
            <div className='p-6 space-y-6'>
              <div>
                <h3 className='text-xl font-medium text-accent mb-3'>Project Overview</h3>
                <p className='text-text/90 leading-relaxed'>{project.fullDescription || project.description}</p>
              </div>

              {project.features && project.features.length > 0 && (
                <div>
                  <h3 className='text-xl font-medium text-accent mb-3'>Key Features</h3>
                  <ul className='list-disc list-inside space-y-2 text-text/90'>
                    {project.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
              )}

              {project.challenges && project.challenges.length > 0 && (
                <div>
                  <h3 className='text-xl font-medium text-accent mb-3'>Challenges & Solutions</h3>
                  <ul className='list-disc list-inside space-y-2 text-text/90'>
                    {project.challenges.map((challenge, index) => (
                      <li key={index}>{challenge}</li>
                    ))}
                  </ul>
                </div>
              )}

              {project.screenshots && project.screenshots.length > 0 && (
                <div>
                  <h3 className='text-xl font-medium text-accent mb-3'>Screenshots</h3>
                  <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                    {project.screenshots.map((screenshot, index) => (
                      <img
                        key={index}
                        src={screenshot}
                        alt={`${project.title} screenshot ${index + 1}`}
                        className='rounded-md border border-accent/20'
                      />
                    ))}
                  </div>
                </div>
              )}

              <div className='flex flex-wrap gap-4 pt-4'>
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='px-6 py-3 bg-accent text-background rounded-md hover:bg-cyan transition-colors'
                  >
                    Visit Live Site
                  </a>
                )}
                {project.codeUrl && (
                  <a
                    href={project.codeUrl}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='px-6 py-3 border border-accent/50 rounded-md hover:bg-accent/10 transition-colors flex items-center gap-2'
                  >
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
                    >
                      <path d='M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22'></path>
                    </svg>
                    View Code
                  </a>
                )}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default ProjectModal
