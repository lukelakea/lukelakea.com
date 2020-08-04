// import EmberRouter from "@ember/routing/router";
import config from "./config/environment";
import EmberRouterScroll from 'ember-router-scroll';

export default class Router extends EmberRouterScroll {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('griddit', function(){
    this.route('subreddit', {path: '/:subreddit_id'});
  });
  this.route("home-page", { path: "/" });
});
