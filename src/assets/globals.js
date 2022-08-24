import rth from '../images/rth.png'
import dejaBrew from '../images/dejaBrew.png'

const projects = [
  {
    id: '1',
    image: rth,
    title: 'Run the Horses',
    description:
      "The goal of Run the Horses is to bring the world's most famous race series right to your desktop. A series of card flips will determine if you can win the Triple Crown... and more importantly the 'money.'",
    technologies: 'HTML, CSS, Vanilla JavaScript, and Git/GitHub',
    site: 'https://runthehorses.surge.sh/',
    repo: 'https://github.com/scubastove4/Run-the-Horses'
  },
  {
    id: '2',
    image: dejaBrew,
    title: 'Déjà Brew',
    description:
      'Public database where users can catalog beers, as well as provide ratings (averaged) and reviews (aggregated). Incorporates geolocation to find nearby breweries sourced from the Open Brewery DB API. In the works - responsive design and integrating Google Maps API to show brewery locations.',
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
      'Twitter clone for fitness enthusiasts. Developed custom API with user authentication, and reusable components, with a focus on clean code. As a group, we collaborated on both frontend and backend REST API. I managed authentication, code review/debugging, and Github branch policies and version control for the backend repo.',
    technologies:
      'PostgreSQL/Sequelize, Express, React, Node.js, Git/GitHub, BCrypt, JWT, Multer, and Firebase',
    site: '',
    repo: 'https://github.com/scubastove4/fitter-frontend'
  }
]

export default projects
