const ImageCard = ({ project }) => {
  return (
    <div className="image-container">
      <h2>{project.title}</h2>
      <div
        className="image"
        style={{ backgroundImage: `url(.${project.image})` }}
      ></div>
    </div>
  )
}

export default ImageCard
