import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class GridditSubredditRoute extends Route{
  @service ajax;
  queryParams = {
    time: {
      refreshModel: true
    }
  };
    model(params){
    return this.ajax.request('https://www.reddit.com/r/' + params.subreddit_id + '/top.json?t=' + params.time);
  }
}
