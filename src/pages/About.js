import profPic from '../images/test-prof-pic.jpeg'

const About = () => {
  return (
    <section id="about">
      <img src={profPic} alt="Steve" />
      <h2 id="bio-title">Bio</h2>
      <p id="bio">
        I am a software engineer who enjoys travel and learning creative methods
        for crafting user-friendly, interactive applications and software. I
        approach each language and framework like traversing a new city or
        country - diving in head-first to see everything they have to offer,
        manipulating something elaborate, yet familiar, into an experience the
        user wants to revisit. Along the journey, I relish the opportunity to
        share the knowledge gained with my teammates. My background in the
        food-service industry, mental health and substance use care, and
        healthcare operations, makes me flexible and adaptable to rapidly
        changing circumstances.
      </p>
      <h2 id="about-tech-title">Technologies</h2>
      <span id="libraries">
        <h3>Libraries:</h3>
        <p>JavaScript, Python, SQL, CSS, HTML</p>
      </span>
      <span id="frameworks">
        <h3>Frameworks:</h3>
        <p>React, Node, Django, Express, MongoDB, Git</p>
      </span>
      <span id="other-skills">
        <h3>Other:</h3>
        <p>GitHub, Firebase, Netlify, Heroku, Surge</p>
      </span>
    </section>
  )
}

export default About
