import rth from '../images/rth.png'
import dejaBrew from '../images/dejaBrew.png'

const projects = [
  {
    id: '1',
    image: rth,
    title: 'Run the Horses',
    description:
      "Run the Horses brings the world's most famous race series right to your desktop. A series of card flips determines your Triple Crown destiny!",
    technologies: 'HTML, CSS, Vanilla JavaScript, and Git/GitHub',
    site: 'https://runthehorses.surge.sh/',
    repo: 'https://github.com/scubastove4/Run-the-Horses'
  },
  {
    id: '2',
    image: dejaBrew,
    title: 'Déjà Brew',
    description:
      'Public catalog, where users can add, rate, and review beers. Incorporates geolocation to find nearby breweries sourced from the Open Brewery DB API.',
    technologies:
      'MongoDB/Mongoose, Express, React, Node.js, Git/GitHub, and Open Brewery DB.',
    site: 'https://deja-brew-reviews.herokuapp.com/',
    repo: 'https://github.com/scubastove4/Deja_Brew'
  },
  {
    id: '3',
    image: '',
    title: 'fitter',
    description:
      'Twitter for fitness enthusiasts. As a group, we collaborated on custom frontend and backend REST API. I managed user auth, code review/debugging, and Github backend branch policies/version control.',
    technologies:
      'PostgreSQL/Sequelize, Express, React, Node.js, Git/GitHub, BCrypt, JWT, Multer, and Firebase',
    site: '',
    repo: 'https://github.com/scubastove4/fitter-frontend'
  }
]

export default projects
