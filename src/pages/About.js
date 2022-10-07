import { loremIpsum } from 'react-lorem-ipsum'

import profPic from '../images/test-prof-pic.jpeg'

const About = () => {
  return (
    <section id="about">
      <img src={profPic} alt="Steve" />
      <h2 id="about-tech-title">Technologies</h2>
      <span id="libraries">
        <h3>Languages:</h3>
        <p>JavaScript, Python, SQL, CSS, HTML</p>
      </span>
      <span id="frameworks">
        <h3>Frameworks &#38; Libraries:</h3>
        <p>
          React, Vue, Node, Express, PostgreSQL, MongoDB, Django, Git,
          Stripe.js, Stripe API
        </p>
      </span>
      <span id="other-skills">
        <h3>Other Tools:</h3>
        <p>
          GitHub, Firebase Storage, Firebase Authentication, Multer, Netlify,
          Heroku, Surge
        </p>
      </span>
      <span id="bio-details">
        <h2 id="bio-title">Bio</h2>
        <p id="bio">
          I am a software engineer who enjoys travel and learning creative
          methods for crafting user-friendly, interactive applications and
          software. I approach each language and framework like traversing a new
          city or country - diving in head-first to see everything they have to
          offer, manipulating something elaborate, yet familiar, into an
          experience the user wants to revisit. Along the journey, I relish the
          opportunity to share the knowledge gained with my teammates. My
          background in the food-service industry, mental health and substance
          use care, and healthcare operations, makes me flexible and adaptable
          to rapidly changing circumstances.
        </p>
        <br />
        <div id="trips">
          <h3>Some Places I've Been:</h3>
          <h4 id="us-h">US</h4>
          <p>
            {/* id="us-p" */}
            New York: Finger Lakes | Utah: Bryce Canyon, Zion Canyon | Arizona:
            Grand Canyon | Hawaii: Maui | California: San Diego, Hermosa Beach,
            Santa Monica
          </p>
          <h4 id="international-h">International</h4>
          <p>
            {/* id="international-p" */}
            New Zealand: South Island | Australia: Sydney, Cairns (Great Barrier
            Reef) | Thailand: Bangkok, Phi Phi Island, Khanchanaburi, Koh Chang
            | Italy: Rome | Ireland: Dublin, Galway, Roscommon, Donegal
          </p>
        </div>
      </span>
    </section>
  )
}

export default About
