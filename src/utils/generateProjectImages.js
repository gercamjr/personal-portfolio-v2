// This is a placeholder script to generate project images
// In a real-world scenario, you'd replace these with actual project screenshots

const canvas = document.createElement('canvas')
const ctx = canvas.getContext('2d')
canvas.width = 800
canvas.height = 600

// Project placeholders to generate
const projects = [
  { name: 'project-ecommerce.jpg', color: '#19e6ff' },
  { name: 'project-taskmanager.jpg', color: '#00bfae' },
  { name: 'project-portfolio.jpg', color: '#00f6ff' },
  { name: 'project-weather.jpg', color: '#6be6ff' },
]

// Generate placeholder images
projects.forEach((project) => {
  // Create gradient background
  const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height)
  gradient.addColorStop(0, '#0a1015')
  gradient.addColorStop(1, project.color)

  // Fill background
  ctx.fillStyle = gradient
  ctx.fillRect(0, 0, canvas.width, canvas.height)

  // Add project name
  ctx.font = 'bold 40px Arial'
  ctx.fillStyle = '#ffffff'
  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'
  ctx.fillText(project.name.replace('.jpg', ''), canvas.width / 2, canvas.height / 2)

  // In a real app, you would save this image to the public folder
  console.log(`Generated placeholder for ${project.name}`)
})

// Instructions for actual implementation:
// 1. Replace placeholders with real project screenshots
// 2. Save images to the public folder
// 3. Ensure images are optimized for web (compress, proper dimensions)
// 4. Consider using different sizes for responsive design
