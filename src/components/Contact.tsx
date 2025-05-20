import React, { useState } from 'react'

/**
 * Contact section with form and social links
 * @author Portfolio Owner
 * @returns {JSX.Element} Contact form and information
 */
const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  })

  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormStatus('submitting')

    // This is a mock submission - replace with your actual form submission logic
    // For example, you could use a service like Formspree, EmailJS, or your own backend
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // In a real implementation, you would send the form data to a server
      console.log('Form submitted:', formState)

      // Reset form
      setFormState({ name: '', email: '', message: '' })
      setFormStatus('success')

      // Reset status after 5 seconds
      setTimeout(() => setFormStatus('idle'), 5000)
    } catch (error) {
      console.error('Error submitting form:', error)
      setFormStatus('error')

      // Reset status after 5 seconds
      setTimeout(() => setFormStatus('idle'), 5000)
    }
  }

  // Social media links
  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/yourusername',
      icon: (
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
          className='feather feather-github'
        >
          <path d='M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22'></path>
        </svg>
      ),
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/yourusername',
      icon: (
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
          className='feather feather-linkedin'
        >
          <path d='M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z'></path>
          <rect x='2' y='9' width='4' height='12'></rect>
          <circle cx='4' cy='4' r='2'></circle>
        </svg>
      ),
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/yourusername',
      icon: (
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
          className='feather feather-twitter'
        >
          <path d='M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z'></path>
        </svg>
      ),
    },
  ]

  return (
    <section id='contact' className='py-16 md:py-24' aria-label='Contact Section'>
      <div className='text-center mb-16'>
        <h2 className='text-3xl md:text-4xl font-bold text-accent mb-4'>Get In Touch</h2>
        <p className='text-lg text-subtext max-w-2xl mx-auto'>
          Have a project in mind or want to discuss opportunities? Feel free to reach out!
        </p>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-16 max-w-6xl mx-auto'>
        {/* Contact Form */}
        <div className='bg-card rounded-lg p-8 border border-accent/20 hover:shadow-futuristic transition-all duration-500'>
          <h3 className='text-xl font-semibold text-accent mb-6'>Send a Message</h3>

          <form onSubmit={handleSubmit} className='space-y-6'>
            <div>
              <label htmlFor='name' className='block text-sm font-medium text-subtext mb-1'>
                Name
              </label>
              <input
                type='text'
                id='name'
                name='name'
                value={formState.name}
                onChange={handleChange}
                required
                className='w-full px-4 py-2 bg-background border border-accent/30 rounded-md focus:outline-none focus:ring-2 focus:ring-accent/50'
              />
            </div>

            <div>
              <label htmlFor='email' className='block text-sm font-medium text-subtext mb-1'>
                Email
              </label>
              <input
                type='email'
                id='email'
                name='email'
                value={formState.email}
                onChange={handleChange}
                required
                className='w-full px-4 py-2 bg-background border border-accent/30 rounded-md focus:outline-none focus:ring-2 focus:ring-accent/50'
              />
            </div>

            <div>
              <label htmlFor='message' className='block text-sm font-medium text-subtext mb-1'>
                Message
              </label>
              <textarea
                id='message'
                name='message'
                value={formState.message}
                onChange={handleChange}
                required
                rows={6}
                className='w-full px-4 py-2 bg-background border border-accent/30 rounded-md focus:outline-none focus:ring-2 focus:ring-accent/50 resize-none'
              ></textarea>
            </div>

            <button
              type='submit'
              disabled={formStatus === 'submitting'}
              className='w-full px-6 py-3 bg-gradient-to-r from-accent to-teal text-background font-bold rounded-md hover:opacity-90 transition-opacity disabled:opacity-70'
            >
              {formStatus === 'submitting' ? 'Sending...' : 'Send Message'}
            </button>

            {formStatus === 'success' && (
              <p className='text-teal text-sm text-center'>Your message has been sent successfully!</p>
            )}

            {formStatus === 'error' && (
              <p className='text-red-500 text-sm text-center'>
                There was an error sending your message. Please try again.
              </p>
            )}
          </form>
        </div>

        {/* Contact Information */}
        <div className='flex flex-col justify-between'>
          <div className='space-y-8'>
            <div>
              <h3 className='text-xl font-semibold text-accent mb-6'>Contact Information</h3>
              <div className='space-y-4'>
                <div className='flex items-start gap-4'>
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
                    className='text-subtext'
                  >
                    <path d='M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z'></path>
                    <polyline points='22,6 12,13 2,6'></polyline>
                  </svg>
                  <div>
                    <p className='text-sm text-subtext'>Email</p>
                    <a href='mailto:your.email@example.com' className='text-text hover:text-accent transition-colors'>
                      your.email@example.com
                    </a>
                  </div>
                </div>

                <div className='flex items-start gap-4'>
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
                    className='text-subtext'
                  >
                    <path d='M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z'></path>
                    <circle cx='12' cy='10' r='3'></circle>
                  </svg>
                  <div>
                    <p className='text-sm text-subtext'>Location</p>
                    <p className='text-text'>Your City, Country</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className='text-xl font-semibold text-accent mb-6'>Connect With Me</h3>
              <div className='flex gap-4'>
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='p-3 bg-card border border-accent/30 rounded-full hover:bg-accent/10 transition-colors text-subtext hover:text-accent'
                    aria-label={link.name}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className='mt-12 p-6 bg-background/50 rounded-lg border border-accent/20'>
            <p className='text-lg text-center'>Available for freelance opportunities and full-time positions.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
