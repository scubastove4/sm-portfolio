import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

const ProjectDetails = ({ loadProject, projectDetail }) => {
  const { projectId } = useParams()

  useEffect(() => {
    loadProject(projectId)
  }, [])

  return (
    <div id="project-details-pg">
      {/* <span id="pd-header"> */}
      {/* <button></button> */}
      {projectDetail ? (
        <div id="proj-det-pg-container">
          <h2 id="pd-title">{projectDetail.title}</h2>
          {/* </span> */}
          <div id="pd-img-tech">
            <img
              src={projectDetail.image}
              alt={projectDetail.image ? projectDetail.name : 'image pending'}
            />
            <span id="pd-tech-container">
              <h3 id="pd-tech-title">Technologies Used:</h3>
              <p id="pd-tech">{projectDetail.technologies}</p>
            </span>
          </div>
          <p id="pd-description">{projectDetail.description}</p>
          <div id="pd-bottom-row">
            {projectDetail.testUser && (
              <span id="pd-test-container">
                <h3 id="pd-test-title">Test User Info</h3>
                <p id="pd-test-user">{projectDetail.testUser}</p>
                <p id="pd-test-password">{projectDetail.testPassword}</p>
                {projectDetail.adminLink && (
                  <a href={projectDetail.adminLink}>
                    <button>Admin Link</button>
                  </a>
                )}
              </span>
            )}
            <span id="pd-future-updates">
              <h3 id="pd-update-title">Future Updates:</h3>
              {projectDetail.futureUpdates.length > 0 ? (
                <ul>
                  {projectDetail.futureUpdates.map((update, index) => (
                    <li key={index}>{update}</li>
                  ))}
                </ul>
              ) : null}
            </span>
            <span id="pd-challenges-container">
              <h3 id="pd-challenges-title">Build Challenges:</h3>
              {projectDetail.challenges.length > 0 ? (
                <ul>
                  {projectDetail.challenges.map((challenge, index) => (
                    <li key={index}>{challenge}</li>
                  ))}
                </ul>
              ) : null}
            </span>
          </div>
        </div>
      ) : null}
    </div>
  )
}

export default ProjectDetails
