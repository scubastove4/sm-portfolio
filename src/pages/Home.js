import Description from '../components/Description'
import ImageCard from '../components/ImageCard'

const Home = ({ allProjects, clicked, selectedProject, toggleClicked }) => {
  return (
    <div id="home">
      <section id="blurb">
        <h1>Steve Morello</h1>
        <h2>Hi! Welcome to my page!</h2>
      </section>
      <section id="proj-container">
        <div id="card-container">
          {allProjects.map((project) => (
            <div key={project.id} className="card">
              {clicked && selectedProject.id === Number(project.id) ? (
                <Description project={project} toggleClicked={toggleClicked} />
              ) : (
                <ImageCard project={project} toggleClicked={toggleClicked} />
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Home
