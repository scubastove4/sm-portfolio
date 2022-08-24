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
              {clicked && selectedProject.id === project.id ? (
                <Description project={project} />
              ) : (
                <ImageCard project={project} />
              )}
              <div className="btn-container">
                <button onClick={() => toggleClicked(project)}>
                  Description
                </button>
                <button>
                  <a
                    href={`${project.site}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Site
                  </a>
                </button>
                <button>
                  <a
                    href={`${project.repo}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Home
