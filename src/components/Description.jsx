const Description = ({ project, toProjectDetails }) => {
  return (
    <div
      className="descript-container"
      onClick={() => toProjectDetails(project.id)}
    >
      <img
        src={project.image}
        alt={project.image ? project.name : 'image pending'}
      />
      <h2 className="title">{project.title}</h2>
      <p className="description">{project.description}</p>
      <span className="tech-container">
        <h3 className="tech-title">Technologies Used: </h3>
        <p className="tech">{project.technologies}</p>
        {project.testUser && <p className="test-user">{project.testUser}</p>}
        {project.testPassword && (
          <p className="test-password">{project.testPassword}</p>
        )}
        {project.adminLink && (
          <a href={project.adminLink}>
            <button>Admin Link</button>
          </a>
        )}
      </span>
    </div>
  )
}

export default Description
