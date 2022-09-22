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
    repo: 'https://github.com/scubastove4/Run-the-Horses',
    featured: false
  },
  {
    id: '2',
    image: dejaBrew,
    title: 'Déjà Brew',
    description:
      'Public catalog, where users can add, rate, and review beers. Incorporates geolocation to find nearby breweries sourced from the Open Brewery DB API.',
    technologies:
      'MongoDB/Mongoose, Express, React, Node.js, Git/GitHub, and Open Brewery DB',
    site: 'https://deja-brew-reviews.herokuapp.com/',
    repo: 'https://github.com/scubastove4/Deja_Brew',
    featured: true
  },
  {
    id: '3',
    image: '',
    title: 'fitter',
    description:
      '\nTwitter for fitness enthusiasts.\nAs a group, we collaborated on custom frontend and backend REST API.\nI managed user auth, code review/debugging, and Github backend branch policies/version control.',
    technologies:
      'PostgreSQL/Sequelize, Express, React, Node.js, Git/GitHub, BCrypt, JWT, Multer, and Firebase',
    site: 'https://get-fitter-two.herokuapp.com/',
    repo: 'https://github.com/scubastove4/fitter-frontend',
    featured: true
  },
  {
    id: '4',
    image: '',
    title: 'Buy My Stuff',
    description:
      '\nEcommerce site, with separate admin and customer models, that conditionally render specific functionality.\nThe goal of this project is to make an intuitive, easy-to-use template that a growing small business can replicate and modify to suit their needs.',
    technologies:
      'PostgreSQL/Sequelize, Express, Vue, Node.js, Git/GitHub, BCrypt, JWT, Multer, Firebase, and Stripe',
    site: 'https://www.buy-my-stuff-online.com',
    repo: 'https://github.com/scubastove4/buy-my-stuff',
    featured: true
  }
]

// \nBuilt with PostgreSQL (Sequelize), Express, Vue, Node.js, & Git/GitHub. Developed custom API with user authentication (BCrypt & JWT), and reusable components, with a focus on clean code.

export default projects
