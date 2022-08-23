import { useState } from 'react'

import Description from '../components/Description'
import ImageCard from '../components/ImageCard'

import projects from '../assets/globals'

const Home = () => {
  const [clicked, setClicked] = useState(true)
  return (
    <div id="home">
      <section id="blurb">
        <h1>Steve Morello</h1>
        <h2>Hi! Welcome to my page!</h2>
      </section>
      <section id="proj-container">
        <div id="card-container">
          {projects.map((project) => (
            <div key={project.id} className="card">
              {clicked ? (
                <ImageCard project={project} />
              ) : (
                <Description project={project} />
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Home
