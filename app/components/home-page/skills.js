import Component from '@glimmer/component';

export default class SkillsComponent extends Component {
  // Set the "categories" property to a JavaScript object
  // with the category name as the key and the value a list
  // of products.
  skills = [
    { name: 'Javascript', level: 5 },
    { name: 'HTML', level: 5 },
    { name: 'CSS' , level: 5 },
    { name: 'Python' , level: 4 },
    { name: 'Jquery' , level: 4 },
    { name: 'Java', level: 4 }
  ]
}
