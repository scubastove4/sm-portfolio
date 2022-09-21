import Description from '../components/Description'

const Projects = ({ allProjects, toProjectDetails }) => {
  return (
    <div id="projects-page">
      {allProjects
        ?.sort((a, b) => {
          return b.id - a.id
        })
        .map((project) => (
          <div id="proj-pg-container" key={project.id}>
            <Description
              project={project}
              toProjectDetails={toProjectDetails}
            />
            <div className="btn-container">
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
  )
}

export default Projects
