import { NavLink } from 'react-router-dom'
import { AiOutlineLinkedin, AiOutlineMail, AiFillGithub } from 'react-icons/ai'

const Social = () => {
  return (
    <footer>
      <p id="p14">.</p>
      <p id="p15">.</p>
      <p id="p16">.</p>
      <p id="p17">.</p>
      <p id="p18">.</p>
      <a
        href="https://www.linkedin.com/in/stephen-morello/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <AiOutlineLinkedin />
      </a>
      <p id="p19">.</p>
      <p id="p20">.</p>
      <NavLink
        to="/contact"
        className={({ isActive }) => (isActive ? 'active' : undefined)}
      >
        <AiOutlineMail />
      </NavLink>
      <p id="p21">.</p>
      <p id="p22">.</p>
      <a
        href="https://github.com/scubastove4"
        target="_blank"
        rel="noopener noreferrer"
      >
        <AiFillGithub />
      </a>
      <p id="p23">.</p>
      <p id="p24">.</p>
      <p id="p25">.</p>
      <p id="p26">.</p>
      <p id="p27">.</p>
    </footer>
  )
}

export default Social
