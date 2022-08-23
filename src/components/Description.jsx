const Description = ({ project, toggleClicked }) => {
  return (
    <div className="descript-container" onClick={() => toggleClicked(project)}>
      <div className="descript-inner-container">
        <p className="description">{project.description}</p>
        <h2 className="title">{project.title}</h2>
        <span className="tech-container">
          <h3 className="tech-title">Technologies Used: </h3>
          <p className="tech">{project.technologies}</p>
        </span>
      </div>
    </div>
  )
}

export default Description
