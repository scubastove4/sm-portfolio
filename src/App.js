import { useState } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'

import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import ProjectDetails from './pages/ProjectDetails'
import Resume from './pages/Resume'
import Contact from './pages/Contact'
import NavBar from './components/NavBar'
import SocialBar from './components/SocialBar'
import projects from './assets/globals'

import './App.css'

function App() {
  const [clicked, setClicked] = useState(false)
  // const [allProjects, setAllProjects] = useState(projects)
  const allProjects = projects
  const [selectedProject, setSelectedProject] = useState({})
  let navigate = useNavigate()

  const toggleClicked = (project) => {
    if (!clicked) {
      setClicked(true)
      setSelectedProject(project)
    } else {
      setClicked(false)
      setSelectedProject({})
    }
  }

  const toProjectDetails = (projectId) => {
    navigate(`/projects/${projectId}`)
  }

  const toProjects = () => {
    navigate('/projects')
  }

  return (
    <div id="app-content">
      <NavBar />
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                allProjects={allProjects}
                clicked={clicked}
                selectedProject={selectedProject}
                toggleClicked={toggleClicked}
                toProjectDetails={toProjectDetails}
              />
            }
          />
          <Route path="/about" element={<About />} />
          <Route
            path="/projects"
            element={
              <Projects
                allProjects={allProjects}
                toProjectDetails={toProjectDetails}
              />
            }
          />
          <Route
            path="/projects/:id"
            element={<ProjectDetails toProjects={toProjects} />}
          />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <SocialBar />
    </div>
  )
}

export default App
