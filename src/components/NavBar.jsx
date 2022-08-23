import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav>
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? 'active' : undefined)}
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) => (isActive ? 'active' : undefined)}
      >
        About
      </NavLink>
      <NavLink
        to="/projects"
        className={({ isActive }) => (isActive ? 'active' : undefined)}
      >
        Projects
      </NavLink>
      <NavLink
        to="/resume"
        className={({ isActive }) => (isActive ? 'active' : undefined)}
      >
        Resume
      </NavLink>
    </nav>
  )
}

export default NavBar
