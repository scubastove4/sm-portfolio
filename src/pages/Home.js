import Description from '../components/Description'
import { IoIosArrowForward } from 'react-icons/io'

const Home = ({
  projects,
  clicked,
  selectedProject,
  toggleClicked,
  toProjectDetails
}) => {
  return (
    <div id="home">
      <section id="blurb">
        <h1>Steve Morello</h1>
        <h2>Software Engineer</h2>
      </section>
      <section id="proj-container">
        <div id="featured-projects">
          <h3>Featured Projects</h3>
          <IoIosArrowForward />
          <IoIosArrowForward />
          <IoIosArrowForward />
        </div>
        <div id="card-container">
          {projects
            ?.sort((a, b) => {
              return b.id - a.id
            })
            .map(
              (project) =>
                project.featured && (
                  <div key={project.id} className="card">
                    {clicked && selectedProject.id === project.id ? (
                      <Description
                        project={project}
                        toProjectDetails={toProjectDetails}
                      />
                    ) : (
                      <div className="sun">
                        <h2>{project.title}</h2>
                        {project.testUser && <h3>{project.testUser}</h3>}
                        {project.testPassword && (
                          <h3>{project.testPassword}</h3>
                        )}
                        {project.adminLink && (
                          <a href={project.adminLink}>
                            <button>Admin Link</button>
                          </a>
                        )}
                      </div>
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
                )
            )}
        </div>
      </section>
    </div>
  )
}

export default Home
