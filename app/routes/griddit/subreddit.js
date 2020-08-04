import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';
import MagicGrid from "magic-grid"
import Ember from 'ember';

export default class GridditSubredditRoute extends Route {
  @service ajax;
  queryParams = {
    time: {
      refreshModel: true
    }
  };
  model(params){
    return this.ajax.request('https://www.reddit.com/r/' + params.subreddit_id + '/top.json?t=' + params.time);

  };
  setupController(controller, model) {
    super.setupController(controller, model);
    let rtn = Ember.A(model.data.children.filter((c)=>{
      return c.data.thumbnail && c.data.thumbnail.match(/\.(jpg|png|gif)($|\?)/)
    }));
    Ember.run.scheduleOnce('afterRender', this, () => {
      let magicGrid = new MagicGrid({
        container: "#mg-container", // Required. Can be a class, id, or an HTMLElement
        static: false, // Required for static content. Default: false.
        items: rtn.length, // Required for dynamic content. Initial number of items in the container.
        gutter: 30, // Optional. Space between items. Default: 25(px).
        maxColumns: 5, // Optional. Maximum number of columns. Default: Infinite.
        useMin: true, // Optional. Prioritize shorter columns when positioning items? Default: false.
        useTransform: true, // Optional. Position items using CSS transform? Default: True.
        animate: false, // Optional. Animate item positioning? Default: false.
        center: true, //Optional. Center the grid items? Default: true.
      });
      magicGrid.listen();
    });
  }
}
