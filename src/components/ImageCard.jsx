import rth from '../images/rth.png'

const ImageCard = ({ project }) => {
  return (
    <div
      className="image"
      style={{ backgroundImage: `url(.${project.image})` }}
    ></div>
  )
}

export default ImageCard
