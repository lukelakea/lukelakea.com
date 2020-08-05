import Component from "@ember/component";
import { action } from '@ember/object';

export default class TimeSelector extends Component {

  @action
  updateTime(value) {
    this.set('time',value);
  }
}
