import React, { useState } from 'react'
import ProjectModal from './ProjectModal'

/**
 * Projects section showcasing portfolio work with a futuristic design
 * @author Portfolio Owner
 * @returns {JSX.Element} Projects section with featured work
 */
const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null)
  
  // Sample project data - replace with your actual projects
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce platform with React, Node.js, and MongoDB. Features include user authentication, payment processing, and order management.',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe API'],
      image: '/project-ecommerce.jpg', // Add your project images to the public folder
      liveUrl: 'https://example.com',
      codeUrl: 'https://github.com/yourusername/project-name',
      fullDescription: 'This comprehensive e-commerce platform offers a seamless shopping experience with real-time inventory updates, secure payment processing, and user account management. The frontend is built with React, utilizing context API for state management, while the backend uses Node.js with Express and MongoDB for data persistence.',
      features: [
        'User authentication and profile management',
        'Product catalog with search and filtering',
        'Shopping cart and checkout system',
        'Secure payment processing with Stripe',
        'Order history and tracking',
        'Admin dashboard for inventory management'
      ],
      challenges: [
        'Implemented optimistic UI updates to create a responsive user experience',
        'Designed a secure authentication system with JWT tokens and refresh logic',
        'Optimized database queries for large product catalogs',
        'Integrated real-time inventory tracking with WebSockets'
      ]
    },
    {
      title: 'Task Management App',
      description: 'A productivity app for task management with drag-and-drop functionality, user authentication, and real-time updates.',
      technologies: ['React', 'TypeScript', 'Firebase', 'TailwindCSS'],
      image: '/project-taskmanager.jpg',
      liveUrl: 'https://example.com',
      codeUrl: 'https://github.com/yourusername/project-name',
      fullDescription: 'This task management application helps users organize their workflow with an intuitive interface featuring drag-and-drop functionality. Tasks can be organized into customizable boards, lists, and cards with real-time synchronization across multiple devices.',
      features: [
        'Drag-and-drop interface for task organization',
        'Real-time updates with Firebase Firestore',
        'User authentication and data persistence',
        'Light and dark mode toggle',
        'Deadline reminders and notifications',
        'Task filtering and sorting options'
      ],
      challenges: [
        'Created a responsive drag-and-drop system that works seamlessly on both desktop and mobile',
        'Implemented efficient real-time synchronization to minimize latency',
        'Designed an intuitive UI/UX flow to maximize productivity'
      ]
    },
    {
      title: 'Portfolio Website',
      description: 'A responsive portfolio website with a futuristic design theme, built with React and TailwindCSS.',
      technologies: ['React', 'TypeScript', 'Vite', 'TailwindCSS'],
      image: '/project-portfolio.jpg',
      liveUrl: 'https://example.com',
      codeUrl: 'https://github.com/yourusername/project-name',
      fullDescription: 'This portfolio website showcases my work and skills with a unique futuristic design theme. The site features smooth animations, responsive layouts, and accessibility considerations throughout.',
      features: [
        'Futuristic UI design with custom animations',
        'Responsive layout for all device sizes',
        'Dark/light mode toggle with user preference persistence',
        'Optimized performance with lazy loading',
        'Contact form with validation and email integration'
      ],
      challenges: [
        'Implemented custom animations while maintaining performance',
        'Designed a cohesive futuristic theme across all components',
        'Ensured accessibility compliance while preserving design aesthetics'
      ]
    },
    {
      title: 'Weather Dashboard',
      description: 'A weather application that displays current weather and forecasts based on user location or search queries.',
      technologies: ['JavaScript', 'Weather API', 'HTML/CSS', 'Responsive Design'],
      image: '/project-weather.jpg',
      liveUrl: 'https://example.com',
      codeUrl: 'https://github.com/yourusername/project-name',
      fullDescription: 'This weather dashboard provides users with current conditions and 5-day forecasts for any location worldwide. It features geolocation for automatic local weather, search functionality, and detailed meteorological information.',
      features: [
        'Current weather conditions with visual indicators',
        '5-day weather forecast with hourly breakdowns',
        'Geolocation for automatic local weather',
        'Search functionality for global locations',
        'Weather alerts and notifications',
        'Interactive weather maps'
      ],
      challenges: [
        'Integrated multiple weather API data sources for comprehensive information',
        'Implemented efficient caching to reduce API calls',
        'Designed intuitive visual representations of weather data'
      ]
    },
  ]

  const openProjectModal = (index: number) => {
    setSelectedProject(index)
  }

  const closeProjectModal = () => {
    setSelectedProject(null)
  }

  return (
    <section
      id='projects'
      className='py-16 md:py-24'
      aria-label='Projects Section'
    >
      <div className='text-center mb-16'>
        <h2 className='text-3xl md:text-4xl font-bold text-accent mb-4'>Featured Projects</h2>
        <p className='text-lg text-subtext max-w-2xl mx-auto'>
          A selection of my recent work showcasing my skills and experience in building
          modern web applications.
        </p>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10'>
        {projects.map((project, index) => (
          <div
            key={index}
            className='group bg-card rounded-lg overflow-hidden border border-accent/20 hover:shadow-futuristic transition-all duration-500 cursor-pointer'
            onClick={() => openProjectModal(index)}
          >
            <div className='h-48 bg-background relative overflow-hidden'>
              {project.image ? (
                <img
                  src={project.image}
                  alt={project.title}
                  className='w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity'
                />
              ) : (
                <div className='w-full h-full flex items-center justify-center bg-gradient-to-br from-background to-card'>
                  <span className='text-4xl text-accent/30'>{project.title[0]}</span>
                </div>
              )}
              <div className='absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent'></div>
            </div>

            <div className='p-6'>
              <h3 className='text-xl font-bold text-accent mb-2'>{project.title}</h3>
              <p className='text-sm text-text/80 mb-4'>{project.description}</p>
              
              <div className='flex flex-wrap gap-2 mb-6'>
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className='px-2 py-1 text-xs bg-background/50 border border-accent/20 rounded-md'
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className='flex gap-4'>
                <button
                  className='px-4 py-2 text-sm bg-background/50 border border-accent/40 rounded-md hover:bg-accent/10 transition-colors'
                  onClick={(e) => {
                    e.stopPropagation();
                    openProjectModal(index);
                  }}
                >
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className='mt-12 text-center'>
        <a
          href='https://github.com/yourusername'
          target='_blank'
          rel='noopener noreferrer'
          className='inline-flex items-center gap-2 px-6 py-3 border border-accent rounded-md hover:bg-accent/10 transition-colors'
        >
          <span>View More on GitHub</span>
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
            className='feather feather-github'
          >
            <path d='M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22'></path>
          </svg>
        </a>
      </div>

      {/* Project Modal */}
      {selectedProject !== null && (
        <ProjectModal
          isOpen={selectedProject !== null}
          onClose={closeProjectModal}
          project={projects[selectedProject]}
        />
      )}
    </section>
  )
}

export default Projects

  return (
    <section
      id='projects'
      className='py-16 md:py-24'
      aria-label='Projects Section'
    >
      <div className='text-center mb-16'>
        <h2 className='text-3xl md:text-4xl font-bold text-accent mb-4'>Featured Projects</h2>
        <p className='text-lg text-subtext max-w-2xl mx-auto'>
          A selection of my recent work showcasing my skills and experience in building
          modern web applications.
        </p>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10'>
        {projects.map((project, index) => (
          <div
            key={index}
            className='group bg-card rounded-lg overflow-hidden border border-accent/20 hover:shadow-futuristic transition-all duration-500'
          >
            <div className='h-48 bg-background relative overflow-hidden'>
              {project.image ? (
                <img
                  src={project.image}
                  alt={project.title}
                  className='w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity'
                />
              ) : (
                <div className='w-full h-full flex items-center justify-center bg-gradient-to-br from-background to-card'>
                  <span className='text-4xl text-accent/30'>{project.title[0]}</span>
                </div>
              )}
              <div className='absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent'></div>
            </div>

            <div className='p-6'>
              <h3 className='text-xl font-bold text-accent mb-2'>{project.title}</h3>
              <p className='text-sm text-text/80 mb-4'>{project.description}</p>
              
              <div className='flex flex-wrap gap-2 mb-6'>
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className='px-2 py-1 text-xs bg-background/50 border border-accent/20 rounded-md'
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className='flex gap-4'>
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='px-4 py-2 text-sm bg-accent text-background rounded-md hover:bg-cyan transition-colors'
                  >
                    View Live
                  </a>
                )}
                {project.codeUrl && (
                  <a
                    href={project.codeUrl}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='px-4 py-2 text-sm border border-accent/50 rounded-md hover:bg-accent/10 transition-colors'
                  >
                    View Code
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className='mt-12 text-center'>
        <a
          href='https://github.com/yourusername'
          target='_blank'
          rel='noopener noreferrer'
          className='inline-flex items-center gap-2 px-6 py-3 border border-accent rounded-md hover:bg-accent/10 transition-colors'
        >
          <span>View More on GitHub</span>
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
            className='feather feather-github'
          >
            <path d='M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22'></path>
          </svg>
        </a>
      </div>
    </section>
  )
}

export default Projects
