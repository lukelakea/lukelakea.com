import Component from '@ember/component';

export default class SkillsComponent extends Component {
  // Set the "categories" property to a JavaScript object
  // with the category name as the key and the value a list
  // of products.
  skills = [
    { name: 'Javascript', level: 5, empty: 0 },
    { name: 'HTML', level: 5, empty: 0 },
    { name: 'CSS' , level: 5, empty: 0 },
    { name: 'Python' , level: 4, empty: 1 },
    { name: 'Jquery' , level: 4, empty: 1 },
    { name: 'Java', level: 4,  empty: 1 },
    { name: 'MySql', level: 3,  empty: 2 }
  ]
}
