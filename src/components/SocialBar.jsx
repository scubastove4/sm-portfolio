import { NavLink } from 'react-router-dom'
import { AiOutlineLinkedin, AiOutlineMail, AiFillGithub } from 'react-icons/ai'

const Social = () => {
  return (
    <footer>
      <a
        href="https://www.linkedin.com/in/stephen-morello/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <AiOutlineLinkedin />
      </a>
      <NavLink
        to="/contact"
        className={({ isActive }) => (isActive ? 'active' : undefined)}
      >
        <AiOutlineMail />
      </NavLink>
      <a
        href="https://github.com/scubastove4"
        target="_blank"
        rel="noopener noreferrer"
      >
        <AiFillGithub />
      </a>
    </footer>
  )
}

export default Social
