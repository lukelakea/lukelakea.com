import Component from '@glimmer/component';

export default class SkillsComponent extends Component {
  // Set the "categories" property to a JavaScript object
  // with the category name as the key and the value a list
  // of products.
  skills = {
    'Javascript': [5],
    'HTML': [5],
    'CSS' : [5],
    'Python' : [4],
    'Jquery' : [4],
    'Java' : [4]
  };
};
