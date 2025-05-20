import Layout from './components/Layout'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
// import './App.css'; // We can re-enable or replace this later

function App() {
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
