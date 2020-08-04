import Controller from '@ember/controller';
import Ember from 'ember';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import MagicGrid from "magic-grid"

var sorting = 'top';

export default Controller.extend({
  queryParams : ['time'],
  time : 'all',
  @tracked fullImgIsVisible: false,
  @tracked fullImgUrl: null,
  @tracked linkToReddit: null,
  model: [],
  actions:{
    updateSubreddit: function(value) {
      this.transitionToRoute('griddit.subreddit',value, {queryParams: { time: this.get('time') }});
    },
    updateTime: function(value) {
      this.set('time',value);
    },
    showFullImg: function(value, redditLink){
      this.fullImgIsVisible = this.fullImgIsVisible? false : true;
      this.fullImgUrl = value;
      this.linkToReddit = "https://reddit.com" + redditLink;
    },
    hideFullImg: function(){
      this.fullImgIsVisible = this.fullImgIsVisible? false : true;
    },
  },
  filteredChildren: Ember.computed('model',function(){
    return Ember.A(this.get('model.data.children')).filter((c)=>{
      return c.data.thumbnail && c.data.thumbnail.match(/\.(jpg|png|gif)($|\?)/)
    });
  })
})
