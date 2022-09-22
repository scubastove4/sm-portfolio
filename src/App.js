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
  const [selectedProject, setSelectedProject] = useState({})
  const [projectDetail, setProjectDetail] = useState(null)

  const loadProject = async (projectId) => {
    const loadedProject = await projects.find(
      (project) => project.id === projectId
    )
    setProjectDetail(loadedProject)
  }

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

  // const toProjects = () => {
  //   navigate('/projects')
  // }

  return (
    <div id="app-content">
      <NavBar />
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                projects={projects}
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
                projects={projects}
                toProjectDetails={toProjectDetails}
              />
            }
          />
          <Route
            path="/projects/:projectId"
            element={
              <ProjectDetails
                // toProjects={toProjects}
                loadProject={loadProject}
                projectDetail={projectDetail}
              />
            }
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
