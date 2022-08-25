import { useState, useEffect } from 'react'

const ImageCard = ({ project }) => {
  // const [order, setOrder] = useState(null)
  // const reorder = (project) => {
  //   if (project.id === 1) {
  //     setOrder(3)
  //   } else if (project.id === 2) {
  //     setOrder(2)
  //   } else {
  //     setOrder(1)
  //   }
  // }

  // useEffect(() => {
  //   reorder(project)
  // }, [])

  return (
    <div
      className="image-container"
      // style={{ order: `${order}` }}
    >
      <h2>{project.title}</h2>
      <div
        className="image"
        style={{ backgroundImage: `url(${project.image})` }}
      ></div>
    </div>
  )
}

export default ImageCard
