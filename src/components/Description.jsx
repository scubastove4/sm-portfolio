const Description = ({ project }) => {
  return (
    <div className="description">
      <h2>{project.title}</h2>
      <p>{project.description}</p>
      <p>{project.technologies}</p>
    </div>
  )
}

export default Description
