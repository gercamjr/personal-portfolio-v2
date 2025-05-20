# Personal Portfolio v2

A modern personal portfolio website with a futuristic design theme. This project showcases my skills, projects, and contact information in an interactive and visually appealing way.

## Technology Stack

- **Frontend Framework**: React 19
- **Language**: TypeScript
- **Build Tool**: Vite 6
- **CSS Framework**: TailwindCSS 4
- **Linting**: ESLint 9

## Project Structure

The project follows a standard React application structure:

- `src/` - Contains the source code for the application
  - `components/` - Contains React components organized by feature/section
  - `assets/` - For static assets like images and icons
  - `App.tsx` - Main application component
  - `main.tsx` - Entry point of the application

## Components Overview

The portfolio includes several key sections, each implemented as a separate component:

1. `Layout.tsx` - The main wrapper component that includes the Header and Footer
2. `Header.tsx` - Navigation header with links to different sections
3. `About.tsx` - About section containing personal information
4. `Skills.tsx` - Section to showcase technical skills
5. `Projects.tsx` - Portfolio project showcase
6. `Contact.tsx` - Contact information section
7. `Footer.tsx` - Website footer

## Design Theme

The project has a futuristic design theme with:

- Custom color palette with blues, teals, and cyans
- Dark mode support enabled via Tailwind's class-based dark mode
- Futuristic shadows and styling
- Custom font families including Orbitron and Exo

The styling is implemented using TailwindCSS, with custom configuration in `tailwind.config.js` that extends the default theme with custom colors, fonts, and shadow effects.

## Development Workflow

To work with this project:

1. **Development**: Run `npm run dev` to start the Vite development server
2. **Building**: Run `npm run build` to compile TypeScript and build the project for production
3. **Linting**: Run `npm run lint` to check code quality with ESLint
4. **Preview**: Run `npm run preview` to preview the production build locally

## Notable Features

- Modern React with Strict Mode enabled
- TypeScript for type safety
- Responsive design implemented with Tailwind
- Class-based dark mode support
- JSDoc documentation in components
- Modern ESLint configuration for code quality

## ESLint Configuration

This project uses a modern ESLint setup with TypeScript support. The configuration can be found in `eslint.config.js`. It includes:

- Type-aware linting rules
- React-specific linting rules
- Stylistic rules for consistent code formatting

## Getting Started

1. Clone the repository
2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
