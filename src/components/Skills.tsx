import React from 'react'

/**
 * Skills section showcasing technical abilities with a futuristic design
 * @author Portfolio Owner
 * @returns {JSX.Element} Skills section with categorized technical skills
 */
const Skills: React.FC = () => {
  // Define skill categories
  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'React', level: 90 },
        { name: 'TypeScript', level: 85 },
        { name: 'HTML/CSS', level: 95 },
        { name: 'TailwindCSS', level: 90 },
        { name: 'Next.js', level: 80 },
      ],
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', level: 85 },
        { name: 'Express', level: 80 },
        { name: 'PostgreSQL', level: 75 },
        { name: 'MongoDB', level: 80 },
        { name: 'GraphQL', level: 70 },
      ],
    },
    {
      title: 'DevOps & Tools',
      skills: [
        { name: 'Git', level: 90 },
        { name: 'Docker', level: 75 },
        { name: 'AWS', level: 70 },
        { name: 'CI/CD', level: 65 },
        { name: 'Jira', level: 85 },
      ],
    },
  ]

  return (
    <section id='skills' className='py-16 md:py-24' aria-label='Skills Section'>
      <div className='text-center mb-16'>
        <h2 className='text-3xl md:text-4xl font-bold text-accent mb-4'>Technical Skills</h2>
        <p className='text-lg text-subtext max-w-2xl mx-auto'>
          My expertise spans across various technologies and frameworks, with a focus on creating modern and responsive
          web applications.
        </p>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
        {skillCategories.map((category, categoryIndex) => (
          <div
            key={categoryIndex}
            className='bg-card rounded-lg p-6 border border-accent/20 hover:shadow-futuristic transition-all duration-500'
          >
            <h3 className='text-xl font-semibold text-accent mb-6 text-center'>{category.title}</h3>
            <div className='space-y-5'>
              {category.skills.map((skill, skillIndex) => (
                <div key={skillIndex} className='space-y-2'>
                  <div className='flex justify-between text-sm'>
                    <span>{skill.name}</span>
                    <span className='text-subtext'>{skill.level}%</span>
                  </div>
                  <div className='h-2 w-full bg-background rounded-full overflow-hidden'>
                    <div
                      className='h-full bg-gradient-to-r from-accent to-teal rounded-full'
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className='mt-16 text-center'>
        <h3 className='text-2xl font-semibold text-accent mb-6'>Other Skills</h3>
        <div className='flex flex-wrap justify-center gap-3'>
          {[
            'Agile',
            'UI/UX Design',
            'Responsive Design',
            'RESTful APIs',
            'Testing',
            'Performance Optimization',
            'Problem Solving',
            'Team Collaboration',
          ].map((skill, index) => (
            <span
              key={index}
              className='px-4 py-2 bg-card border border-accent/30 rounded-full text-sm hover:bg-accent/10 transition-colors'
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
