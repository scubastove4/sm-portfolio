const ImageCard = ({ project, toggleClicked }) => {
  return (
    <div className="image-container" onClick={() => toggleClicked(project)}>
      <h2>{project.title}</h2>
      <div
        className="image"
        style={{ backgroundImage: `url(.${project.image})` }}
      ></div>
    </div>
  )
}

export default ImageCard
