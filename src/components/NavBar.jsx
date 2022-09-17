import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav>
      <p id="p1">.</p>
      <p id="p2">.</p>
      <p id="p3">.</p>
      <p id="p4">.</p>
      <p id="p5">.</p>
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? 'active' : undefined)}
      >
        Home
      </NavLink>
      <p id="p6">.</p>
      <p id="p7">.</p>
      <NavLink
        to="/about"
        className={({ isActive }) => (isActive ? 'active' : undefined)}
      >
        About
      </NavLink>
      <p id="p8">.</p>
      <p id="p9">.</p>
      <NavLink
        to="/projects"
        className={({ isActive }) => (isActive ? 'active' : undefined)}
      >
        Projects
      </NavLink>
      <p id="p29">.</p>
      <p id="p30">.</p>
      <NavLink
        to="/resume"
        className={({ isActive }) => (isActive ? 'active' : undefined)}
      >
        Resume
      </NavLink>
      <p id="p10">.</p>
      <p id="p11">.</p>
      <p id="p12">.</p>
      <p id="p13">.</p>
      <p id="p14">.</p>
    </nav>
  )
}

export default NavBar
