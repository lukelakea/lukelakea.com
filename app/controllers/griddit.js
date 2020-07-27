import Controller from '@ember/controller';
import Ember from 'ember';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

var sorting = 'top';

export default Controller.extend({
  subredditName: 'accidentalrenaissance',
  subredditTimeRange: 'all',
  @tracked fullImgIsVisible: false,
  @tracked fullImgUrl: null,
  @tracked linkToReddit: null,
  subredditData: [],
  actions:{
    updateSubreddit: function(value) {
      this.set("subredditName", value);
    },
    updateTime: function(value) {
      this.set("subredditTimeRange", value);
    },
    submit: function(value){
      this.subredditSubmitAction();
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
  init(){
    this._super(...arguments);
    this.subredditSubmitAction();
  },
  ajax: Ember.inject.service(),
  subredditSubmitAction(){
    // console.log(this.get('ajax').request('https://www.reddit.com/r/' + this.subredditName + '/' + sorting + '.json?t=' + this.subredditTimeRange));
    this.get('ajax').request('https://www.reddit.com/r/' + this.subredditName + '/' + sorting + '.json?t=' + this.subredditTimeRange).then((res)=>{
      this.set("subredditData", res);
    });
  },
  filteredChildren: Ember.computed('subredditData',function(){
    return Ember.A(this.get('subredditData.data.children'))
    .filter((c)=>{
      var imgLink = c.data.url;
      if(imgLink.search(".jpg")>0 || imgLink.search(".jpg")>0 || imgLink.search(".gif")>0 ){
        return c;
      }
    });
  })
})
