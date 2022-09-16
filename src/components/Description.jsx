const Description = ({ project }) => {
  return (
    <div className="descript-container">
      <h2 className="title">{project.title}</h2>
      <p className="description">{project.description}</p>
      <span className="tech-container">
        <h3 className="tech-title">Technologies Used: </h3>
        <p className="tech">{project.technologies}</p>
      </span>
    </div>
  )
}

export default Description
