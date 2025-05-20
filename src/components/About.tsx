import React from 'react'

/**
 * About section component with a futuristic design
 * @author Portfolio Owner
 * @returns {JSX.Element} About section with personal information
 */
const About: React.FC = () => {
  return (
    <section
      id='about'
      className='py-16 md:py-24 flex flex-col md:flex-row items-center gap-12'
      aria-label='About Me Section'
    >
      <div className='w-full md:w-1/2 relative'>
        <div className='aspect-square max-w-md mx-auto relative'>
          {/* Profile image container with futuristic border effect */}
          <div className='absolute inset-0 rounded-full border-2 border-accent/50 animate-pulse'></div>
          <div className='absolute inset-2 rounded-full border border-cyan/30'></div>
          <div className='absolute inset-0 flex items-center justify-center'>
            {/* Replace with your actual profile image */}
            <div className='h-64 w-64 rounded-full bg-gradient-to-br from-card via-background to-accent/20 flex items-center justify-center text-4xl font-bold text-accent'>
              VX
            </div>
          </div>
        </div>
      </div>

      <div className='w-full md:w-1/2 space-y-6'>
        <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-accent to-teal'>
          Hi, I'm <span className='text-accent'>Your Name</span>
        </h1>

        <h2 className='text-xl md:text-2xl font-light text-subtext'>Software Engineer & Full Stack Developer</h2>

        <div className='prose prose-invert max-w-none space-y-4'>
          <p className='text-lg leading-relaxed'>
            I'm a Software Engineer with extensive experience in Full Stack Web Development, specializing in creating
            futuristic and responsive user interfaces.
          </p>

          <p className='text-lg leading-relaxed'>
            Passionate about technology and helping others reach their dreams through innovative solutions. My approach
            combines technical expertise with creative problem-solving.
          </p>

          <p className='text-lg leading-relaxed'>
            When I'm not coding, I enjoy exploring the outdoors, playing video games, and expanding my horizons through
            reading.
          </p>
        </div>

        <div className='pt-6'>
          <a
            href='#contact'
            className='inline-block px-8 py-3 bg-gradient-to-r from-accent to-teal text-background font-bold rounded-md hover:shadow-futuristic transition-all duration-300'
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  )
}

export default About
