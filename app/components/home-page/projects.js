import Component from '@ember/component';

export default class ProjectsComponent extends Component {
  // Set the "categories" property to a JavaScript object
  // with the category headerImg as the key and the value a list
  // of products.
  projects = [
    { headerImg: 'gridditlogo.png', videoUrl: 'griddit.webm' },
    { headerImg: 'recruitmelogo.png', videoUrl: 'recruitme.webm' },
    { headerImg: 'applogo.png' , videoUrl: 'microapp.webm' },
    { headerImg: 'leaplogo.png' , videoUrl: 'leapsign.webm' },
    { headerImg: 'e2elogo.png' , videoUrl: 'usvote.webm' },
  ]
}
