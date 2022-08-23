import rth from '../images/rth.png'
import dejaBrew from '../images/dejaBrew.png'

const projects = [
  {
    image: rth,
    title: 'Run the Horses',
    description:
      "The goal of Run the Horses is to bring the world's most famous race series right to your desktop. A series of card flips will determine if you can win the Triple Crown... and more importantly the 'money.'",
    technologies: 'HTML, CSS, Vanilla JavaScript, and Git/GitHub',
    id: '1'
  },
  {
    image: dejaBrew,
    title: 'Déjà Brew',
    description:
      'Public database where users can catalog beers, as well as provide ratings (averaged) and reviews (aggregated). Incorporates geolocation to find nearby breweries sourced from the Open Brewery DB API. In the works - responsive design and integrating Google Maps API to show brewery locations.',
    technologies:
      'MongoDB/Mongoose, Express, React, Node.js, Git/GitHub, and Open Brewery DB.',
    id: '2'
  },
  {
    image: '',
    title: 'fitter',
    description:
      'Twitter clone for fitness enthusiasts. Developed custom API with user authentication, and reusable components, with a focus on clean code. As a group, we collaborated on both frontend and backend REST API. I managed authentication, code review/debugging, and Github branch policies and version control for the backend repo.',
    technologies:
      'PostgreSQL/Sequelize, Express, React, Node.js, Git/GitHub, BCrypt, JWT, Multer, and Firebase',
    id: '3'
  }
]

export default projects
