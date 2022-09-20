import profPic from '../images/test-prof-pic.jpeg'

const About = () => {
  return (
    <section id="about">
      <img src={profPic} alt="Steve" />
      <p>
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
      <h2>Technologies</h2>
      <p>Libraries: JavaScript, Python, SQL, CSS, HTML</p>
      <p>Frameworks: React, Node, Django, Express, MongoDB, Git</p>
      <p>Other: GitHub, Firebase, Netlify, Heroku, Surge</p>
    </section>
  )
}

export default About
