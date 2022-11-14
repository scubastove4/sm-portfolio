import rth from '../images/rth.png'
import dejaBrew from '../images/dejaBrew.png'
import fitter from '../images/fitter-main-feed.png'
import bms from '../images/bms-img.png'

const projects = [
  {
    id: '1',
    image: rth,
    title: 'Run the Horses',
    testUser: '',
    testPassword: '',
    description:
      "Run the Horses brings the world's most famous race series right to your desktop. A series of card flips determines your Triple Crown destiny!",
    technologies: 'HTML, CSS, Vanilla JavaScript, and Git/GitHub',
    site: 'https://runthehorses.surge.sh/',
    repo: 'https://github.com/scubastove4/Run-the-Horses',
    featured: false,
    plannedUpdates: [],
    challenges: ['Dynamic "track" size']
  },
  {
    id: '2',
    image: dejaBrew,
    title: 'Déjà Brew',
    testUser: '',
    testPassword: '',
    description:
      'Public catalog, where users can add, rate, and review beers. Incorporates geolocation to find nearby breweries sourced from the Open Brewery DB API.',
    technologies:
      'MongoDB/Mongoose, Express, React, Node.js, Git/GitHub, and Open Brewery DB',
    site: 'https://deja-brew-reviews.herokuapp.com/',
    repo: 'https://github.com/scubastove4/Deja_Brew',
    featured: true,
    plannedUpdates: ['Responsive design', 'Integrate Google Maps API'],
    challenges: ['First fullstack deployment bugs', 'Integrating Google Maps']
  },
  {
    id: '3',
    image: fitter,
    title: 'fitter',
    testUser: 'Login: testuser1',
    testPassword: 'Password: 12345678',
    description:
      'Twitter for fitness enthusiasts. As a group, we collaborated on custom frontend and backend REST API. I managed user auth, code review/debugging, and Github backend branch policies/version control.',
    technologies:
      'PostgreSQL/Sequelize, Express, React, Node.js, Git/GitHub, BCrypt, JWT, Multer, and Firebase',
    site: 'https://get-fitter-two.herokuapp.com/',
    repo: 'https://github.com/scubastove4/fitter-frontend',
    featured: true,
    plannedUpdates: ['Responsive design', 'More intuitive flow'],
    challenges: [
      'First time doing group Git',
      'Implementing optional file upload'
    ]
  },
  {
    id: '4',
    image: bms,
    title: 'Buy My Stuff',
    testUser:
      'Customer Login: testuser1@fake.com | Admin Login: testadmin1@fake.com',
    testPassword: 'Passwords: 12345678',
    adminLink: 'https://www.buy-my-stuff-online.com/admin',
    description:
      'Ecommerce site, with separate admin and customer models, that conditionally render specific functionality. The goal of this project is to make an intuitive, easy-to-use template that a growing small business can replicate and modify to suit their needs.',
    technologies:
      'PostgreSQL/Sequelize, Express, Vue, Node.js, Git/GitHub, BCrypt, JWT, Multer, Firebase, and Stripe',
    site: 'https://www.buy-my-stuff-online.com',
    repo: 'https://github.com/scubastove4/buy-my-stuff',
    featured: true,
    plannedUpdates: ['Responsive for web', 'Adjust credit card entry styling'],
    challenges: ['Integrating Stripe for payment processing']
  }
]

// \nBuilt with PostgreSQL (Sequelize), Express, Vue, Node.js, & Git/GitHub. Developed custom API with user authentication (BCrypt & JWT), and reusable components, with a focus on clean code.

export default projects
