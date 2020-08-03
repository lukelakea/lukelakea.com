import Controller from '@ember/controller';
import Ember from 'ember';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

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
    return Ember.A(this.get('model.data.children'))
    .filter((c)=>{
      var imgLink = c.data.url;
      if(imgLink.search(".jpg")>0 || imgLink.search(".png")>0 || imgLink.search(".gif")>0 ){
        return c;
      }
    });
  })
})
