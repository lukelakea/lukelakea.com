import Component from '@ember/component';

import { action } from '@ember/object';

export default class ProjectsComponent extends Component {
  // Set the "categories" property to a JavaScript object
  // with the category headerImg as the key and the value a list
  // of products.
  projects = [
    {
      headerImg: 'gridditlogo.png',
      videoUrl: 'griddit.webm',
      desc: 'As a personal project, I wanted to create a web app that could show all the top voted posts in a given subreddit. I used Node.js and Snoowrap to access the reddit API, then dispalyed the posts in a gallery format using CSS grid and jQuery. The site is seemlessly scalable and you can click on a photo to view it as large as your browser window is.',
      internalLink: 'lukelakea.com/griddit',
      externalLink: 'https://github.com/lukelakea/Griddit',
      skillsUsed: ['HTML', 'CSS','SASS','Node.js','jQuery','Snoowrap','npm','Browserify','Git'],
      route: 'griddit'
    },
    {
      headerImg: 'recruitmelogo.png',
      videoUrl: 'recruitme.webm',
      desc: 'For my advanced web design class, I worked on a mock website for students and recruiters to seek each other out and make appointments. I developed the front end while my partner mainly did the back end. As a student you can sign up and look for companies that are hiring based on your area and field, or as a recruiter you can find students based on their skill set and message them to make an appointment.',
      skillsUsed: ['HTML', 'CSS','PHP','Bootstrap','JavaScript','MySQL','Git'],
    },
    {
      headerImg: 'applogo.png' ,
      videoUrl: 'microapp.webm',
      desc: 'In my mobile development class, my team got to work with Vermont EPSCoR in updating their iOS app. With constant communication and feedback with what they were looking for, we greatly improved the speed and functionality of the app while giving it a more unified look. Click here to view it on the app store.',
      skillsUsed: ['Xcode', 'Objective-C'],
    },
    {
      headerImg: 'leaplogo.png' ,
      videoUrl: 'leapsign.webm',
      desc: 'For human-computer interaction class, I developed a program for the Leap Motion that teaches the user the first ten digits of American Sign Language. I tracked the position of the joints in their hand and predicted and verified their input based on set data using the k-NN algorithm. The program was designed to be intuitive by using visual affordances without the need for explicit instruction.',
      skillsUsed: ['Python', 'Matplotlib', 'Leap Motion'],
    },
    {
      headerImg: 'e2elogo.png' ,
      videoUrl: 'usvote.webm',
      desc: 'My internship with Bear Code had me develop a parallax website for the US Vote Foundation. I learned how to use git and to work with a team of mentors to meet the client\'s specifications. Learning to build a parallax site helped in the creation of my own website.',
      externalLink: 'https://www.usvotefoundation.org/e2e-viv/',
      skillsUsed: ['HTML', 'CSS', 'Bootstrap', 'JavaScript', 'GSAP', 'Git'],
    },
  ]
}
