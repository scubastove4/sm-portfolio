import { useState } from 'react'

import Description from '../components/Description'
import ImageCard from '../components/ImageCard'

import { projects } from '../globals'

const Home = () => {
  const [clicked, setClicked] = useState(false)
  return (
    <div id="home">
      <section id="blurb">
        <h1>Steve Morello</h1>
        <h2>Hi! Welcome to my page!</h2>
      </section>
      <section id="proj-container">
        {/* {projects.map((projects) => (
          <div>{clicked ? <ImageCard /> : <Description />}</div>
        ))} */}
      </section>
    </div>
  )
}

export default Home
