import Component from "@ember/component";
import { action } from '@ember/object';

export default class SubredditSelector extends Component {

  @action
  updateAction(value) {
    // this.transitionToRoute('griddit.subreddit',value, {queryParams: { time: this.get('time') }});
    debugger;
    this.args.updateSubreddit(value);

  }
}
